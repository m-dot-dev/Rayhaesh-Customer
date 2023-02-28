import { ActionIcon, Group, Text, Tooltip } from '@mantine/core'
import { IconDownload } from '@tabler/icons'
import React from 'react'
import { CSVLink } from 'react-csv'

const DownloadCSV = ({ data, type, selectedData }) => {
  console.log('====================================')
  console.log('selectedData', selectedData)
  console.log('allData', data)
  console.log('type', type)
  console.log('====================================')

  return (
    <>
      {type === 'selected' ? (
        <CSVLink
          data={Object.entries(selectedData)?.map(([key, value]) => {
            return [key, JSON.stringify(value)]
          })}
          filename="propertyBookingDetails.csv"
        >
          Selected to CSV
        </CSVLink>
      ) : (
        <CSVLink
          data={Object.entries(data)?.map(([key, value]) => {
            return [key, JSON.stringify(value)]
          })}
          filename="AllPropertiesBookingDetails.csv"
        >
          All to CSV
        </CSVLink>
      )}
    </>
  )
}

export default DownloadCSV
