import { useEffect, useState } from 'react'
import {
  createStyles,
  Table,
  ScrollArea,
  Container,
  Text,
  Badge,
  Loader,
  Group,
} from '@mantine/core'
import ActionIcons from '../Generic/ActionIcons'
import FeedbackStatus from '../Generic/FeedbackStatus'
import axios from 'axios'

const useStyles = createStyles((theme) => ({
  header: {
    position: 'sticky',
    top: 0,
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    transition: 'box-shadow 150ms ease',
    zIndex: 1,

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

export default function FeedbackPosted() {
  const { classes, cx } = useStyles()
  const [scrolled, setScrolled] = useState(false)

  const [myFeedback, setMyFeedback] = useState([])

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios
      .get(
        import.meta.env.VITE_REACT_APP_BACKEND_URL +
          '/user/myAddedSystemFeedbacks',
        {
          headers: {
            token: localStorage.getItem('token'),
          },
        },
      )
      .then((res) => {
        setMyFeedback(res)
        setLoading(false)
        console.log('myFeedback--->', myFeedback)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const rows =
    loading === true ? (
      <tr>
        <td colSpan={4}>
          <Group position="center">
            <Loader variant="dots" color="red" />
          </Group>
        </td>
      </tr>
    ) : myFeedback?.data?.data?.length !== 0 ? (
      myFeedback?.data?.data?.map((row) => (
        <tr key={row?._id || 1}>
          <td>{row?.feedbackType || 'feedback'}</td>
          <td
            style={{
              maxWidth: '200px',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
            }}
          >
            {row?.feedback || 'feedback Content'}
          </td>
          <td>
            <FeedbackStatus status={row} />
          </td>
          <td>
            <ActionIcons
              type={row?.feedbackType || 'feedback'}
              data={row}
              id={row?._id || 1}
            />{' '}
          </td>
        </tr>
      ))
    ) : (
      <tr>
        <td colSpan={4}>
          <Text align="center" size={20} weight={600}>
            No Feedback Posted
          </Text>
        </td>
      </tr>
    )

  return (
    <Container size={'xl'} mt={'xl'}>
      <Text weight={600} align="center" size={26} mb={'xl'}>
        My Feedbacks
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
              <th>Feedback Type</th>
              <th>Feedback Message</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </ScrollArea>
    </Container>
  )
}
