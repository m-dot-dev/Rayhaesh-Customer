import { Group, Stack, Text, createStyles } from "@mantine/core";
import React from "react";

const AgencyDetails = ({ property }) => {
  const useStyles = createStyles((theme) => ({
    aboutText: {
      fontSize: 16,
      fontWeight: 500,
      color: "#D92228",
      textTransform: "uppercase",
    },
  }));
  const { classes } = useStyles();

  // console.log("====================================");
  // console.log("Agency Category Details", property?.agency);
  // console.log("====================================");

  return (
    <Stack spacing={0}>
      {/* <Group>
        <Text className={classes.aboutText}>Agency Category: </Text>
        <Text>{property?.agency?.agencyCategory}</Text>
      </Group> */}
      <Group>
        <Text className={classes.aboutText}>Agency Title: </Text>
        <Text>{property?.agency?.agencyTitle}</Text>
      </Group>
      <Group>
        <Text className={classes.aboutText}>Agency Description: </Text>
        <Text>{property?.agency?.agencyDescription}</Text>
      </Group>
      <Group>
        <Text className={classes.aboutText}>Agency Info: </Text>
        <Text>{property?.agency?.agencyInfoEmail}</Text>
      </Group>
      <Group>
        <Text className={classes.aboutText}>Agency Email: </Text>
        <Text>{property?.agency?.agencyInfoEmail}</Text>
      </Group>
      <Group>
        <Text className={classes.aboutText}>Agency Feedback Email: </Text>
        <Text>{property?.agency?.agencyFeedbackEmail}</Text>
      </Group>
      {property?.agency?.agencyLandline && (
        <Group>
          <Text className={classes.aboutText}>Agency Landline: </Text>
          <Text>{property?.agency?.agencyLandline}</Text>
        </Group>
      )}
      <Group>
        <Text className={classes.aboutText}>Agency Phone: </Text>
        <Text>{property?.agency?.agencyPhone}</Text>
      </Group>
      <Group>
        <Text className={classes.aboutText}>Agency WhatsApp: </Text>
        <Text>{property?.agency?.agencyWhatsapp}</Text>
      </Group>
      {property?.agency?.agencyWebsite && (
        <Group>
          <Text className={classes.aboutText}>Agency Website: </Text>
          <Text>{property?.agency?.agencyWebsite}</Text>
        </Group>
      )}
      {property?.agency?.agencyFacebook && (
        <Group>
          <Text className={classes.aboutText}>Agency Facebook: </Text>
          <Text>{property?.agency?.agencyFacebook}</Text>
        </Group>
      )}
      {property?.agency?.agencyInstagram && (
        <Group>
          <Text className={classes.aboutText}>Agency Instagram: </Text>
          <Text>{property?.agency?.agencyInstagram}</Text>
        </Group>
      )}
      <Group>
        <Text className={classes.aboutText}>Agency Point of Contact: </Text>
        <Text>{property?.agency?.agencyPointOfContact?.name}</Text>
      </Group>
      <Group>
        <Text className={classes.aboutText}>Agency Address: </Text>
        <Text>{property?.agency?.agencyAddress}</Text>
      </Group>
      {/* <Group>
        <Text className={classes.aboutText}>Agency Agents: </Text>
        <Text>{property?.agency?.agencyAgents}</Text>
      </Group> */}
      {/* Image and logo of the agency remainging */}
      {property?.agency?.subscription && (
        <Group>
          <Text className={classes.aboutText}>Agency Subscription: </Text>
          <Text>{property?.agency?.subscription}</Text>
        </Group>
      )}
    </Stack>
  );
};

export default AgencyDetails;
