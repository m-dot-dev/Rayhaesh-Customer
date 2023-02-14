import {
  TextInput,
  Textarea,
  SimpleGrid,
  Group,
  Title,
  Button,
  Container,
  Select,
} from '@mantine/core'
import { showNotification } from '@mantine/notifications'
import { IconCheck, IconX } from '@tabler/icons'
import axios from 'axios'
import { useState } from 'react'

export default function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault()
    axios
      .post(
        import.meta.env.VITE_REACT_APP_BACKEND_URL + '/user/addSystemFeedback',
        {
          feedbackType: type,
          feedback: message,
        },
        {
          headers: {
            token: localStorage.getItem('token'),
          },
        },
      )
      .then((res) => {
        console.log(res)
        if (res?.data?.success === true) {
          showNotification({
            title: 'Feedback Sent',
            message: 'Your message has been sent!',
            color: 'green',
            icon: <IconCheck size={14} />,
            autoClose: true,
          })
        } else {
          showNotification({
            title: 'Feedback Sending Failed',
            message: 'Please try again.',
            color: 'red',
            icon: <IconX size={14} />,
            autoClose: true,
          })
        }
        setLoading(false)
        setMessage('')
      })
      .catch((error) => {
        console.log(error)
        setLoading(false)
      })
  }

  const [type, setType] = useState('feedback')
  const [message, setMessage] = useState('')

  const [loading, setLoading] = useState(false)

  return (
    <Container size={'xl'} mt={'xl'}>
      <form onSubmit={handleSubmit}>
        <Title order={2} size="h1" weight={800} align="center">
          Get in touch
        </Title>

        <Select
          label="Your favorite framework/library"
          placeholder="Pick one"
          data={[
            { value: 'feedback', label: 'Feedback' },
            { value: 'complaint', label: 'Complaint' },
            { value: 'suggestion', label: 'Suggestion' },
          ]}
          styles={{
            input: { border: '1px solid #a7a7a8' },
          }}
          size="md"
          variant="filled"
          value={type}
          onChange={setType}
          required
        />
        <Textarea
          mt="md"
          label="Message"
          placeholder="Your message"
          maxRows={10}
          minRows={5}
          autosize
          name="message"
          variant="filled"
          styles={{ input: { border: '1px solid #a7a7a8' } }}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          size="md"
          required
        />

        <Group position="center" mt="xl">
          <Button
            type="submit"
            size="md"
            color="red"
            loading={loading}
            onClick={() => setLoading(true)}
          >
            Send message
          </Button>
        </Group>
      </form>
    </Container>
  )
}
