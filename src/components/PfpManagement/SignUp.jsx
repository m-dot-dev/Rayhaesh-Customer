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
import { useForm } from '@mantine/form'
import { IconAt, IconBrandFacebook, IconBrandGoogle } from '@tabler/icons'
import { Link } from 'react-router-dom'

export default function SignUp() {
  const form = useForm({
    initialValues: {
      email: '',
      name: '',
      password: '',
      confirmPassword: '',
      terms: true,
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
      password: (val) =>
        val.length <= 6
          ? 'Password should include at least 6 characters'
          : null,
    },
  })

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
        <Stack spacing={'xl'}>
          <TextInput
            icon={<IconAt size={14} />}
            required
            label="Email"
            placeholder="hello@gmail.com"
            value={form.values.email}
            onChange={(event) =>
              form.setFieldValue('email', event.currentTarget.value)
            }
            error={form.errors.email && 'Invalid email'}
          />
          <PasswordInput
            required
            label="Password"
            placeholder="Your password"
            value={form.values.password}
            onChange={(event) =>
              form.setFieldValue('password', event.currentTarget.value)
            }
            error={
              form.errors.password &&
              'Password should include at least 6 characters'
            }
          />
          <PasswordInput
            required
            label="Confirm Password"
            placeholder="Your password"
            value={form.values.confirmPassword}
            onChange={(event) =>
              form.setFieldValue('confirmPassword', event.currentTarget.value)
            }
            error={
              form.password !== form.confirmPassword &&
              'Passwords does not match'
            }
          />
        </Stack>
        <Group position="apart" mt="lg">
          <Checkbox label="Remember me" color={'red'} sx={{ lineHeight: 1 }} />
        </Group>
        <Button
          fullWidth
          mt="xl"
          style={{
            backgroundColor: '#D92228',
            color: 'white',
          }}
        >
          Sign Up
        </Button>
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
