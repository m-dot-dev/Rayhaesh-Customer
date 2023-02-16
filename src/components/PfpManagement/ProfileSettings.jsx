import {
  Button,
  Container,
  Grid,
  Group,
  NativeSelect,
  Paper,
  PasswordInput,
  Select,
  SimpleGrid,
  Text,
  Textarea,
  TextInput,
} from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { IconCheck, IconX } from '@tabler/icons'
import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import useAuth from '../hooks/useAuth'
import DropZone from '../Generic/DropZone'
import { uploadImage } from '../services/fileUpload'
import { PakistanCities } from '../Filters/cities'
import { showNotification } from '@mantine/notifications'

const ProfileSettings = (props) => {
  const match786 = useMediaQuery('(max-width: 786px)')
  const match310 = useMediaQuery('(max-width: 310px)')

  const [profileImage, setProfileImage] = React.useState(null)
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [confirmPassword, setConfirmPassword] = React.useState('')
  const [phone, setPhone] = React.useState('+92')
  const [whatsapp, setWhatsapp] = React.useState('+92')
  const [tempAddress, setTempAddress] = React.useState('')
  const [permAddress, setPermAddress] = React.useState('')
  const [about, setAbout] = React.useState('')
  const [zip, setZip] = React.useState()
  const [city, setCity] = React.useState('')
  const [agency, setAgency] = React.useState('')
  const [cnic, setCnic] = React.useState('')
  const [facebook, setFacebook] = React.useState('')
  const [instagram, setInstagram] = React.useState('')
  const [value, setValue] = React.useState(null)

  const cityData = PakistanCities.map((city) => ({
    label: city.label,
    value: city.value,
  }))

  const NUM_REGEX = /^(03[0-9]{2})\d{7}$/
  const CNIC_REGEX = /^[0-9+]{5}-[0-9+]{7}-[0-9]{1}$/
  const USER_REGEX = /^[A-z]{5,20}$/
  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/
  const EMAIL_REGEX = /^[A-z0-9._%+-]+@[A-z0-9.-]+\.[A-z]{2,4}$/

  const [validName, setValidName] = React.useState(false)
  const [validEmail, setValidEmail] = React.useState(false)
  const [validPassword, setValidPassword] = React.useState(false)
  const [validMatch, setValidMatch] = React.useState(false)
  const [validNumber, setValidNumber] = React.useState(false)
  const [validWhatsapp, setValidWhatsapp] = React.useState(false)
  const [validCnic, setValidCnic] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [user, setUser] = React.useState()

  const data = [{ label: 'PK', value: '+92' }]

  const countrySelect = (
    <NativeSelect
      data={data}
      styles={{
        input: {
          fontWeight: 500,
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
        },
      }}
    />
  )

  const { auth } = useAuth()

  useEffect(() => {
    setValidName(USER_REGEX.test(name))
  }, [name])

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email))
  }, [email])

  useEffect(() => {
    setValidPassword(PWD_REGEX.test(password))
    setValidMatch(password === confirmPassword)
  }, [password, confirmPassword])

  useEffect(() => {
    if (NUM_REGEX.test(phone)) {
      setValidNumber(true)
    } else {
      setValidNumber(false)
    }
  }, [phone])

  useEffect(() => {
    if (CNIC_REGEX.test(cnic)) {
      setValidCnic(true)
    } else {
      setValidCnic(false)
    }
  }, [cnic])

  useEffect(() => {
    if (NUM_REGEX.test(whatsapp)) {
      setValidWhatsapp(true)
    } else {
      setValidWhatsapp(false)
    }
  }, [whatsapp])

  useEffect(() => {
    axios
      .get(
        import.meta.env.VITE_REACT_APP_BACKEND_URL + '/user/getUserProfile',
        {
          headers: {
            token: localStorage.getItem('token'),
          },
        },
      )
      .then((res) => {
        setEmail(res.data?.body?.email)
        setName(res.data?.body?.name)
        setPhone(res.data?.body?.cellPhoneNumber)
        setWhatsapp(res.data?.body?.whatsappNumber)
        setTempAddress(res.data?.body?.temporaryAddress)
        setPermAddress(res.data?.body?.permanentAddress)
        setAbout(res.data?.body?.aboutUser)
        setZip(res.data?.body?.ZIPCode)
        setCity(res.data?.body?.city)
        setAgency(res.data?.body?.agency)
        setCnic(res.data?.body?.CNIC)
        setFacebook(res.data?.body?.facebook)
        setInstagram(res.data?.body?.instagram)
        setProfileImage(res.data?.body?.profileImage)
        setUser(res.data?.body)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  console.log('====================================')
  console.log('user ', user)
  console.log('====================================')

  const handleSave = async (e) => {
    e.preventDefault()

    const imageURL = await uploadImage(profileImage, 'user-profile-images')

    axios
      .patch(
        import.meta.env.VITE_REACT_APP_BACKEND_URL + '/user/updateProfile',
        {
          name,
          email,
          password,
          cellPhoneNumber: phone,
          whatsappNumber: whatsapp,
          temporaryAddress: tempAddress,
          permanentAddress: permAddress,
          aboutUser: about,
          ZIPCode: zip,
          city,
          agency,
          CNIC: cnic,
          profileImage: imageURL,
        },
        {
          headers: {
            token: localStorage.getItem('token'),
          },
        },
      )
      .then((res) => {
        console.log('update response: ', res)
        setLoading(false)
        if (res?.data?.success === true) {
          showNotification({
            title: 'Profile Updated',
            message: 'Changes Saved!',
            color: 'green',
            icon: <IconCheck size={14} />,
            autoClose: true,
          })
        } else {
          showNotification({
            title: 'Profile Upload Failed',
            message: 'Upload failed. Please try again.',
            color: 'red',
            icon: <IconX size={14} />,
            autoClose: true,
          })
        }
      })
      .catch((err) => {
        console.log('update error: ', err)
        setLoading(false)
      })
  }

  return (
    <Container>
      <Paper p="lg">
        <Text weight={600} style={{ fontSize: 30 }} align="center" mb={'lg'}>
          Profile Settings
        </Text>
        <form onSubmit={handleSave}>
          <Group
            style={{
              width: '100%',
            }}
            position="center"
          >
            <DropZone value={profileImage} setValue={setProfileImage} />
          </Group>
          <Grid columns={12} mt={'xl'}>
            <SimpleGrid
              cols={2}
              mt="xl"
              breakpoints={[{ maxWidth: 'sm', cols: 1 }]}
              style={{
                width: '100%',
              }}
            >
              <TextInput
                required
                label="Username"
                placeholder="Tehseen Riaz"
                value={name}
                onChange={(e) => setName(e.currentTarget.value)}
                style={{
                  width: '100%',
                }}
                aria-invalid={validName ? 'false' : 'true'}
                autoComplete="off"
                size="md"
                styles={{ input: { border: '1px solid #a7a7a8' } }}
              />
              <TextInput
                disabled={true}
                label="Email"
                placeholder="hello@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
                style={{
                  width: '100%',
                }}
                aria-invalid={validEmail ? 'false' : 'true'}
                size="md"
                styles={{ input: { border: '1px solid #a7a7a8' } }}
              />
            </SimpleGrid>

            <SimpleGrid
              cols={2}
              mt="xl"
              breakpoints={[{ maxWidth: 'sm', cols: 1 }]}
              style={{
                width: '100%',
              }}
            >
              <PasswordInput
                label="Password"
                placeholder=""
                style={{
                  width: '100%',
                }}
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
                aria-invalid={validPassword ? 'false' : 'true'}
                autoComplete={'off'}
                size="md"
                styles={{ input: { border: '1px solid #a7a7a8' } }}
              />
              <PasswordInput
                label="Confirm Password"
                placeholder=""
                style={{
                  width: '100%',
                }}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.currentTarget.value)}
                aria-invalid={validMatch ? 'false' : 'true'}
                size="md"
                styles={{ input: { border: '1px solid #a7a7a8' } }}
              />
            </SimpleGrid>

            <SimpleGrid
              cols={2}
              mt="xl"
              breakpoints={[{ maxWidth: 'sm', cols: 1 }]}
              style={{
                width: '100%',
              }}
            >
              <TextInput
                label="Cell Number"
                placeholder=""
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value)
                }}
                style={{
                  width: '100%',
                }}
                aria-invalid={validNumber ? 'false' : 'true'}
                size="md"
                styles={{ input: { border: '1px solid #a7a7a8' } }}
              />
              <TextInput
                label="WhatsApp Number"
                placeholder=""
                value={whatsapp}
                onChange={(e) => {
                  setWhatsapp(e.target.value)
                }}
                style={{
                  width: '100%',
                }}
                aria-invalid={validWhatsapp ? 'false' : 'true'}
                size="md"
                styles={{ input: { border: '1px solid #a7a7a8' } }}
              />
            </SimpleGrid>

            <Group
              noWrap
              style={{
                width: '100%',
              }}
              mt={'xl'}
            >
              <Textarea
                label="About Yourself"
                placeholder="Tell us about yourself"
                value={about}
                onChange={(e) => setAbout(e.currentTarget.value)}
                style={{
                  width: '100%',
                }}
                size="md"
                styles={{ input: { border: '1px solid #a7a7a8' } }}
              />
            </Group>

            <SimpleGrid
              cols={2}
              mt="xl"
              breakpoints={[{ maxWidth: 'sm', cols: 1 }]}
              style={{
                width: '100%',
              }}
            >
              <Textarea
                label="Temporary Address"
                placeholder="Temporary Address"
                value={tempAddress}
                onChange={(e) => setTempAddress(e.currentTarget.value)}
                style={{
                  width: '100%',
                }}
                size="md"
                styles={{ input: { border: '1px solid #a7a7a8' } }}
              />
              <Textarea
                label="Permanent Address"
                placeholder="Permanent Address"
                value={permAddress}
                onChange={(e) => setPermAddress(e.currentTarget.value)}
                style={{
                  width: '100%',
                }}
                size="md"
                styles={{ input: { border: '1px solid #a7a7a8' } }}
              />
            </SimpleGrid>

            <SimpleGrid
              cols={2}
              mt="xl"
              breakpoints={[{ maxWidth: 'sm', cols: 1 }]}
              style={{
                width: '100%',
              }}
            >
              <TextInput
                label="Zip Code"
                placeholder="Zip Code"
                value={zip}
                onChange={(e) => {
                  setZip(e.target.value)
                }}
                hideControls
                style={{
                  width: '100%',
                }}
                size="md"
                styles={{ input: { border: '1px solid #a7a7a8' } }}
              />
              <TextInput
                hideControls
                label="CNIC"
                placeholder="CNIC"
                value={cnic}
                onChange={(e) => {
                  setCnic(e.target.value)
                }}
                style={{
                  width: '100%',
                }}
                aria-invalid={validCnic ? 'false' : 'true'}
                size="md"
                styles={{ input: { border: '1px solid #a7a7a8' } }}
              />
            </SimpleGrid>

            <Select
              label="City"
              placeholder="Select City"
              value={city}
              onChange={(e) => setCity(e.currentTarget.value)}
              style={{
                width: '100%',
              }}
              data={cityData}
              size="md"
              mt={'xl'}
              styles={{ input: { border: '1px solid #a7a7a8' } }}
            />
          </Grid>

          <Group
            mt={'xl'}
            style={{
              width: '100%',
            }}
            position="right"
          >
            <Button color="red" leftIcon={!match310 ? <IconX /> : null}>
              Cancel
            </Button>
            <Button
              color="green"
              leftIcon={!match310 ? <IconCheck /> : null}
              type="submit"
              loading={loading}
              onClick={() => setLoading(true)}
            >
              Save
            </Button>
          </Group>
        </form>
      </Paper>
    </Container>
  )
}

export default ProfileSettings
