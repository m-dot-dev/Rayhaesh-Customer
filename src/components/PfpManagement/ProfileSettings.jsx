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
import { useForm } from '@mantine/form'

const ProfileSettings = (props) => {
  const match786 = useMediaQuery('(max-width: 786px)')
  const match310 = useMediaQuery('(max-width: 310px)')

  const [profileImage, setProfileImage] = React.useState(null)

  const cityData = PakistanCities.map((city) => ({
    label: city.label,
    value: city.value,
  }))

  const [loading, setLoading] = React.useState(false)
  const [user, setUser] = React.useState()

  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      cellPhoneNumber: '',
      whatsappNumber: '',
      temporaryAddress: '',
      permanentAddress: '',
      aboutUser: '',
      ZIPCode: '',
      city: '',
      CNIC: '',
    },

    validate: {
      name: (value) =>
        value?.length < 2 ? 'Name must have at least 5 letters' : null,
      email: (value) =>
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
          ? 'Invalid email address'
          : null,
      password: (value) =>
        value?.length > 0 && value?.length < 4
          ? 'Password must have at least 4 characters'
          : null,
      confirmPassword: (value) =>
        value?.length > 0 && value !== form.values?.password
          ? 'Passwords must match'
          : null,
      cellPhoneNumber: (value) =>
        value?.length > 0 && !/^\+92[1-9]\d{9}$/.test(value)
          ? 'Invalid phone number, must begin with +92'
          : null,
      whatsappNumber: (value) =>
        value?.length > 0 && !/^\+92[1-9]\d{9}$/.test(value)
          ? 'Invalid whatsapp number, must begin with +92'
          : null,
      temporaryAddress: (value) =>
        value?.length > 0 && value?.length < 10
          ? 'Address must have at least 10 letters'
          : null,
      permanentAddress: (value) =>
        value?.length > 0 && value?.length < 10
          ? 'Address must have at least 10 letters'
          : null,
      aboutUser: (value) =>
        value?.length > 0 && value?.length < 10
          ? 'About must have at least 10 letters'
          : null,
      ZIPCode: (value) =>
        value?.length > 0 && !/^\d{5}$/.test(value) ? 'Invalid zip code' : null,
      city: (value) =>
        value?.length > 0 && value?.length < 2
          ? 'City must have at least 2 letters'
          : null,
      CNIC: (value) =>
        value?.length > 0 && !/^[0-9]{5}[0-9]{7}[0-9]$/.test(value)
          ? 'Invalid CNIC, dont put dashes'
          : null,
    },
  })

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
        let response = res?.data?.body
        form.setValues({
          name: response?.name,
          email: response?.email,
          cellPhoneNumber: response?.cellPhoneNumber,
          whatsappNumber: response?.whatsappNumber,
          temporaryAddress: response?.temporaryAddress,
          permanentAddress: response?.permanentAddress,
          aboutUser: response?.aboutUser,
          ZIPCode: response?.ZIPCode,
          city: response?.city,
          CNIC: response?.CNIC,
        })
        setProfileImage(response?.profileImage)
        setUser(response)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const handleSubmit = async (values) => {
    setLoading(true)

    const imageURL = await uploadImage(profileImage, 'user-profile-images')
    values.profileImage = imageURL

    axios
      .patch(
        import.meta.env.VITE_REACT_APP_BACKEND_URL + '/user/updateProfile',
        values,
        {
          headers: {
            token: localStorage.getItem('token'),
          },
        },
      )
      .then((res) => {
        console.log('update response: ', res)
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
        setLoading(false)
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
        <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
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
                label="Username"
                placeholder="Tehseen Riaz"
                style={{
                  width: '100%',
                }}
                autoComplete="off"
                size="md"
                styles={{ input: { border: '1px solid #a7a7a8' } }}
                {...form.getInputProps('name')}
              />
              <TextInput
                disabled={true}
                label="Email"
                placeholder="hello@gmail.com"
                style={{
                  width: '100%',
                }}
                size="md"
                styles={{ input: { border: '1px solid #a7a7a8' } }}
                {...form.getInputProps('email')}
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
                autoComplete={'off'}
                size="md"
                styles={{ input: { border: '1px solid #a7a7a8' } }}
                {...form.getInputProps('password')}
              />
              <PasswordInput
                label="Confirm Password"
                placeholder=""
                style={{
                  width: '100%',
                }}
                size="md"
                styles={{ input: { border: '1px solid #a7a7a8' } }}
                {...form.getInputProps('confirmPassword')}
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
                style={{
                  width: '100%',
                }}
                size="md"
                styles={{ input: { border: '1px solid #a7a7a8' } }}
                {...form.getInputProps('cellPhoneNumber')}
              />
              <TextInput
                label="WhatsApp Number"
                placeholder=""
                style={{
                  width: '100%',
                }}
                size="md"
                styles={{ input: { border: '1px solid #a7a7a8' } }}
                {...form.getInputProps('whatsappNumber')}
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
                style={{
                  width: '100%',
                }}
                size="md"
                styles={{ input: { border: '1px solid #a7a7a8' } }}
                {...form.getInputProps('aboutUser')}
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
                style={{
                  width: '100%',
                }}
                size="md"
                styles={{ input: { border: '1px solid #a7a7a8' } }}
                {...form.getInputProps('temporaryAddress')}
              />
              <Textarea
                label="Permanent Address"
                placeholder="Permanent Address"
                style={{
                  width: '100%',
                }}
                size="md"
                styles={{ input: { border: '1px solid #a7a7a8' } }}
                {...form.getInputProps('permanentAddress')}
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
                hideControls
                style={{
                  width: '100%',
                }}
                size="md"
                styles={{ input: { border: '1px solid #a7a7a8' } }}
                {...form.getInputProps('ZIPCode')}
              />
              <TextInput
                hideControls
                label="CNIC"
                placeholder="CNIC"
                style={{
                  width: '100%',
                }}
                size="md"
                styles={{ input: { border: '1px solid #a7a7a8' } }}
                {...form.getInputProps('CNIC')}
              />
            </SimpleGrid>

            <Select
              label="City"
              placeholder="Select City"
              style={{
                width: '100%',
              }}
              data={cityData}
              size="md"
              mt={'xl'}
              styles={{ input: { border: '1px solid #a7a7a8' } }}
              {...form.getInputProps('city')}
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
