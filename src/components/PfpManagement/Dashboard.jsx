import { Container, Tabs, Text } from '@mantine/core'
import {
  IconSettings,
  IconCheckupList,
  IconNotes,
  IconMessage,
} from '@tabler/icons'

export default function Dashboard() {
  return (
    <Container size={'xl'} mt={'xl'}>
      <Tabs orientation="horizontal" defaultValue="gallery">
        <Tabs.List>
          <Tabs.Tab value="settings" icon={<IconSettings size={14} />}>
            Settings
          </Tabs.Tab>
          <Tabs.Tab value="properties" icon={<IconCheckupList size={14} />}>
            Properties
          </Tabs.Tab>
          <Tabs.Tab value="blogs" icon={<IconNotes size={14} />}>
            Blogs
          </Tabs.Tab>
          <Tabs.Tab value="feedback" icon={<IconMessage size={14} />}>
            Feedbacks
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="settings" pl="xs">
          <Text>Settings Page here</Text>
        </Tabs.Panel>

        <Tabs.Panel value="properties" pl="xs">
          <Text>Booked Properties here</Text>
        </Tabs.Panel>

        <Tabs.Panel value="blogs" pl="xs">
          <Text>Blogs that the user posted here</Text>
        </Tabs.Panel>

        <Tabs.Panel value="feedback" pl="xs">
          <Text>Feedback the user has submitted</Text>
        </Tabs.Panel>
      </Tabs>
    </Container>
  )
}
