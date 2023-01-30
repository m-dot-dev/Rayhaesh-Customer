import {
  Button,
  Container,
  Grid,
  Group,
  Image,
  List,
  Paper,
  Text,
} from '@mantine/core'
import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useMediaQuery } from '@mantine/hooks'
import { useNavigate } from 'react-router-dom'

const Blogs = () => {
  const match1000 = useMediaQuery('(max-width: 1000px)')
  const match700 = useMediaQuery('(max-width: 700px)')

  const [blogs, setBlogs] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_REACT_APP_BACKEND_URL + '/admin/getAllBlogs')
      .then((res) => {
        setBlogs(res.data)
        // console.log('====================================')
        // console.log('blogs', blogs)
        // console.log('====================================')
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <Container size={'xl'}>
      <Paper
        mt={'xl'}
        style={{
          width: '100%',
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
        <Button
          variant="filled"
          sx={{
            backgroundColor: '#e6294c',
            color: '#fff',
            '&:hover': {
              backgroundColor: '#e6114c',
            },
          }}
          style={{
            float: 'right',
          }}
          compact={match700 ? true : false}
          onClick={() => {
            navigate('/addblog')
          }}
        >
          Add New Blog
        </Button>

        <Grid>
          <Grid.Col md={3} hidden={match1000 ? true : false}>
            <Paper bg={'#fcfcfc'} px={'xs'}>
              <Text
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 500,
                  textAlign: 'left',
                  color: '#000000',
                  marginBottom: '1rem',
                }}
              >
                Table of Contents
              </Text>

              <List type="ordered">
                <List.Item>Blogs Titles List</List.Item>
              </List>
            </Paper>
          </Grid.Col>

          {/* Blogs */}
          <Grid.Col md={!match1000 ? 9 : 12}>
            <Paper px={'xs'}>
              <Group noWrap spacing={'sm'}>
                <Text weight={600} size={'xl'}>
                  1.
                </Text>
                <Text weight={600} size={'xl'}>
                  DELL XPS 15
                </Text>
              </Group>
              <Group noWrap spacing={'xs'} mt={'sm'}>
                <Text>Posted by: </Text>
                <Text italic>Hashaam Khan </Text>
              </Group>
              <Group noWrap spacing={'xs'}>
                <Text>Posted on: </Text>
                <Text italic>12/12/2021</Text>
              </Group>
              <Image
                radius="xs"
                src="https://images.unsplash.com/photo-1661961110372-8a7682543120?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="Random unsplash image"
                width={match700 ? 320 : 600}
                height={match700 ? 220 : 400}
                mt={'md'}
                style={{
                  display: 'block',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
                px={match1000 ? 20 : 0}
              />
              <Group noWrap mt={'xl'}>
                <Text>
                  Dell made a name for itself in the laptop industry with its
                  XPS 15. The XPS 15 is a powerful laptop that is great for both
                  work and play. It has a 15.6-inch display, a 10th-generation
                  Intel Core i7 processor, 16GB of RAM, and a 512GB SSD. It also
                  has a 4K touchscreen, a fingerprint reader, and a Thunderbolt
                  3 port. The XPS 15 is a great laptop for anyone who wants a
                  powerful laptop that can handle both work and play.
                </Text>
              </Group>
            </Paper>
          </Grid.Col>
        </Grid>
      </Paper>
    </Container>
  )
}

export default Blogs
