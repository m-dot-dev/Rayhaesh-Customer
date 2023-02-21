import { useState } from 'react'
import { Modal, Button, Group, Stack, Text, Grid } from '@mantine/core'

export default function ViewBooking({ opened, setOpened, data }) {
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
              <Text>{data?.propertyId?.propertyTitle}</Text>
              <Text>{data?.bookingType}</Text>
              <Text>{data?.paymentMethod}</Text>
              <Text>{data?.paymentAmount}</Text>
              <Text>
                {new Date(data.createdAt).toLocaleDateString('en-US', {
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric',
                })}
              </Text>
            </Grid.Col>
          </Grid>
        </Group>
      </Modal>
    </>
  )
}
