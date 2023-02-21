import { ActionIcon, Group, Tooltip } from '@mantine/core'
import { IconDownload, IconEdit, IconEye, IconTrash } from '@tabler/icons'
import React, { useState } from 'react'
import ViewBooking from './ViewBooking'
import ViewBlogs from './ViewBlogs'
import ViewFeedback from './ViewFeedback'
import DeleteConfirmation from './DeleteConfirmation'

const ActionIcons = ({ type, data }) => {
  const [opened, setOpened] = useState(false)
  const [blogOpened, setBlogOpened] = useState(false)
  const [feedbackOpened, setFeedbackOpened] = useState(false)
  const [deleteOpened, setDeleteOpened] = useState(false)

  return (
    <>
      {type === 'blog' ? (
        <Group spacing={'xs'} position="left" noWrap>
          <Tooltip label="View">
            <ActionIcon onClick={() => setBlogOpened(true)}>
              <IconEye size={20} color="purple" />
            </ActionIcon>
          </Tooltip>
          <Tooltip label="Edit Blog">
            <ActionIcon>
              <IconEdit size={20} color="blue" />
            </ActionIcon>
          </Tooltip>
          <Tooltip label="Delete Blog">
            <ActionIcon>
              <IconTrash size={20} color="red" />
            </ActionIcon>
          </Tooltip>
        </Group>
      ) : type === 'feedback' ? (
        <Group spacing={'xs'} position="left" noWrap>
          <Tooltip label="View">
            <ActionIcon onClick={() => setFeedbackOpened(true)}>
              <IconEye size={20} color="purple" />
            </ActionIcon>
          </Tooltip>
          <Tooltip label="Delete Feedback">
            <ActionIcon onClick={() => setDeleteOpened(true)}>
              <IconTrash size={20} color="red" />
            </ActionIcon>
          </Tooltip>
        </Group>
      ) : (
        <Group spacing={'xs'} position="left" noWrap>
          <Tooltip label="View">
            <ActionIcon onClick={() => setOpened(true)}>
              <IconEye size={20} color="purple" />
            </ActionIcon>
          </Tooltip>
        </Group>
      )}
      <ViewBooking opened={opened} setOpened={setOpened} data={data} />
      <ViewBlogs blogOpened={blogOpened} setBlogOpened={setBlogOpened} />
      <ViewFeedback
        feedbackOpened={feedbackOpened}
        setFeedbackOpened={setFeedbackOpened}
        data={data}
      />
      <DeleteConfirmation
        deleteOpened={deleteOpened}
        setDeleteOpened={setDeleteOpened}
        data={data}
      />
    </>
  )
}

export default ActionIcons
