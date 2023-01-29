import {
  Button,
  Container,
  Group,
  NumberInput,
  Paper,
  PasswordInput,
  Select,
  Stack,
  Text,
  TextInput,
  Textarea,
  useMantineTheme,
} from '@mantine/core'
import React from 'react'
import { Image } from '@mantine/core'
import { IconAt, IconCheck, IconPhoto, IconUpload, IconX } from '@tabler/icons'
// import { Dropzone, IMAGE_MIME_TYPE, DropzoneProps } from '@mantine/dropzone'

const ProfileSettings = () => {
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

  return (
    <Container>
      <Paper p="lg">
        <Text weight={600} style={{ fontSize: 30 }} align="center">
          Profile Settings
        </Text>
        <Stack align="center">
          {/* <Dropzone
            onDrop={(files) => console.log('accepted files', files)}
            onReject={(files) => console.log('rejected files', files)}
            maxSize={3 * 1024 ** 2}
            accept={IMAGE_MIME_TYPE}
            {...props}
          >
            <Group
              position="center"
              spacing="xl"
              style={{ minHeight: 220, pointerEvents: 'none' }}
            >
              <Dropzone.Accept>
                <IconUpload
                  size={50}
                  stroke={1.5}
                  color={
                    theme.colors[theme.primaryColor][
                      theme.colorScheme === 'dark' ? 4 : 6
                    ]
                  }
                />
              </Dropzone.Accept>
              <Dropzone.Reject>
                <IconX
                  size={50}
                  stroke={1.5}
                  color={theme.colors.red[theme.colorScheme === 'dark' ? 4 : 6]}
                />
              </Dropzone.Reject>
              <Dropzone.Idle>
                <IconPhoto size={50} stroke={1.5} />
              </Dropzone.Idle>

              <div>
                <Text size="xl" inline>
                  Drag images here or click to select files
                </Text>
                <Text size="sm" color="dimmed" inline mt={7}>
                  Attach as many files as you like, each file should not exceed
                  5mb
                </Text>
              </div>
            </Group>
          </Dropzone> */}
          <Group
            noWrap
            style={{
              width: '80%',
            }}
            position="center"
            mt={'lg'}
          >
            <TextInput
              required
              label="Username"
              placeholder="Tehseen Riaz"
              style={{
                width: '50%',
              }}
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
            />
            <TextInput
              icon={<IconAt size={14} />}
              required
              label="Email"
              placeholder="hello@gmail.com"
              style={{
                width: '50%',
              }}
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
          </Group>
          <Group
            noWrap
            style={{
              width: '80%',
            }}
            position="center"
          >
            <PasswordInput
              required
              label="Password"
              placeholder=""
              style={{
                width: '50%',
              }}
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
            <PasswordInput
              required
              label="Confirm Password"
              placeholder=""
              style={{
                width: '50%',
              }}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.currentTarget.value)}
            />
          </Group>
          <Group
            noWrap
            style={{
              width: '80%',
            }}
            position="center"
          >
            <NumberInput
              label="Cell Number"
              placeholder=""
              value={phone}
              onChange={(e) => setPhone(e.currentTarget.value)}
              hideControls
              style={{
                width: '50%',
              }}
            />
            <NumberInput
              label="WhatsApp Number"
              placeholder=""
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.currentTarget.value)}
              hideControls
              style={{
                width: '50%',
              }}
            />
          </Group>
          <Group
            noWrap
            style={{
              width: '80%',
            }}
            position="center"
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
          <Group
            noWrap
            style={{
              width: '80%',
            }}
            position="center"
          >
            <Textarea
              label="Temporary Address"
              placeholder="Temporary Address"
              value={tempAddress}
              onChange={(e) => setTempAddress(e.currentTarget.value)}
              style={{
                width: '50%',
              }}
            />
            <Textarea
              label="Permanent Address"
              placeholder="Permanent Address"
              value={permAddress}
              onChange={(e) => setPermAddress(e.currentTarget.value)}
              style={{
                width: '50%',
              }}
            />
          </Group>
          <Group
            noWrap
            style={{
              width: '80%',
            }}
            position="center"
          >
            <NumberInput
              label="Zip Code"
              placeholder="Zip Code"
              value={zip}
              onChange={(e) => setZip(e.currentTarget.value)}
              hideControls
              style={{
                width: '50%',
              }}
            />
            <NumberInput
              hideControls
              label="CNIC"
              placeholder="CNIC"
              value={zip}
              onChange={(e) => setZip(e.currentTarget.value)}
              style={{
                width: '50%',
              }}
            />
          </Group>
          {/* City+agency, dropzone(cnic) */}
          <Group
            noWrap
            style={{
              width: '80%',
            }}
            position="center"
          >
            <Select
              label="City"
              placeholder="Select City"
              value={city}
              onChange={(e) => setCity(e.currentTarget.value)}
              style={{
                width: '50%',
              }}
              data={cityData}
            />
            <Select
              label="Agency"
              placeholder="Select Agency"
              value={agency}
              onChange={(e) => setAgency(e.currentTarget.value)}
              style={{
                width: '50%',
              }}
              data={agencyData}
            />
          </Group>
          <Group
            noWrap
            style={{
              width: '80%',
            }}
            mt={'lg'}
          >
            <Button fullWidth color="red" leftIcon={<IconX />}>
              Cancel
            </Button>
            <Button fullWidth color="green" leftIcon={<IconCheck />}>
              Save
            </Button>
          </Group>
        </Stack>
      </Paper>
    </Container>
  )
}

export default ProfileSettings
