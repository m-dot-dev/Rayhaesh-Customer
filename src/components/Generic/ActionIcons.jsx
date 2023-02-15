import { ActionIcon, Group, Tooltip } from '@mantine/core'
import { IconDownload, IconEdit, IconEye, IconTrash } from '@tabler/icons'
import React, { useState } from 'react'
import ViewBooking from './ViewBooking'
import ViewBlogs from './ViewBlogs'

const ActionIcons = ({ type }) => {
  const [opened, setOpened] = useState(false)
  const [blogOpened, setBlogOpened] = useState(false)

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
      ) : (
        <Group spacing={'xs'} position="left" noWrap>
          <Tooltip label="View">
            <ActionIcon onClick={() => setOpened(true)}>
              <IconEye size={20} color="purple" />
            </ActionIcon>
          </Tooltip>
          <Tooltip label="Export to CSV">
            <ActionIcon>
              <IconDownload size={20} color="red" />
            </ActionIcon>
          </Tooltip>
        </Group>
      )}
      <ViewBooking opened={opened} setOpened={setOpened} />
      <ViewBlogs blogOpened={blogOpened} setBlogOpened={setBlogOpened} />
    </>
  )
}

export default ActionIcons
