import { Modal, Spoiler, Stack, Text } from '@mantine/core'

export default function ViewBlogs({ blogOpened, setBlogOpened }) {
  return (
    <>
      <Modal
        opened={blogOpened}
        onClose={() => setBlogOpened(false)}
        transition={'slide-down'}
        transitionDuration={300}
        title="Blog Details"
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
          <Text weight={500}>Blog Title Here</Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque quia
            nihil mollitia, quibusdam sunt tempore quos nobis recusandae officia
            accusamus at maxime incidunt autem in ea adipisci esse eum
            voluptatibus.
          </Text>
        </Stack>
      </Modal>
    </>
  )
}
