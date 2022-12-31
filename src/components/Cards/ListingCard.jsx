import { Card, Image, Text, Badge, Button, Group } from '@mantine/core'
import {
  IconAspectRatio,
  IconBath,
  IconBed,
  IconDimensions,
} from '@tabler/icons'
import { Link } from 'react-router-dom'

export default function ListingCard({ property }) {
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
      {/* <Link
                  to={`/productPage/${property?._id}`}
                  state={{ data: property }}
                > */}
      <Card.Section>
        <Image src={property?.images[0]} height={180} alt="image" />
      </Card.Section>

      <Group position="apart" mt="md" mb="md">
        <Text weight={700} size="lg">
          {property?.propertyCity}
        </Text>
        <Badge color="pink" variant="light">
          {property?.propertyIs}
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
            textDecoration: 'none',
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
        Rs. {property?.totalPrice}
      </Text>

      <Button variant="light" color="red" fullWidth mt="md" radius="md">
        View
      </Button>
    </Card>
  )
}
