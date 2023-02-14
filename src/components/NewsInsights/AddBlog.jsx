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
import { IconCheck, IconPhoto, IconUpload, IconX } from '@tabler/icons'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import DropZone from '../Generic/DropZone'
import axios from 'axios'
import { uploadImage } from '../services/fileUpload'
import { showNotification } from '@mantine/notifications'

const AddBlog = (props) => {
  const [name, setName] = React.useState('')
  const [title, setTitle] = React.useState('')
  const [content, setContent] = React.useState('')
  const [createdAt, setCreatedAt] = React.useState()
  const [coverImage, setCoverImage] = React.useState(null)
  const [email, setEmail] = React.useState('')

  const [loading, setLoading] = React.useState(false)

  const match350 = useMediaQuery('(max-width: 350px)')

  React.useEffect(() => {
    const date = new Date()
    setCreatedAt(date)
  }, [])

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const imageURL = await uploadImage(coverImage, 'blog-covers')

    axios
      .post(
        import.meta.env.VITE_REACT_APP_BACKEND_URL + '/blog/addBlog',
        {
          name,
          title,
          blog: content,
          createdAt,
          coverImage: imageURL,
        },
        {
          headers: {
            token: localStorage.getItem('token'),
          },
        },
      )
      .then((res) => {
        console.log('====================================')
        console.log('res', res)
        console.log('====================================')
        setLoading(false)
        navigate('/blogs')

        if (res?.data?.success === true) {
          showNotification({
            title: 'Blog Added',
            message: 'Your blog has been added and is live!',
            color: 'green',
            icon: <IconCheck size={14} />,
            autoClose: true,
          })
        } else {
          showNotification({
            title: 'Upload Failed',
            message: 'Blog posting failed. Please try again.',
            color: 'red',
            icon: <IconX size={14} />,
            autoClose: true,
          })
        }
      })
      .catch((err) => {
        setLoading(false)
        console.log('====================================')
        console.log('err', err)
        console.log('====================================')
      })
  }

  return (
    <>
      <Container size={'xl'}>
        <Paper p={'xl'}>
          <form onSubmit={handleSubmit}>
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
              styles={{
                input: { border: '1px solid #a7a7a8' },
                label: {
                  fontSize: '1rem',
                },
              }}
            />

            <TextInput
              required
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
              style={{
                width: '100%',
              }}
              mb={'md'}
              styles={{
                input: { border: '1px solid #a7a7a8' },
                label: {
                  fontSize: '1rem',
                },
              }}
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
              styles={{
                input: { border: '1px solid #a7a7a8' },
                label: {
                  fontSize: '1rem',
                },
              }}
            />
            <Textarea
              label="Blog Content"
              placeholder="Place the blog content here"
              value={content}
              onChange={(e) => setContent(e.currentTarget.value)}
              style={{
                width: '100%',
              }}
              required
              mb={'md'}
              styles={{
                input: { border: '1px solid #a7a7a8' },
                label: {
                  fontSize: '1rem',
                },
              }}
            />

            <Group position="center">
              <DropZone value={coverImage} setValue={setCoverImage} />
            </Group>

            <Group mt={'xl'} noWrap position="right">
              <Button color={'red'} onClick={() => navigate('/blogs')}>
                Cancel
              </Button>
              <Button
                color={'green'}
                type="submit"
                loading={loading}
                onClick={() => setLoading(true)}
              >
                Add Blog
              </Button>
            </Group>
          </form>
        </Paper>
      </Container>
    </>
  )
}

export default AddBlog
