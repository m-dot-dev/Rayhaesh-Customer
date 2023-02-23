import { ActionIcon, Tooltip } from '@mantine/core'
import { IconDownload } from '@tabler/icons'
import jsPDF from 'jspdf'
import React from 'react'
import { CSVLink } from 'react-csv'

const DownloadCSV = ({ data }) => {
  console.log('====================================')
  console.log('data to dunlod', data)
  console.log('====================================')

  return (
    <>
      <Tooltip label="Download CSV">
        <ActionIcon>
          <CSVLink
            data={Object.entries(data)?.map(([key, value]) => {
              return [key, JSON.stringify(value)]
            })}
            filename="myBooking.csv"
          >
            <IconDownload size={20} color="blue" />
          </CSVLink>
        </ActionIcon>
      </Tooltip>
    </>
  )
}

export default DownloadCSV
