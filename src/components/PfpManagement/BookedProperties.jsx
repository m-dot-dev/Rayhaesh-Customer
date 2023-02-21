import { useEffect, useState } from 'react'
import {
  createStyles,
  Table,
  ScrollArea,
  Container,
  Text,
  Group,
  Loader,
} from '@mantine/core'
import ActionIcons from '../Generic/ActionIcons'
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

export default function BookedProperties() {
  const [myBookedProperties, setMyBookedProperties] = useState([])
  const [loading, setLoading] = useState(true)
  const { classes, cx } = useStyles()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    axios
      .get(
        import.meta.env.VITE_REACT_APP_BACKEND_URL + '/customer/getMyBookings',
        {
          headers: {
            token: localStorage.getItem('token'),
          },
        },
      )
      .then((res) => {
        setMyBookedProperties(res)
        setLoading(false)
        console.log('myProperties--->', myBookedProperties?.data?.body)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const rows =
    loading === true ? (
      <tr>
        <td colSpan={12}>
          <Group position="center">
            <Loader variant="dots" color="red" />
          </Group>
        </td>
      </tr>
    ) : myBookedProperties?.data?.body.length !== 0 ? (
      myBookedProperties?.data?.body?.map((row) => (
        <tr key={row?._id || 1}>
          <td>{myBookedProperties?.data?.body?.indexOf(row) + 1}</td>
          <td>{row?.propertyId?.propertyTitle}</td>
          <td>{row?.propertyId?.propertyCity}</td>
          <td>{row?.propertyId?.propertyCategory}</td>
          <td>{row?.propertyId?.propertySubCategory}</td>
          <td>{row?.bookingType}</td>
          <td>
            <ActionIcons data={row} id={row?._id || 1} />
          </td>
        </tr>
      ))
    ) : (
      <tr>
        <td colSpan={4}>
          <Group position="center">
            <Text size={20} weight={600}>
              No Booked Properties
            </Text>
          </Group>
        </td>
      </tr>
    )

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
              <th>ID</th>
              <th>Property Title</th>
              <th>Property City</th>
              <th>Category</th>
              <th>Sub Category</th>
              <th>Booking Type</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </ScrollArea>
    </Container>
  )
}
