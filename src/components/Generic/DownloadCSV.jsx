import { ActionIcon, Tooltip } from '@mantine/core'
import { IconDownload } from '@tabler/icons'
import React from 'react'
import { CSVLink } from 'react-csv'

const DownloadCSV = ({ data }) => {
  const csvData = [
    ['name1', 'city1', 'some other info'],
    ['name2', 'city2', 'more info'],
  ]

  console.log('====================================')
  console.log('data to dunlod', data)
  console.log('====================================')

  return (
    <>
      <Tooltip label="Download CSV">
        <ActionIcon>
          <CSVLink data={csvData}>
            <IconDownload size={20} color="blue" />
          </CSVLink>
        </ActionIcon>
      </Tooltip>
    </>
  )
}

export default DownloadCSV
