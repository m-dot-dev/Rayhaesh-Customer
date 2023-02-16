import { Badge } from '@mantine/core'
import React from 'react'

const FeedbackStatus = ({ status }) => {
  console.log('====================================')
  console.log('row', status?.adminReply)
  console.log('====================================')

  return (
    <>
      {status?.adminReply ? (
        <Badge color="green" variant="filled">
          Replied
        </Badge>
      ) : (
        <Badge color="blue" variant="filled">
          Pending
        </Badge>
      )}
    </>
  )
}

export default FeedbackStatus
