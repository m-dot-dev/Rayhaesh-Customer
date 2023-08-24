import { useState } from "react";
import {
  Modal,
  Button,
  Group,
  Stack,
  Text,
  Grid,
  SimpleGrid,
} from "@mantine/core";

export default function ViewBooking({ opened, setOpened, data }) {
  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        transition={"slide-down"}
        transitionDuration={300}
        title="Booking Details"
        styles={{
          title: {
            fontWeight: 600,
            fontSize: 24,
          },
          close: {
            backgroundColor: "#D92228",
            color: "white",
            "&:hover": {
              backgroundColor: "#D92228",
              color: "white",
            },
          },
        }}
        centered
        overlayOpacity={0.55}
        overlayBlur={3}
        size={"lg"}
      >
        <Group mt={"lg"} spacing={"xl"} position="apart" noWrap>
          <SimpleGrid cols={2}>
            <Text weight={500}>Property Title:</Text>
            <Text>{data?.propertyId?.propertyTitle}</Text>
            <Text weight={500}>Booking Type:</Text>
            <Text>{data?.bookingType}</Text>
            <Text weight={500}>Payment Method:</Text>
            <Text>{data?.paymentMethod}</Text>
            <Text weight={500}>Amount:</Text>
            <Text>Rs. {data?.paymentAmount}</Text>
            <Text weight={500}>Booking Date:</Text>
            <Text>
              {new Date(data.createdAt).toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </Text>
          </SimpleGrid>
        </Group>
      </Modal>
    </>
  );
}
