import {
  TextInput,
  PasswordInput,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
  Divider,
  Stack,
  Radio,
} from '@mantine/core'
import {
  IconAt,
  IconBrandFacebook,
  IconBrandGoogle,
  IconCheck,
  IconX,
} from '@tabler/icons'
import axios from 'axios'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { showNotification } from '@mantine/notifications'
import { useForm } from '@mantine/form'

export default function SignUp() {
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  const form = useForm({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
      gender: '',
      name: '',
    },

    validate: {
      email: (value) =>
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
          ? 'Invalid email address'
          : null,
      password: (value) =>
        value?.length < 4 ? 'Password must have at least 4 characters' : null,
      confirmPassword: (value) =>
        value !== form.values?.password ? 'Passwords must match' : null,
      name: (value) =>
        value?.length < 2 ? 'Name must have at least 5 letters' : null,
      gender: (value) => (value === '' ? 'Select a Gender!' : null),
    },
  })

  const handleSubmit = (values) => {
    setLoading(true)
    values.userType = 'buyer'
    axios
      .post(
        import.meta.env.VITE_REACT_APP_BACKEND_URL + '/user/signup',
        values,
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        },
      )
      .then((res) => {
        console.log(res?.data)
        console.log(res?.accessToken)
        console.log(JSON.stringify(res))
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
        setLoading(false)
      })
      .catch((err) => {
        console.log(err)
        setLoading(false)
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
        <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
          <Stack spacing={'xl'}>
            <TextInput
              label="Username"
              placeholder="Tehseen Riaz"
              {...form.getInputProps('name')}
            />
            <TextInput
              icon={<IconAt size={14} />}
              label="Email"
              placeholder="hello@gmail.com"
              {...form.getInputProps('email')}
            />
            <PasswordInput
              label="Password"
              placeholder="Your password"
              {...form.getInputProps('password')}
            />
            <PasswordInput
              label="Confirm Password"
              placeholder="Your password"
              {...form.getInputProps('confirmPassword')}
            />
            <Group>
              <Radio.Group
                label="Choose your Gender"
                {...form.getInputProps('gender')}
              >
                <Radio value="male" label="Male" color="red" />
                <Radio value="female" label="Female" color="red" />
              </Radio.Group>
            </Group>
          </Stack>

          <Button fullWidth mt="xl" color="red" type="submit" loading={loading}>
            Sign Up
          </Button>
        </form>
        <Divider my="sm" label="OR SIGN UP WITH" labelPosition="center" />
      </Paper>
    </Container>
  )
}
