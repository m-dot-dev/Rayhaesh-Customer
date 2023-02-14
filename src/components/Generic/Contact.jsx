import {
  TextInput,
  Textarea,
  SimpleGrid,
  Group,
  Title,
  Button,
  Container,
} from '@mantine/core'
import { useState } from 'react'

export default function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault()
  }

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  return (
    <Container size={'xl'} mt={'xl'}>
      <form onSubmit={handleSubmit}>
        <Title order={2} size="h1" weight={800} align="center">
          Get in touch
        </Title>

        <SimpleGrid
          cols={2}
          mt="xl"
          breakpoints={[{ maxWidth: 'sm', cols: 1 }]}
        >
          <TextInput
            label="Name"
            placeholder="Your name"
            name="name"
            variant="filled"
            styles={{ input: { border: '1px solid #a7a7a8' } }}
            value={name}
            onChange={(e) => setName(e.target.value)}
            size="md"
          />
          <TextInput
            label="Email"
            placeholder="Your email"
            name="email"
            variant="filled"
            styles={{ input: { border: '1px solid #a7a7a8' } }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            size="md"
          />
        </SimpleGrid>

        <TextInput
          label="Subject"
          placeholder="Subject"
          mt="md"
          name="subject"
          variant="filled"
          styles={{ input: { border: '1px solid #a7a7a8' } }}
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          size="md"
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
        />

        <Group position="center" mt="xl">
          <Button type="submit" size="md" color="red">
            Send message
          </Button>
        </Group>
      </form>
    </Container>
  )
}
