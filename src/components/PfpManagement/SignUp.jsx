import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
  Divider,
  Stack,
  Tooltip,
  Radio,
  Notification,
} from '@mantine/core'
import {
  IconAt,
  IconBrandFacebook,
  IconBrandGoogle,
  IconCheck,
  IconX,
} from '@tabler/icons'
import axios from 'axios'
import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { showNotification } from '@mantine/notifications'

const USER_REGEX = /^[A-z]{5,20}$/
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/
const EMAIL_REGEX = /^[A-z0-9._%+-]+@[A-z0-9.-]+\.[A-z]{2,4}$/

export default function SignUp() {
  const [username, setUsername] = useState('')
  const [validName, setValidName] = useState(false)

  const [email, setEmail] = useState('')
  const [validEmail, setValidEmail] = useState(false)

  const [password, setPassword] = useState('')
  const [validPassword, setValidPassword] = useState(false)

  const [confirmPassword, setConfirmPassword] = useState('')
  const [validMatch, setValidMatch] = useState(false)

  const [errMsg, setErrMsg] = useState('')
  const [success, setSuccess] = useState(false)

  const [gender, setGender] = useState('male')

  const [loading, setLoading] = useState(false)

  const [error, setError] = useState('')

  const userType = 'buyer'

  useEffect(() => {
    setValidName(USER_REGEX.test(username))
  }, [username])

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email))
  }, [email])

  useEffect(() => {
    setValidPassword(PWD_REGEX.test(password))
    setValidMatch(password === confirmPassword)
  }, [password, confirmPassword])

  useEffect(() => {
    setErrMsg('')
  }, [username, password, confirmPassword])

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const v1 = USER_REGEX.test(username)
    const v2 = PWD_REGEX.test(password)
    const v3 = EMAIL_REGEX.test(email)
    if (!v1 || !v2 || !v3) {
      setErrMsg('Invalid Entry')
      return
    }

    axios
      .post(
        import.meta.env.VITE_REACT_APP_BACKEND_URL + '/user/signup',
        {
          name: username,
          email,
          password,
          gender,
          userType,
        },
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        },
      )
      .then((res) => {
        console.log(res?.data)
        console.log(res?.accessToken)
        console.log(JSON.stringify(res))
        setSuccess(true)
        setUsername('')
        setEmail('')
        setPassword('')
        setConfirmPassword('')
        setLoading(false)

        if (res?.data?.success === true) {
          showNotification({
            title: 'Registration Successful',
            message: 'You account has been created!',
            color: 'green',
            icon: <IconCheck size={14} />,
            autoClose: true,
          })
          navigate('/login', { replace: true })
        } else {
          showNotification({
            title: 'Registration Failed',
            message: 'Email Already Taken!',
            color: 'red',
            icon: <IconX size={14} />,
            autoClose: true,
          })
        }
      })
      .catch((err) => {
        setError(err)
        console.log(err)
        showNotification({
          title: 'Registration Failed',
          message: 'No Response from the server!',
          color: 'red',
          icon: <IconX size={14} />,
          autoClose: true,
        })
      })
  }

  return (
    <Container size={420} my={40}>
      <Title
        align="center"
        sx={(theme) => ({
          fontFamily: `Greycliff CF, ${theme.fontFamily}`,
          fontWeight: 700,
        })}
      >
        Get Started With Us!
      </Title>
      <Text color="dimmed" size="sm" align="center" mt={5}>
        Already have an account?{' '}
        <Link style={{ textDecoration: 'none' }} to="/login">
          <Anchor
            href="/login"
            size="sm"
            style={{ color: '#D92228', textDecoration: 'none' }}
          >
            Login here
          </Anchor>
        </Link>
      </Text>

      <Paper
        withBorder
        shadow="md"
        p={30}
        mt={30}
        radius="md"
        style={{ borderColor: 'lightgrey' }}
      >
        <form onSubmit={handleSubmit}>
          <Stack spacing={'xl'}>
            <TextInput
              required
              label="Username"
              description="Must be between 5-20 characters and only letters allowed"
              placeholder="Tehseen Riaz"
              value={username}
              onChange={(e) => setUsername(e.currentTarget.value)}
              aria-invalid={validName ? 'false' : 'true'}
            />
            <TextInput
              icon={<IconAt size={14} />}
              required
              label="Email"
              placeholder="hello@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
              aria-invalid={validEmail ? 'false' : 'true'}
            />
            <PasswordInput
              required
              label="Password"
              placeholder="Your password"
              description="Must be between 4-24 characters. Must begin with uppercase letter and should contain one special letter."
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
              aria-invalid={validPassword ? 'false' : 'true'}
            />
            <PasswordInput
              required
              label="Confirm Password"
              placeholder="Your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.currentTarget.value)}
              aria-invalid={validMatch ? 'false' : 'true'}
            />
            <Group>
              <Radio.Group
                label="Choose your Gender"
                required
                value={gender}
                onChange={setGender}
              >
                <Radio value="male" label="Male" color="red" />
                <Radio value="female" label="Female" color="red" />
              </Radio.Group>
            </Group>
          </Stack>
          <Group position="apart" mt="lg">
            <Checkbox
              label="Remember me"
              color={'red'}
              sx={{ lineHeight: 1 }}
            />
          </Group>
          <Button
            fullWidth
            mt="xl"
            color="red"
            disabled={
              !validName || !validEmail || !validPassword || !validMatch
                ? true
                : false
            }
            type="submit"
            loading={loading}
            onClick={() => {
              setLoading(true)
            }}
          >
            Sign Up
          </Button>
        </form>
        <Divider my="sm" label="OR SIGN UP WITH" labelPosition="center" />

        <Group
          style={{
            marginTop: '20px',
          }}
          position="center"
          spacing={'xl'}
        >
          <Button variant="light" radius="xl">
            <IconBrandGoogle style={{ color: 'green' }} />
          </Button>
          <Button variant="light" radius="xl">
            <IconBrandFacebook style={{ color: 'blue' }} />
          </Button>
        </Group>
      </Paper>
    </Container>
  )
}
