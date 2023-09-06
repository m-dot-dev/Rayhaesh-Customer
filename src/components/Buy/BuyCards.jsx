import { Card, Image, Text, Badge, Group } from "@mantine/core";
import { IconAspectRatio, IconBath, IconBed } from "@tabler/icons";

export default function BuyCards({ property }) {
  return (
    <Card
      shadow="sm"
      p="md"
      radius="md"
      withBorder
      style={{
        borderColor: "#D92228",
      }}
      sx={{
        maxHeight: "400px",
        ":hover": {
          boxShadow: "0 5px 12px #0003",
        },
      }}
    >
      <Card.Section>
        <Image src={property?.images[0]} height={180} alt="image" />
      </Card.Section>

      <Group position="apart" mt="md" mb="md">
        <Text weight={700} size="lg">
          {property?.propertyCity}
        </Text>
        <Badge
          color="pink"
          variant="light"
          sx={{
            "@media (max-width: 1300px)": {
              fontSize: 10,
            },
          }}
        >
          {property?.propertyIs}
        </Badge>
      </Group>

      <Group
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
        mb="md"
      >
        {property?.propertySubCategory === "plot" ||
        property?.propertySubCategory === "shop" ||
        property?.propertySubCategory === "file" ? (
          <Group noWrap>
            <Text
              style={{
                color: "#D92228",
                fontSize: 16,
                textTransform: "uppercase",
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
          <Group position="apart" noWrap>
            <Text
              style={{
                color: "#D92228",
                fontSize: 16,
                textTransform: "uppercase",
              }}
              size="md"
              weight={500}
            >
              {property?.propertySubCategory}
            </Text>
            <Group
              style={{
                textDecoration: "none",
              }}
              spacing={0}
              noWrap
            >
              <Group noWrap position="apart" spacing={1}>
                <Text>{property?.areaSize}</Text>
                <Text>{property?.areaSizeUnit}</Text>
                <IconAspectRatio opacity={0.6} />
              </Group>
            </Group>
            <Group spacing={0} noWrap>
              <Text>{property?.noOfBedRooms}</Text>
              <IconBed opacity={0.6} />
            </Group>
            <Group spacing={0} noWrap>
              <Text>{property?.noOfBathrooms}</Text>
              <IconBath opacity={0.6} />
            </Group>
          </Group>
        )}
      </Group>

      <Text
        size="md"
        style={{
          color: "#D92228",
          marginTop: 5,
          fontSize: 20,
        }}
        weight={500}
        mt={"md"}
      >
        Rs. {property?.totalPrice ?? property?.monthlyRent}
      </Text>
    </Card>
  );
}
