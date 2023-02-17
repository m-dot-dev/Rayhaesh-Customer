import {
  createStyles,
  Paper,
  Title,
  Text,
  TextInput,
  Button,
  Container,
  Group,
  Anchor,
  Center,
  Box,
} from '@mantine/core'
import { useForm } from '@mantine/form'
import { showNotification } from '@mantine/notifications'
import { IconArrowLeft, IconCheck, IconX } from '@tabler/icons'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: 26,
    fontWeight: 700,
    fontFamily: 'Poppins',
  },

  controls: {
    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column-reverse',
    },
  },

  control: {
    [theme.fn.smallerThan('xs')]: {
      width: '100%',
      textAlign: 'center',
    },
  },
}))

export default function ForgotPassword() {
  const { classes } = useStyles()
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const form = useForm({
    initialValues: {
      email: '',
    },
    validate: {
      email: (value) =>
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
          ? 'Invalid email address'
          : null,
    },
  })

  const handleSubmit = async (values) => {
    setLoading(true)
    try {
      const response = await axios.post(
        import.meta.env.VITE_REACT_APP_BACKEND_URL + '/user/forgotPassword',
        values,
      )
      console.log('====================================')
      console.log('response:', response)
      console.log('====================================')
      if (response?.status === 200) {
        showNotification({
          title: 'Success',
          message: 'Check your email for a reset link',
          color: 'green',
          icon: <IconCheck />,
        })
        navigate('/login')
      }
    } catch (error) {
      console.log('====================================')
      console.log('error:', error)
      console.log('====================================')
      showNotification({
        title: 'Error',
        message: error?.response?.data?.message,
        color: 'red',
        icon: <IconX />,
      })
    }
    setLoading(false)
  }

  return (
    <Container size={460} my={30}>
      <Title className={classes.title} align="center">
        Forgot your password?
      </Title>
      <Text color="dimmed" size="sm" align="center" mt={'xs'} mb={'xl'}>
        Enter your email to get a reset link
      </Text>

      <Paper withBorder shadow="md" p={30} radius="md" mt={50}>
        <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
          <TextInput
            label="Your email"
            placeholder="email@gmail.com"
            {...form.getInputProps('email')}
          />
          <Group position="apart" mt="lg" className={classes.controls}>
            <Anchor color="dimmed" size="sm" className={classes.control}>
              <Center inline>
                <IconArrowLeft size={12} stroke={1.5} />
                <Text
                  ml={5}
                  onClick={() => {
                    navigate('/login')
                  }}
                >
                  Back to login page
                </Text>
              </Center>
            </Anchor>
            <Button
              className={classes.control}
              color="red"
              type="submit"
              loading={loading}
            >
              Reset password
            </Button>
          </Group>
        </form>
      </Paper>
    </Container>
  )
}
