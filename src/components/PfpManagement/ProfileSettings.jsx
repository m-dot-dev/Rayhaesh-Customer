import {
  Button,
  Container,
  Grid,
  Group,
  NumberInput,
  Paper,
  PasswordInput,
  Select,
  Stack,
  Text,
  Textarea,
  TextInput,
} from '@mantine/core'
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone'
import { useMediaQuery } from '@mantine/hooks'
import { IconAt, IconCheck, IconPhoto, IconUpload, IconX } from '@tabler/icons'
import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import useAuth from '../hooks/useAuth'

const ProfileSettings = (props) => {
  const match786 = useMediaQuery('(max-width: 786px)')
  const match300 = useMediaQuery('(max-width: 300px)')

  const [profileImage, setProfileImage] = React.useState(null)
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [confirmPassword, setConfirmPassword] = React.useState('')
  const [phone, setPhone] = React.useState('')
  const [whatsapp, setWhatsapp] = React.useState('')
  const [tempAddress, setTempAddress] = React.useState('')
  const [permAddress, setPermAddress] = React.useState('')
  const [about, setAbout] = React.useState('')
  const [zip, setZip] = React.useState()
  const [city, setCity] = React.useState('')
  const [agency, setAgency] = React.useState('')
  const [cnic, setCnic] = React.useState('')

  const cityData = [
    { value: 'islamabad', label: 'Islamabad' },
    { value: 'rawalpindi', label: 'Rawalpindi' },
    { value: 'lahore', label: 'Lahore' },
    { value: 'karachi', label: 'Karachi' },
    { value: 'peshawar', label: 'Peshawar' },
    { value: 'quetta', label: 'Quetta' },
    { value: 'multan', label: 'Multan' },
    { value: 'faisalabad', label: 'Faisalabad' },
  ]

  const agencyData = [
    { value: 'agency1', label: 'Agency 1' },
    { value: 'agency2', label: 'Agency 2' },
    { value: 'agency3', label: 'Agency 3' },
    { value: 'agency4', label: 'Agency 4' },
  ]

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
  const [user, setUser] = React.useState()

  // const { auth } = useAuth()

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
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <Container>
      <Paper p="lg">
        <Text weight={600} style={{ fontSize: 30 }} align="center" mb={'lg'}>
          Profile Settings
        </Text>
        <Dropzone
          onDrop={(files) => console.log('accepted files', files)}
          onReject={(files) => console.log('rejected files', files)}
          maxSize={3 * 1024 ** 2}
          accept={IMAGE_MIME_TYPE}
          {...props}
          style={{
            width: '30%',
            height: '50%',
            margin: 'auto',
            borderRadius: 30,
            padding: 10,
            textAlign: 'center',
            cursor: 'pointer',
          }}
        >
          <Group
            position="center"
            spacing="xl"
            style={{ minHeight: 220, pointerEvents: 'none' }}
          >
            <Dropzone.Accept>
              <IconUpload size={50} stroke={1.5} />
            </Dropzone.Accept>
            <Dropzone.Reject>
              <IconX size={50} stroke={1.5} />
            </Dropzone.Reject>
            <Dropzone.Idle>
              <IconPhoto size={50} stroke={1.5} />
            </Dropzone.Idle>

            <div>
              <Text size="xl" inline>
                Drag image here or click to select file
              </Text>
              <Text size="sm" color="dimmed" inline mt={7}>
                File should not exceed 5mb
              </Text>
            </div>
          </Group>
        </Dropzone>
        <Grid mt={'xl'}>
          <Grid.Col md={12}>
            {!match786 ? (
              <Group noWrap>
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
                />
                <TextInput
                  required
                  label="Email"
                  placeholder="hello@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.currentTarget.value)}
                  style={{
                    width: '100%',
                  }}
                  aria-invalid={validEmail ? 'false' : 'true'}
                />
              </Group>
            ) : (
              <Stack>
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
                />
                <TextInput
                  required
                  label="Email"
                  placeholder="hello@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.currentTarget.value)}
                  style={{
                    width: '100%',
                  }}
                  aria-invalid={validEmail ? 'false' : 'true'}
                />
              </Stack>
            )}
          </Grid.Col>

          <Grid.Col md={12}>
            {!match786 ? (
              <Group noWrap>
                <PasswordInput
                  required
                  label="Password"
                  placeholder=""
                  style={{
                    width: '100%',
                  }}
                  value={password}
                  onChange={(e) => setPassword(e.currentTarget.value)}
                  aria-invalid={validPassword ? 'false' : 'true'}
                />
                <PasswordInput
                  required
                  label="Confirm Password"
                  placeholder=""
                  style={{
                    width: '100%',
                  }}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.currentTarget.value)}
                  aria-invalid={validMatch ? 'false' : 'true'}
                />
              </Group>
            ) : (
              <Stack>
                <PasswordInput
                  required
                  label="Password"
                  placeholder=""
                  style={{
                    width: '100%',
                  }}
                  value={password}
                  onChange={(e) => setPassword(e.currentTarget.value)}
                  aria-invalid={validPassword ? 'false' : 'true'}
                />
                <PasswordInput
                  required
                  label="Confirm Password"
                  placeholder=""
                  style={{
                    width: '100%',
                  }}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.currentTarget.value)}
                  aria-invalid={validMatch ? 'false' : 'true'}
                />
              </Stack>
            )}
          </Grid.Col>

          <Grid.Col md={12}>
            {!match786 ? (
              <Group noWrap>
                <NumberInput
                  label="Cell Number"
                  placeholder=""
                  value={phone}
                  onChange={(e) => setPhone(e.currentTarget.value)}
                  hideControls
                  style={{
                    width: '100%',
                  }}
                  aria-invalid={validNumber ? 'false' : 'true'}
                />
                <NumberInput
                  label="WhatsApp Number"
                  placeholder=""
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.currentTarget.value)}
                  hideControls
                  style={{
                    width: '100%',
                  }}
                  aria-invalid={validWhatsapp ? 'false' : 'true'}
                />
              </Group>
            ) : (
              <Stack>
                <NumberInput
                  label="Cell Number"
                  placeholder=""
                  value={phone}
                  onChange={(e) => setPhone(e.currentTarget.value)}
                  hideControls
                  style={{
                    width: '100%',
                  }}
                  aria-invalid={validNumber ? 'false' : 'true'}
                />
                <NumberInput
                  label="WhatsApp Number"
                  placeholder=""
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.currentTarget.value)}
                  hideControls
                  style={{
                    width: '100%',
                  }}
                  aria-invalid={validWhatsapp ? 'false' : 'true'}
                />
              </Stack>
            )}
          </Grid.Col>

          <Grid.Col>
            <Group
              noWrap
              style={{
                width: '100%',
              }}
            >
              <Textarea
                label="About Yourself"
                placeholder="Tell us about yourself"
                value={about}
                onChange={(e) => setAbout(e.currentTarget.value)}
                style={{
                  width: '100%',
                }}
              />
            </Group>
          </Grid.Col>

          <Grid.Col>
            {!match786 ? (
              <Group noWrap>
                <Textarea
                  label="Temporary Address"
                  placeholder="Temporary Address"
                  value={tempAddress}
                  onChange={(e) => setTempAddress(e.currentTarget.value)}
                  style={{
                    width: '100%',
                  }}
                />
                <Textarea
                  label="Permanent Address"
                  placeholder="Permanent Address"
                  value={permAddress}
                  onChange={(e) => setPermAddress(e.currentTarget.value)}
                  style={{
                    width: '100%',
                  }}
                />
              </Group>
            ) : (
              <Stack>
                <Textarea
                  label="Temporary Address"
                  placeholder="Temporary Address"
                  value={tempAddress}
                  onChange={(e) => setTempAddress(e.currentTarget.value)}
                  style={{
                    width: '100%',
                  }}
                />
                <Textarea
                  label="Permanent Address"
                  placeholder="Permanent Address"
                  value={permAddress}
                  onChange={(e) => setPermAddress(e.currentTarget.value)}
                  style={{
                    width: '100%',
                  }}
                />
              </Stack>
            )}
          </Grid.Col>

          <Grid.Col>
            {!match786 ? (
              <Group noWrap>
                <NumberInput
                  label="Zip Code"
                  placeholder="Zip Code"
                  value={zip}
                  onChange={(e) => setZip(e.currentTarget.value)}
                  hideControls
                  style={{
                    width: '100%',
                  }}
                />
                <NumberInput
                  hideControls
                  label="CNIC"
                  placeholder="CNIC"
                  value={cnic}
                  onChange={(e) => setCnic(e.currentTarget.value)}
                  style={{
                    width: '100%',
                  }}
                  aria-invalid={validCnic ? 'false' : 'true'}
                />
              </Group>
            ) : (
              <Stack>
                <NumberInput
                  label="Zip Code"
                  placeholder="Zip Code"
                  value={zip}
                  onChange={(e) => setZip(e.currentTarget.value)}
                  hideControls
                  style={{
                    width: '100%',
                  }}
                />
                <NumberInput
                  hideControls
                  label="CNIC"
                  placeholder="CNIC"
                  value={cnic}
                  onChange={(e) => setCnic(e.currentTarget.value)}
                  style={{
                    width: '100%',
                  }}
                  aria-invalid={validCnic ? 'false' : 'true'}
                />
              </Stack>
            )}
          </Grid.Col>

          <Grid.Col>
            {!match786 ? (
              <Group noWrap>
                <Select
                  label="City"
                  placeholder="Select City"
                  value={city}
                  onChange={(e) => setCity(e.currentTarget.value)}
                  style={{
                    width: '100%',
                  }}
                  data={cityData}
                />
                <Select
                  label="Agency"
                  placeholder="Select Agency"
                  value={agency}
                  onChange={(e) => setAgency(e.currentTarget.value)}
                  style={{
                    width: '100%',
                  }}
                  data={agencyData}
                />
              </Group>
            ) : (
              <Stack>
                <Select
                  label="City"
                  placeholder="Select City"
                  value={city}
                  onChange={(e) => setCity(e.currentTarget.value)}
                  style={{
                    width: '100%',
                  }}
                  data={cityData}
                />
                <Select
                  label="Agency"
                  placeholder="Select Agency"
                  value={agency}
                  onChange={(e) => setAgency(e.currentTarget.value)}
                  style={{
                    width: '100%',
                  }}
                  data={agencyData}
                />
              </Stack>
            )}
          </Grid.Col>
        </Grid>

        {/* dropzone(cnic) */}

        <Group noWrap grow position="center" mt={'lg'}>
          <Button fullWidth color="red" leftIcon={!match300 ? <IconX /> : null}>
            Cancel
          </Button>
          <Button
            fullWidth
            color="green"
            leftIcon={!match300 ? <IconCheck /> : null}
          >
            Save
          </Button>
        </Group>
      </Paper>
    </Container>
  )
}

export default ProfileSettings
