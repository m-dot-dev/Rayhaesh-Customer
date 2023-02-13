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
} from '@mantine/core'
import {
  IconAt,
  IconBrandFacebook,
  IconBrandGoogle,
  IconCheck,
  IconX,
} from '@tabler/icons'
import { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import axios from 'axios'
import { showNotification } from '@mantine/notifications'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const EMAIL_REGEX = /^[A-z0-9._%+-]+@[A-z0-9.-]+\.[A-z]{2,4}$/
  const [validEmail, setValidEmail] = useState(false)

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email))
  }, [email])

  const navigate = useNavigate()
  const location = useLocation()
  const [routerHistory, setRouterHistory] = useState([])

  const from = location.state?.from || '/'

  useEffect(() => {
    setRouterHistory((routerHistory) => [...routerHistory, from])
  }, [from])

  const prevLocation = routerHistory[routerHistory.length - 1]

  const { setAuth } = useAuth()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .post(
        import.meta.env.VITE_REACT_APP_BACKEND_URL + '/user/login',
        {
          email,
          password,
        },
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        },
      )
      .then((response) => {
        console.log(response?.data)
        console.log(JSON.stringify(response))
        const accessToken = response?.data?.token
        localStorage.setItem('token', accessToken)
        console.log('====================================LoginCheckings')
        console.log(localStorage.getItem('token'))
        console.log(localStorage)
        console.log('====================================LoginChecking')
        setEmail('')
        setPassword('')
        setLoading(false)

        if (response?.data?.success === true) {
          showNotification({
            title: 'Login Successful',
            message: 'You have been successfully logged in!',
            color: 'green',
            icon: <IconCheck size={14} />,
            autoClose: true,
          })
          console.log('====================================')
          console.log('NAMEEE', response.data.body.name)
          console.log('====================================')
          setAuth({
            name: response.data.body?.name,
            email,
            // password,
            accessToken,
          })
          navigate(prevLocation, { replace: true })
        } else {
          showNotification({
            title: 'Login Failed',
            message: 'Invalid Credentials',
            color: 'red',
            icon: <IconX size={14} />,
            autoClose: true,
          })
        }
      })
      .catch((err) => {
        setLoading(false)
        if (!err.response) {
          console.log('No response from the server')
          showNotification({
            title: 'Login Failed',
            message: 'No response from the server',
            color: 'red',
            icon: <IconX size={14} />,
            autoClose: true,
          })
        } else if (err.response.status === 401) {
          console.log('Unauthorized')
          showNotification({
            title: 'Login Failed',
            message: 'Unauthorized',
            color: 'red',
            icon: <IconX size={14} />,
            autoClose: true,
          })
        } else if (err.response.status === 400) {
          console.log('Missing Username or password')
          showNotification({
            title: 'Login Failed',
            message: 'Missing Username or password',
            color: 'red',
            icon: <IconX size={14} />,
            autoClose: true,
          })
        } else {
          console.log('Something went wrong, Login Failed')
          showNotification({
            title: 'Login Failed',
            message: 'Something went wrong, Login Failed',
            color: 'red',
            icon: <IconX size={14} />,
            autoClose: true,
          })
        }
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
        Welcome back!
      </Title>
      <Text color="dimmed" size="sm" align="center" mt={5}>
        Do not have an account yet?{' '}
        <Link style={{ textDecoration: 'none' }} to="/register">
          <Anchor
            href="#"
            size="sm"
            style={{ color: '#D92228', textDecoration: 'none' }}
          >
            Create account
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
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
          </Stack>

          <Group position="apart" mt="lg">
            <Anchor
              onClick={(event) => event.preventDefault()}
              href="#"
              size="sm"
              style={{ color: '#D92228', textDecoration: 'none' }}
            >
              Forgot password?
            </Anchor>
          </Group>
          <Button
            fullWidth
            mt="xl"
            color="red"
            type="submit"
            disabled={
              !validEmail || !password || password.length < 4 ? true : false
            }
            loading={loading}
            onClick={() => setLoading(true)}
          >
            Sign in
          </Button>
        </form>
        <Divider my="sm" label="OR LOGIN WITH" labelPosition="center" />

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
