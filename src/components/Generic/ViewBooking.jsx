import { useState } from 'react'
import { Modal, Button, Group, Stack, Text, Grid } from '@mantine/core'

export default function ViewBooking({ opened, setOpened }) {
  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        transition={'slide-down'}
        transitionDuration={300}
        title="Booking Details"
        styles={{
          title: {
            fontWeight: 600,
            fontSize: 24,
          },
          close: {
            backgroundColor: '#D92228',
            color: 'white',
            '&:hover': {
              backgroundColor: '#D92228',
              color: 'white',
            },
          },
        }}
        centered
        overlayOpacity={0.55}
        overlayBlur={3}
      >
        <Group mt={'lg'} spacing={'xl'}>
          <Grid>
            <Grid.Col>
              <Text weight={500}>Property Title:</Text>
              <Text weight={500}>Booking Type:</Text>
              <Text weight={500}>Payment Method:</Text>
              <Text weight={500}>Amount:</Text>
              <Text weight={500}>Booking Date:</Text>
            </Grid.Col>
          </Grid>
          <Grid pl={'sm'}>
            <Grid.Col>
              <Text>10 Marla File in Burewala</Text>
              <Text>Full Paid</Text>
              <Text>Cash</Text>
              <Text>Rs. 10000</Text>
              <Text>27/11/11</Text>
            </Grid.Col>
          </Grid>
        </Group>
      </Modal>
    </>
  )
}
