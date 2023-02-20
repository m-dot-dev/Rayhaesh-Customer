import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  ActionIcon,
} from '@mantine/core'
import { IconAspectRatio, IconBath, IconBed, IconHeart } from '@tabler/icons'
import { useNavigate } from 'react-router-dom'

export default function ListingCard({ property }) {
  const navigate = useNavigate()

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
        <Image src={property?.images[0]} height={180} alt="image" />
      </Card.Section>

      <Group position="apart" mt="md" noWrap>
        <Text weight={700} size="lg">
          {property?.propertyCity}
        </Text>
        <Badge color="pink" variant="light">
          {property?.propertyIs}
        </Badge>
      </Group>

      <Group mt={'xs'} position="apart">
        <Text
          size="lg"
          style={{
            color: '#D92228',
            textTransform: 'uppercase',
            fontSize: 16,
          }}
        >
          {property?.propertySubCategory}
        </Text>
      </Group>

      {property?.propertySubCategory !== 'plot' &&
      property?.propertySubCategory !== 'file' &&
      property?.propertySubCategory !== 'shop' ? (
        <Group mt={'xs'} position="apart" noWrap>
          <Group spacing={1}>
            <IconBed opacity={0.6} />
            <Text>{property?.noOfBedRooms}</Text>
          </Group>
          <Group spacing={1}>
            <IconBath opacity={0.6} />
            <Text>{property?.noOfBathrooms}</Text>
          </Group>
          <Group spacing={1}>
            <IconAspectRatio opacity={0.6} />
            <Text>
              {property?.areaSize} {property?.areaSizeUnit}
            </Text>
          </Group>
        </Group>
      ) : (
        <Group spacing={'xs'}>
          <IconAspectRatio opacity={0.6} />
          <Text>
            {property?.areaSize} {property?.areaSizeUnit}
          </Text>
        </Group>
      )}

      <Group position="apart" mt={'md'} noWrap>
        <Text
          size="md"
          style={{
            color: '#D92228',
            fontSize: 20,
          }}
          weight={500}
        >
          Rs. {property?.totalPrice}
        </Text>
        <Badge color="red" variant="dot">
          {property?.propertyAvailabilityStatus}
        </Badge>
      </Group>
    </Card>
  )
}
