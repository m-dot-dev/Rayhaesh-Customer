import { Group, Text } from '@mantine/core'
import React from 'react'

const DocumentViewer = ({ property }) => {
  return (
    <>
      {property?.documents?.[0] && (
        <iframe
          src={property?.documents[0]}
          width="100%"
          border="1px solid #ccc"
          height="500px"
          title="document"
        />
      )}

      <Group
        key={document?.id}
        style={{
          width: '100%',
        }}
      >
        {property?.documents?.map((document, index) => {
          return (
            <Text
              style={{
                border: '1px solid #ccc',
              }}
              // dont take full width
              // grow={false}
            >
              <a href={document} target="_blank" rel="noreferrer">
                View Document {index + 1}
              </a>
            </Text>
          )
        })}
      </Group>
    </>
  )
}
export default DocumentViewer
