import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  Skeleton,
} from '@mantine/core'
import { IconAspectRatio, IconBath, IconBed } from '@tabler/icons'

export default function BuyCards({ property }) {
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
        {property?.propertySubCategory === 'plot' ||
        property?.propertySubCategory === 'shop' ||
        property?.propertySubCategory === 'file' ? (
          <Group
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Text
              style={{
                color: '#D92228',
                fontSize: 16,
                textTransform: 'uppercase',
              }}
              size="md"
              weight={500}
            >
              {property?.propertySubCategory}
            </Text>
            <Text>
              {property?.areaSize} {property?.areaSizeUnit}
            </Text>
          </Group>
        ) : (
          <>
            <Text
              style={{
                color: '#D92228',
                fontSize: 16,
                textTransform: 'uppercase',
              }}
              size="md"
              weight={500}
            >
              {property?.propertySubCategory}
            </Text>
            <Text
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: 5,
                textDecoration: 'none',
              }}
            >
              {property?.areaSize} {property?.areaSizeUnit}
              <IconAspectRatio opacity={0.6} />
            </Text>
            <Text
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: 5,
              }}
            >
              {property?.noOfBedRooms}
              <IconBed opacity={0.6} />
            </Text>
            <Text
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: 5,
              }}
            >
              {property?.noOfBathrooms}
              <IconBath opacity={0.6} />
            </Text>
          </>
        )}
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

      {/* <Button variant="light" color="red" fullWidth mt="md" radius="md">
        View
      </Button> */}
    </Card>
  )
}
