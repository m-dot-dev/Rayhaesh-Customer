import { useEffect, useState } from 'react'
import {
  createStyles,
  Table,
  ScrollArea,
  Container,
  Text,
  Group,
  Loader,
  Checkbox,
  Button,
  Menu,
} from '@mantine/core'
import ActionIcons from '../Generic/ActionIcons'
import axios from 'axios'
import { IconDownload, IconSettings } from '@tabler/icons'
import DownloadCSV from '../Generic/DownloadCSV'

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

  const [selection, setSelection] = useState([])

  // console.log('====================================')
  // console.log('selectedData', selection)
  // console.log('====================================')

  const toggleRow = (_id) =>
    setSelection((current) =>
      current.includes(_id)
        ? current.filter((item) => item !== _id)
        : [...current, _id],
    )

  const toggleAll = () =>
    setSelection((current) =>
      current.length === myBookedProperties?.data?.body.length
        ? []
        : myBookedProperties?.data?.body?.map((item) => item._id),
    )

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
      myBookedProperties?.data?.body?.map((row) => {
        const selected = selection.includes(myBookedProperties?._id)
        return (
          <tr
            key={row?._id || 1}
            className={cx({ [classes.rowSelected]: selected })}
          >
            <td>
              <Checkbox
                styles={{
                  input: {
                    '&:checked': {
                      backgroundColor: '#D92228',
                      borderColor: '#D92228',
                    },
                    '&:hover': {
                      cursor: 'pointer',
                    },
                  },
                }}
                checked={selection.includes(row?._id)}
                onChange={() => toggleRow(row?._id)}
                transitionDuration={0}
              />
            </td>
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
        )
      })
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
      <Group position="right" mb={'xl'}>
        <Menu shadow="md" width={200}>
          <Menu.Target>
            <Button
              rightIcon={<IconDownload size={18} />}
              color="red"
              disabled={loading}
            >
              Export
            </Button>
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Item disabled={selection.length === 0}>
              <DownloadCSV
                selectedData={myBookedProperties?.data?.body.filter((item) =>
                  selection.includes(item._id),
                )}
                type="selected"
              />
            </Menu.Item>
            <Menu.Item>
              <DownloadCSV data={myBookedProperties?.data?.body} type="all" />
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Group>
      <ScrollArea
        sx={{ height: 300 }}
        onScrollPositionChange={({ y }) => setScrolled(y !== 0)}
      >
        <Table sx={{ minWidth: 700 }} striped withBorder>
          <thead
            className={cx(classes.header, { [classes.scrolled]: scrolled })}
          >
            <tr>
              <th style={{ width: 40 }}>
                <Checkbox
                  styles={{
                    input: {
                      '&:checked': {
                        backgroundColor: '#D92228',
                        borderColor: '#D92228',
                      },
                      '&:hover': {
                        cursor: 'pointer',
                      },
                    },
                  }}
                  onChange={toggleAll}
                  checked={
                    selection.length === myBookedProperties?.data?.body.length
                  }
                  indeterminate={
                    selection.length > 0 &&
                    selection.length !== myBookedProperties?.data?.body.length
                  }
                  transitionDuration={0}
                />
              </th>
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
