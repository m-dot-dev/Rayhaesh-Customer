import {
  Button,
  Center,
  Container,
  Grid,
  Group,
  Image,
  Indicator,
  List,
  Paper,
  Text,
} from '@mantine/core'
import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useMediaQuery } from '@mantine/hooks'
import { useNavigate } from 'react-router-dom'
import { IconPlus } from '@tabler/icons'

const Blogs = () => {
  const match1000 = useMediaQuery('(max-width: 1000px)')
  const match700 = useMediaQuery('(max-width: 700px)')
  const match400 = useMediaQuery('(max-width: 400px)')

  const [blogs, setBlogs] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_REACT_APP_BACKEND_URL + '/blog/getAllBlogs')
      .then((res) => {
        setBlogs(res.data?.body)
        // console.log('====================================')
        // console.log('blogs:', blogs[0]?.createdAt)
        // console.log('====================================')
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  console.log('====================================')
  console.log('Blogs: ', blogs[0]?.createdAt)
  console.log('====================================')

  const blogDate = new Date(blogs[0]?.createdAt)
  const formattedBlogDate = blogDate.toDateString()

  return (
    <Container size={'xl'}>
      <Paper
        mt={'xl'}
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text
          style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            textAlign: 'center',
            color: '#e6294c',
            marginBottom: '3rem',
          }}
        >
          REMS BLOGS
        </Text>

        <Group
          mt={0}
          style={{
            width: '100%',
          }}
          position={match700 ? 'center' : 'right'}
          mb={match700 ? 'xl' : 0}
        >
          <Button color="red" onClick={() => navigate('/addblog')}>
            Add Blog
          </Button>
        </Group>

        <Grid
          style={{
            width: '100%',
          }}
        >
          <Paper
            px={'xs'}
            style={{
              width: '100%',
            }}
          >
            {blogs.map((blog) => (
              <Paper
                style={{
                  backgroundColor: '#f9f9f9',
                }}
                mt={80}
                p={'xs'}
              >
                <Group noWrap spacing={'sm'} mt={'xs'}>
                  <Text weight={600} size={'xl'}>
                    {blogs.indexOf(blog) + 1}.
                  </Text>
                  <Text weight={600} size={'xl'}>
                    {blog.title}
                  </Text>
                </Group>
                <Group noWrap spacing={'xs'} mt={'sm'}>
                  <Text>Posted by: </Text>
                  <Text italic>{blog?.addedBy?.name} </Text>
                </Group>
                <Group noWrap spacing={'xs'}>
                  <Text>Posted on: </Text>
                  <Text italic>{formattedBlogDate}</Text>
                </Group>
                <Center>
                  <Group
                    style={{
                      maxWidth: 500,
                      overflow: 'hidden',
                      maxHeight: 400,
                    }}
                    position={'center'}
                    align="center"
                  >
                    <Image
                      radius="xs"
                      src={blog?.coverImage}
                      alt="Random unsplash image"
                      mt={'md'}
                      px={match1000 ? 20 : 0}
                    />
                  </Group>
                </Center>
                <Group noWrap mt={'xl'} mb={'xl'}>
                  <Text
                    style={{
                      wordBreak: 'break-word',
                      overflowWrap: 'break-word',
                    }}
                  >
                    {blog?.blog}
                  </Text>
                </Group>
              </Paper>
            ))}
          </Paper>
        </Grid>
      </Paper>
    </Container>
  )
}

export default Blogs
