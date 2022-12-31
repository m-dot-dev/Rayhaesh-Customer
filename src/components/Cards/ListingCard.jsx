import { Card, Image, Text, Badge, Button, Group } from '@mantine/core'
import {
  IconAspectRatio,
  IconBath,
  IconBed,
  IconDimensions,
} from '@tabler/icons'

export default function ListingCard() {
  return (
    <Card
      shadow="sm"
      p="md"
      radius="md"
      withBorder
      style={{
        borderColor: '#D92228',
      }}
      sx={{
        maxHeight: '400px',
      }}
    >
      <Card.Section>
        <Image
          src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
          height={180}
          alt="Norway"
        />
      </Card.Section>

      <Group position="apart" mt="md" mb="md">
        <Text weight={700} size="lg">
          Property Location
        </Text>
        <Badge color="pink" variant="light">
          For Sale
        </Badge>
      </Group>

      <Group
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
        mb="md"
      >
        <Text
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 5,
          }}
        >
          5
          <IconAspectRatio opacity={0.6} />
        </Text>
        <Text
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 5,
          }}
        >
          5
          <IconBed opacity={0.6} />
        </Text>
        <Text
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 5,
          }}
        >
          5
          <IconBath opacity={0.6} />
        </Text>
      </Group>

      <Text
        size="md"
        style={{
          color: '#D92228',
          marginTop: 5,
          fontSize: 20,
        }}
        weight={500}
        mt={'md'}
      >
        Rs. 50000
      </Text>

      <Button variant="light" color="red" fullWidth mt="md" radius="md">
        View
      </Button>
    </Card>
  )
}
