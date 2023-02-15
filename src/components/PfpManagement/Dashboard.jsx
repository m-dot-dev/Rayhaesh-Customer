import { Container, Tabs, Text } from '@mantine/core'
import {
  IconSettings,
  IconCheckupList,
  IconNotes,
  IconMessage,
} from '@tabler/icons'
import ProfileSettings from './ProfileSettings'
import { useState } from 'react'
import BookedProperties from './BookedProperties'
import BlogsPosted from './BlogsPosted'
import FeedbackPosted from './FeedbackPosted'

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('feedback')

  return (
    <Container size={'xl'} mt={'xl'}>
      <Tabs
        orientation="horizontal"
        defaultValue="gallery"
        color="red"
        value={activeTab}
        onTabChange={setActiveTab}
      >
        <Tabs.List>
          <Tabs.Tab value="settings" icon={<IconSettings size={14} />}>
            Settings
          </Tabs.Tab>
          <Tabs.Tab value="properties" icon={<IconCheckupList size={14} />}>
            Properties
          </Tabs.Tab>
          {/* <Tabs.Tab value="blogs" icon={<IconNotes size={14} />}>
            Blogs
          </Tabs.Tab> */}
          <Tabs.Tab value="feedback" icon={<IconMessage size={14} />}>
            Feedbacks
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="settings" pl="xs">
          <ProfileSettings />
        </Tabs.Panel>

        <Tabs.Panel value="properties" pl="xs">
          <BookedProperties />
        </Tabs.Panel>

        {/* <Tabs.Panel value="blogs" pl="xs">
          <BlogsPosted />
        </Tabs.Panel> */}

        <Tabs.Panel value="feedback" pl="xs">
          <FeedbackPosted />
        </Tabs.Panel>
      </Tabs>
    </Container>
  )
}
