import { useEffect, useState } from 'react'
import {
  createStyles,
  Table,
  ScrollArea,
  Container,
  Text,
  Badge,
} from '@mantine/core'
import ActionIcons from '../Generic/ActionIcons'
import FeedbackStatus from '../Generic/FeedbackStatus'
import axios from 'axios'

// const data = [
//   {
//     type: 'Feedback',
//     message: 'BHT ACHA FEEDBACK RAHA MERA',
//     status: <FeedbackStatus />,
//     action: <ActionIcons type="feedback" />,
//   },
//   {
//     type: 'Feedback',
//     message: 'BHT ACHA FEEDBACK RAHA MERA',
//     status: <FeedbackStatus />,
//     action: <ActionIcons type="feedback" />,
//   },
// ]

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

export default function FeedbackPosted() {
  const { classes, cx } = useStyles()
  const [scrolled, setScrolled] = useState(false)

  const [myFeedback, setMyFeedback] = useState([])

  const data = [
    {
      _id: '60f9b0b0b0b0b0b0b0b0b0b0',
      feedbackType: 'Feedback',
      feedback: 'BHT ACHA FEEDBACK RAHA MERA',
      status: <FeedbackStatus />,
      action: <ActionIcons type="feedback" />,
    },
  ]

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
        setMyFeedback(res?.data?.body?.data)
        console.log('myFeedback--->', myFeedback)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  //   const rows =
  //     myFeedback &&
  //     myFeedback.map((row) => (
  //       <tr key={row?._id || 1}>
  //         <td>{row?.feedbackType || 'feedback'}</td>
  //         <td
  //           style={{
  //             maxWidth: '200px',
  //             overflow: 'hidden',
  //             whiteSpace: 'nowrap',
  //             textOverflow: 'ellipsis',
  //           }}
  //         >
  //           {row?.feedback || 'feedback Content'}
  //         </td>
  //         <td>{row.status || 'feedback Status'}</td>
  //         <td>
  //           <ActionIcons
  //             type={row?.feedbackType || 'feedback'}
  //             id={row?._id || 1}
  //           />{' '}
  //         </td>
  //       </tr>
  //     ))

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
              <th>Feedback Type</th>
              <th>Feedback Message</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          {/* <tbody>{rows}</tbody> */}
          <tbody>jaja</tbody>
        </Table>
      </ScrollArea>
    </Container>
  )
}
