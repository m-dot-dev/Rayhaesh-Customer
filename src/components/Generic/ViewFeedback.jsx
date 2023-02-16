import { Modal, Stack, Text } from '@mantine/core'

export default function ViewFeedback({
  feedbackOpened,
  setFeedbackOpened,
  data,
}) {
  const adminResponseDate = new Date(data?.adminReplyDate)
  const responseDate = adminResponseDate.toDateString()

  const feedbackDate = new Date(data?.createdAt)
  const myFeedbackDate = feedbackDate.toDateString()

  return (
    <>
      <Modal
        opened={feedbackOpened}
        onClose={() => setFeedbackOpened(false)}
        transition={'slide-down'}
        transitionDuration={300}
        title="Feedback Details"
        styles={{
          title: {
            fontWeight: 600,
            fontSize: 24,
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
        <Stack>
          <Stack spacing={0}>
            <Text weight={500}>Feedback Posted on:</Text>
            <Text>{myFeedbackDate}</Text>
          </Stack>
          <Stack spacing={0}>
            <Text weight={500}>My {data?.feedbackType}:</Text>
            <Text>{data?.feedback}</Text>
          </Stack>
          <Stack spacing={0}>
            <Text weight={500}>Response by the Admin:</Text>
            <Text>
              {data?.adminReply ? data?.adminReply : 'No Response Yet'}
            </Text>
          </Stack>
          <Stack spacing={0}>
            <Text weight={500}>Admin Response Data:</Text>
            <Text>
              {data?.adminReplyDate ? responseDate : 'No Response Yet'}
            </Text>
          </Stack>
        </Stack>
      </Modal>
    </>
  )
}
