import { useState } from 'react'
import { createStyles, Table, ScrollArea, Container, Text } from '@mantine/core'
import ActionIcons from '../Generic/ActionIcons'

const data = [
  {
    title: '10 Marla File in Burewala',
    city: 'Burewala',
    category: 'Residential',
    subCategory: 'File',
    type: 'Interested In',
    action: <ActionIcons />,
  },
  {
    title: '10 Marla File in Burewala',
    city: 'Burewala',
    category: 'Residential',
    subCategory: 'File',
    type: 'Paid',
    action: <ActionIcons />,
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

export default function BookedProperties() {
  const { classes, cx } = useStyles()
  const [scrolled, setScrolled] = useState(false)

  const rows = data.map((row) => (
    <tr key={row.name}>
      <td>{row.title}</td>
      <td>{row.city}</td>
      <td>{row.category}</td>
      <td>{row.subCategory}</td>
      <td>{row.type}</td>
      <td>{row.action}</td>
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
        <Table sx={{ minWidth: 700 }}>
          <thead
            className={cx(classes.header, { [classes.scrolled]: scrolled })}
          >
            <tr>
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
