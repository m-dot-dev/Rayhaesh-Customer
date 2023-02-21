import { Group, Stack, Text, createStyles } from '@mantine/core'
import React from 'react'
import LocationMap from '../Generic/LocationMap'

const LocationDetails = ({ property }) => {
  const useStyles = createStyles((theme) => ({
    titleText: {
      fontSize: 22,
      fontWeight: 600,
    },
    cityText: {
      fontSize: 18,
      fontWeight: 400,
      opacity: 0.7,
      display: 'flex',
      flexDirection: 'row',
      marginRight: 25,
      gap: 5,
    },
    aboutText: {
      fontSize: 16,
      fontWeight: 500,
      color: '#D92228',
      textTransform: 'uppercase',
    },
    bookingText: {
      fontSize: 20,
      fontWeight: 700,
      textAlign: 'center',
    },
  }))
  const { classes } = useStyles()
  return (
    <>
      <Stack spacing={0}>
        {property?.propertyCity && (
          <Group>
            <Text className={classes.aboutText}>City:</Text>
            <Text>{property?.propertyCity}</Text>
          </Group>
        )}
        {property?.streetNumber && (
          <Group>
            <Text className={classes.aboutText}>Street Number: </Text>
            <Text>{property?.streetNumber}</Text>
          </Group>
        )}
        {property?.houseNumber && (
          <Group>
            <Text className={classes.aboutText}>House Number: </Text>
            <Text>{property?.houseNumber}</Text>
          </Group>
        )}
        {property?.ZIPCode && (
          <Group>
            <Text className={classes.aboutText}>Zip Code: </Text>
            <Text>{property?.ZIPCode}</Text>
          </Group>
        )}
        {property?.propertyLocation && (
          <LocationMap
            lat={property?.propertyLocation?.coordinates[0] || 0}
            lng={property?.propertyLocation?.coordinates[1] || 1}
          />
        )}
      </Stack>
    </>
  )
}

export default LocationDetails
