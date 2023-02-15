import { useEffect, useState } from 'react'
import { createStyles, Table, ScrollArea, Container, Text } from '@mantine/core'
import ActionIcons from '../Generic/ActionIcons'
import axios from 'axios'

const data = [
  {
    title: 'Blog Title Here',
    content:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque quianihil mollitia, quibusdam sunt tempore quos nobis recusandae officiaaccusamus at maxime incidunt autem in ea adipisci esse eumvoluptatibus',
    action: <ActionIcons type="blog" />,
  },
  {
    title: 'Blog Title Here',
    content:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque quianihil mollitia, quibusdam sunt tempore quos nobis recusandae officiaaccusamus at maxime incidunt autem in ea adipisci esse eumvoluptatibus',
    action: <ActionIcons type="blog" />,
  },
]

const useStyles = createStyles((theme) => ({
  header: {
    position: 'sticky',
    top: 0,
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    transition: 'box-shadow 150ms ease',

    '&::after': {
      content: '""',
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      borderBottom: `1px solid ${
        theme.colorScheme === 'dark'
          ? theme.colors.dark[3]
          : theme.colors.gray[2]
      }`,
    },
  },

  scrolled: {
    boxShadow: theme.shadows.sm,
  },
}))

export default function BlogsPosted() {
  //   const [blog, setBlog] = useState([])

  //   useEffect(() => {
  //     axios
  //       .get(import.meta.env.VITE_REACT_APP_BACKEND_URL + '/blog/getAllBlogs', {
  //         headers: {
  //           token: localStorage.getItem('token'),
  //         },
  //       })
  //       .then((res) => {
  //         setBlog(res.data?.body)
  //       })
  //       .catch((err) => {
  //         console.log(err)
  //       })
  //   }, [])

  const { classes, cx } = useStyles()
  const [scrolled, setScrolled] = useState(false)

  const rows = data.map((row) => (
    <tr key={row.name}>
      <td>{row.title}</td>
      <td
        style={{
          maxWidth: '200px',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
        }}
      >
        {row.content}
      </td>
      <td
        style={{
          paddingLeft: '20px',
        }}
      >
        {row.action}
      </td>
    </tr>
  ))

  return (
    <Container size={'xl'} mt={'xl'}>
      <Text weight={600} align="center" size={26} mb={'xl'}>
        My Booked Properties
      </Text>
      <ScrollArea
        sx={{ height: 300 }}
        onScrollPositionChange={({ y }) => setScrolled(y !== 0)}
      >
        <Table sx={{ minWidth: 700 }} striped>
          <thead
            className={cx(classes.header, { [classes.scrolled]: scrolled })}
          >
            <tr>
              <th>Blog Title</th>
              <th>Blog Content</th>
              <th
                style={{
                  paddingLeft: '20px',
                }}
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </ScrollArea>
    </Container>
  )
}
