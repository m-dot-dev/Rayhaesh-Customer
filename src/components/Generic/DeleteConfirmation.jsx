import { Button, Group, Modal, Spoiler, Stack, Text } from '@mantine/core'
import { showNotification } from '@mantine/notifications'
import { IconCheck, IconX } from '@tabler/icons'
import axios from 'axios'
import { useState } from 'react'

export default function DeleteConfirmation({
  deleteOpened,
  setDeleteOpened,
  data,
}) {
  const [loading, setLoading] = useState(false)

  const handleDelete = () => {
    axios
      .delete(
        import.meta.env.VITE_REACT_APP_BACKEND_URL +
          '/user/deleteSystemFeedback/' +
          data?._id,
        {
          headers: {
            token: localStorage.getItem('token'),
          },
        },
      )
      .then((res) => {
        console.log('deletion--->', res)
        setLoading(false)
        if (res?.data?.success === true) {
          showNotification({
            title: 'Feedback Deleted',
            message: 'Your feedback has been removed from the system!',
            color: 'green',
            icon: <IconCheck size={14} />,
            autoClose: true,
          })
        } else {
          showNotification({
            title: 'Deletion Failed',
            message: 'Feedback deletion failed. Please try again.',
            color: 'red',
            icon: <IconX size={14} />,
            autoClose: true,
          })
        }
        setDeleteOpened(false)
      })
      .catch((err) => {
        console.log(err)
        setLoading(false)
        setDeleteOpened(false)
      })
  }

  return (
    <>
      <Modal
        opened={deleteOpened}
        onClose={() => setDeleteOpened(false)}
        transition={'slide-down'}
        transitionDuration={300}
        title="Are you sure you want to delete this? This action cannot be undone!"
        styles={{
          title: {
            fontWeight: 550,
            fontSize: 20,
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
        <Group
          position="center"
          style={{
            marginTop: 30,
            marginBottom: 20,
            width: '100%',
          }}
        >
          <Button
            style={{
              width: '30%',
            }}
            color="green"
            uppercase
            onClick={() => {
              setDeleteOpened(false)
            }}
          >
            No
          </Button>
          <Button
            style={{
              width: '30%',
            }}
            color="red"
            uppercase
            onClick={() => {
              handleDelete()
              setLoading(true)
            }}
            loading={loading}
          >
            Yes
          </Button>
        </Group>
      </Modal>
    </>
  )
}
