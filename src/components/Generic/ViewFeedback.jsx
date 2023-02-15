import { Modal, Stack, Text } from '@mantine/core'

export default function ViewFeedback({ feedbackOpened, setFeedbackOpened }) {
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
          <Text weight={500}>Feedback Type Here</Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque quia
            nihil mollitia, quibusdam sunt tempore quos nobis recusandae officia
            accusamus at maxime incidunt autem in ea adipisci esse eum
            voluptatibus.
          </Text>
          <Stack spacing={0}>
            <Text>Response by the Admin:</Text>
            <Text>response by the admin here</Text>
          </Stack>
        </Stack>
      </Modal>
    </>
  )
}
