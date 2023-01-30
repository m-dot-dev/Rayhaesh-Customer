import {
  Button,
  Container,
  Group,
  Paper,
  Stack,
  Text,
  TextInput,
  Textarea,
} from '@mantine/core'
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone'
import { useMediaQuery } from '@mantine/hooks'
import { IconPhoto, IconUpload, IconX } from '@tabler/icons'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const AddBlog = (props) => {
  const [name, setName] = React.useState('')
  const [title, setTitle] = React.useState('')
  const [content, setContent] = React.useState('')
  const [createdAt, setCreatedAt] = React.useState()

  const match350 = useMediaQuery('(max-width: 350px)')

  React.useEffect(() => {
    const date = new Date()
    setCreatedAt(date)
  }, [])

  const navigate = useNavigate()

  return (
    <>
      <Container size={'xl'}>
        <Paper p={'xl'}>
          <Text
            weight={700}
            align="center"
            style={{
              fontSize: '2rem',
            }}
            mt={'xl'}
            mb={'xl'}
          >
            Add Blog Details
          </Text>

          <TextInput
            required
            label="Username"
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
            style={{
              width: '100%',
            }}
            mb={'md'}
          />

          <TextInput
            required
            label="Blog Title"
            value={title}
            onChange={(e) => setTitle(e.currentTarget.value)}
            style={{
              width: '100%',
            }}
            mb={'md'}
          />
          <Textarea
            label="Blog Content"
            placeholder="Place the blog content here"
            value={content}
            onChange={(e) => setContent(e.currentTarget.value)}
            style={{
              width: '100%',
            }}
            mb={'md'}
          />

          <Dropzone
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
                <IconUpload size={50} stroke={1.5} />
              </Dropzone.Accept>
              <Dropzone.Reject>
                <IconX size={50} stroke={1.5} />
              </Dropzone.Reject>
              <Dropzone.Idle>
                <IconPhoto size={50} stroke={1.5} />
              </Dropzone.Idle>

              <div>
                <Text size="xl" inline>
                  Drag image here or click to select file
                </Text>
                <Text size="sm" color="dimmed" inline mt={7}>
                  File should not exceed 5mb
                </Text>
              </div>
            </Group>
          </Dropzone>
          {!match350 ? (
            <Group
              mt={'xl'}
              style={{
                width: '30%',
              }}
              noWrap
            >
              <Button color={'red'} onClick={() => navigate('/blogs')}>
                Cancel
              </Button>
              <Button color={'green'}>Add Blog</Button>
            </Group>
          ) : (
            <Stack
              mt={'xl'}
              style={{
                width: '100%',
              }}
            >
              <Button color={'red'} onClick={() => navigate('/blogs')}>
                Cancel
              </Button>
              <Button color={'green'}>Add Blog</Button>
            </Stack>
          )}
        </Paper>
      </Container>
    </>
  )
}

export default AddBlog
