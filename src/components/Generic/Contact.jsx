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
import { useForm } from '@mantine/form'
import { showNotification } from '@mantine/notifications'
import { IconCheck, IconX } from '@tabler/icons'
import axios from 'axios'
import { useState } from 'react'

export default function Contact() {
  const handleSubmit = (values) => {
    setLoading(true)
    console.log(values)
    // event.preventDefault()
    axios
      .post(
        import.meta.env.VITE_REACT_APP_BACKEND_URL + '/user/addSystemFeedback',
        // {
        //   feedbackType: feedbackType,
        //   feedback: feedback,
        // },
        values,
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
            feedback: 'Your feedback has been sent!',
            color: 'green',
            icon: <IconCheck size={14} />,
            autoClose: true,
          })
        } else {
          showNotification({
            title: 'Feedback Sending Failed',
            feedback: 'Please try again.',
            color: 'red',
            icon: <IconX size={14} />,
            autoClose: true,
          })
        }
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
        setLoading(false)
      })
  }

  const form = useForm({
    initialValues: { feedback: '', feedbackType: '' },

    // functions will be used to validate values at corresponding key
    validate: {
      feedback: (value) =>
        value.length < 10 ? 'Message must have at least 10 letters' : null,
      feedbackType: (value) =>
        !value ? 'Please select a feedback type' : null,
    },
  })

  const [loading, setLoading] = useState(false)

  return (
    <Container size={'xl'} mt={'xl'}>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Title order={2} size="h1" weight={800} align="center">
          Get in touch
        </Title>

        <Select
          label="Select feedback type"
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
          // value={feedbackType}
          // onChange={setType}
          // required
          {...form.getInputProps('feedbackType')}
        />
        <Textarea
          mt="md"
          label="Message"
          placeholder="Your feedback"
          maxRows={10}
          minRows={5}
          autosize
          name="feedback"
          variant="filled"
          styles={{ input: { border: '1px solid #a7a7a8' } }}
          // value={feedback}
          // onChange={(e) => setMessage(e.target.value)}
          size="md"
          // required
          {...form.getInputProps('feedback')}
        />

        <Group position="center" mt="xl">
          <Button
            // feedbackType="submit"
            size="md"
            color="red"
            loading={loading}
            type="submit"
          >
            Send feedback
          </Button>
        </Group>
      </form>
    </Container>
  )
}
