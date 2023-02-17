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
import { useForm } from '@mantine/form'

const AddBlog = () => {
  const [coverImage, setCoverImage] = React.useState(null)

  const [loading, setLoading] = React.useState(false)

  const navigate = useNavigate()

  const handleSubmit = async (values) => {
    setLoading(true)

    const imageURL = await uploadImage(coverImage, 'blog-covers')
    values.coverImage = imageURL
    axios
      .post(
        import.meta.env.VITE_REACT_APP_BACKEND_URL + '/blog/addBlog',

        values,
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
        navigate('/blogs')
        setLoading(false)
      })
      .catch((err) => {
        setLoading(false)
        console.log('====================================')
        console.log('err', err)
        console.log('====================================')
      })
  }

  const form = useForm({
    initialValues: {
      name: '',
      title: '',
      blog: '',
      createdAt: new Date(),
      email: '',
    },

    validate: {
      name: (value) =>
        value.length < 2 ? 'Name must have at least 2 letters' : null,
      title: (value) =>
        value.length < 5 ? 'Title must have at least 5 letters' : null,
      blog: (value) =>
        value.length < 50 ? 'Message must have at least 50 letters' : null,
      email: (value) =>
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
          ? 'Invalid email address'
          : null,
    },
  })

  return (
    <>
      <Container size={'xl'}>
        <Paper p={'xl'}>
          <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
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
              label="Username"
              style={{
                width: '100%',
              }}
              mb={'md'}
              styles={{
                input: { border: '1px solid #a7a7a8' },
                label: {
                  fontSize: '1.1rem',
                  fontWeight: 600,
                },
              }}
              size="md"
              variant="filled"
              {...form.getInputProps('name')}
            />

            <TextInput
              label="Email"
              style={{
                width: '100%',
              }}
              mb={'md'}
              styles={{
                input: { border: '1px solid #a7a7a8' },
                label: {
                  fontSize: '1.1rem',
                  fontWeight: 600,
                },
              }}
              size="md"
              variant="filled"
              {...form.getInputProps('email')}
            />

            <TextInput
              label="Blog Title"
              style={{
                width: '100%',
              }}
              mb={'md'}
              styles={{
                input: { border: '1px solid #a7a7a8' },
                label: {
                  fontSize: '1.1rem',
                  fontWeight: 600,
                },
              }}
              size="md"
              variant="filled"
              {...form.getInputProps('title')}
            />
            <Textarea
              label="Blog Content"
              placeholder="Place the blog content here"
              style={{
                width: '100%',
              }}
              mb={'md'}
              styles={{
                input: { border: '1px solid #a7a7a8' },
                label: {
                  fontSize: '1.1rem',
                  fontWeight: 600,
                },
              }}
              size="md"
              variant="filled"
              {...form.getInputProps('blog')}
            />

            <Group position="center">
              <DropZone value={coverImage} setValue={setCoverImage} />
            </Group>

            <Group mt={'xl'} noWrap position="right">
              <Button color={'red'} onClick={() => navigate('/blogs')}>
                Cancel
              </Button>
              <Button color={'green'} type="submit" loading={loading}>
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
