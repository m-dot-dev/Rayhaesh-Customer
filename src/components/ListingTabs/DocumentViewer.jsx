import { Group, Text } from '@mantine/core'
import React from 'react'

const DocumentViewer = ({ property }) => {
  // console.log('====================================')
  // console.log('property', property?.documents)
  // console.log('====================================')

  return (
    <Group key={document?.id}>
      {property?.documents?.map((document, index) => {
        return (
          <Text>
            <a href={document} target="_blank" rel="noreferrer">
              View Pdf {index + 1}
            </a>
          </Text>
        )
      })}
    </Group>
  )
}

export default DocumentViewer
