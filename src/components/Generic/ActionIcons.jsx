import { ActionIcon, Group, Tooltip } from '@mantine/core'
import { IconDownload, IconEye } from '@tabler/icons'
import React, { useState } from 'react'
import ViewBooking from './ViewBooking'

const ActionIcons = () => {
  const [opened, setOpened] = useState(false)

  return (
    <>
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
      <ViewBooking opened={opened} setOpened={setOpened} />
    </>
  )
}

export default ActionIcons
