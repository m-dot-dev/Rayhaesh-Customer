import { Group, Text, createStyles, Tabs, Stack } from '@mantine/core'
import {
  IconAdjustmentsHorizontal,
  IconMap,
  IconMap2,
  IconPhoto,
  IconVideo,
} from '@tabler/icons'
import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import PropertyCarousel from './PropertyCarousel'

const PropertyPage = () => {
  const useStyles = createStyles(() => ({
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
  }))
  const { classes } = useStyles()

  const location = useLocation()
  const [property, setProperty] = React.useState({})
  useEffect(() => {
    setProperty(location.state?.data)
  }, [location])
  return (
    <>
      <Group
        style={{
          marginTop: 30,
          marginLeft: 80,
        }}
      >
        {/* Title and Locations */}
        <Stack>
          <Text className={classes.titleText}>
            {property?.propertyTitle || 'Property Title Here'}
          </Text>
          <Text className={classes.cityText}>
            <IconMap2 />
            {property?.propertyCity || 'Property City Here'}
          </Text>
        </Stack>
      </Group>
      {/* Tabs */}
      <Group
        style={{
          marginTop: 30,
          marginLeft: 80,
          width: 'auto',
        }}
      >
        <Tabs color="red" variant="pills" defaultValue="photos">
          <Tabs.List>
            <Tabs.Tab value="photos" icon={<IconPhoto size={14} />}>
              Photos
            </Tabs.Tab>
            <Tabs.Tab value="videos" icon={<IconVideo size={14} />}>
              Videos
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="photos" pt="xs">
            <PropertyCarousel property={property} />
          </Tabs.Panel>

          <Tabs.Panel value="videos" pt="xs">
            <Text>No Videos Available</Text>
          </Tabs.Panel>
        </Tabs>
      </Group>

      {/* Details Section */}
      <Group
        style={{
          marginTop: 20,
          marginLeft: 80,
        }}
      >
        <Tabs color="red" variant="default" defaultValue="about">
          <Tabs.List>
            <Tabs.Tab value="about" icon={<IconPhoto size={14} />}>
              About
            </Tabs.Tab>
            <Tabs.Tab
              value="services"
              icon={<IconAdjustmentsHorizontal size={14} />}
            >
              Services
            </Tabs.Tab>
            <Tabs.Tab value="location" icon={<IconMap2 size={14} />}>
              Location
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="about" pt="xs">
            <Text>{property?.propertyDescription}</Text>
            <Group
              style={{
                display: 'flex',
                flexDirection: 'row',
              }}
              noWrap
            >
              <Text className={classes.aboutText}>Property Category:</Text>
              <Text>{property?.propertyCategory}</Text>
            </Group>
            <Group
              style={{
                display: 'flex',
                flexDirection: 'row',
                marginTop: 5,
              }}
              noWrap
            >
              <Text className={classes.aboutText}>Property Sub Category:</Text>
              <Text>{property?.propertySubCategory}</Text>
            </Group>
            <Group
              style={{
                display: 'flex',
                flexDirection: 'row',
                marginTop: 5,
              }}
              noWrap
            >
              <Text className={classes.aboutText}>Property is:</Text>
              <Text>{property?.propertyIs}</Text>
            </Group>
            <Group
              style={{
                display: 'flex',
                flexDirection: 'row',
                marginTop: 5,
              }}
            >
              {property?.propertyIs === 'For Exchange' ? (
                <Stack spacing={2}>
                  <Group noWrap>
                    <Text className={classes.aboutText}>
                      Exchange details:{' '}
                    </Text>
                    <Text>{property?.exchangeWith}</Text>
                  </Group>
                  <Group noWrap>
                    <Text className={classes.aboutText}>
                      Minimum Exchange Value:{' '}
                    </Text>
                    <Text>{property?.minimumExchangeValue}</Text>
                  </Group>
                </Stack>
              ) : (
                <Text></Text>
              )}
            </Group>
          </Tabs.Panel>

          <Tabs.Panel value="services" pt="xs">
            {property?.propertySubCategory !== 'plot' &&
              property?.propertySubCategory !== 'file' && (
                <Stack spacing={0}>
                  {property?.noOfBedRooms !== 0 && (
                    <Text>{property?.noOfBedRooms} Bedrooms</Text>
                  )}
                  {property?.noOfBathrooms !== 0 && (
                    <Text>{property?.noOfBathrooms} Bathrooms</Text>
                  )}
                  {property?.parkingSpace !== 0 && (
                    <Text>{property?.parkingSpace} Parking Space</Text>
                  )}
                  {property?.drawingRoom !== 0 && (
                    <Text>{property?.drawingRoom} Drawing Room</Text>
                  )}
                  {property?.servantQuarters !== 0 && (
                    <Stack spacing={0}>
                      <Text>{property?.servantQuarters} Servant Quarter</Text>
                      <Text>
                        Servant Quarter Description:{' '}
                        {property?.servantQuarterDetails}
                      </Text>
                    </Stack>
                  )}
                  {property?.diningRoom !== 0 && (
                    <Text>{property?.diningRoom} Dining Room</Text>
                  )}
                  {property?.kitchen !== 0 && (
                    <Text>{property?.kitchen} Kitchen</Text>
                  )}
                  {property?.floorType !== 0 && (
                    <Text>Floor Type: {property?.floorType}</Text>
                  )}
                  {property?.electricityBackup && (
                    <Text>Electricity Backup Available</Text>
                  )}
                  {property?.powderRoom !== 0 && (
                    <Text>{property?.powderRoom} Powder Room</Text>
                  )}
                  {property?.storeRoom !== 0 && (
                    <Text>{property?.storeRoom} Store Room</Text>
                  )}
                  {property?.wasteDisposal && (
                    <Text>Waste Disposal Available</Text>
                  )}
                  {property?.steamRoom !== 0 && (
                    <Text>{property?.steamRoom} Steam Room</Text>
                  )}
                  {property?.lounge !== 0 && (
                    <Text>{property?.lounge} Lounge</Text>
                  )}
                  {property?.sittingRoom !== 0 && (
                    <Text>{property?.sittingRoom} Sitting Room</Text>
                  )}
                  {property?.laundryRoom !== 0 && (
                    <Text>{property?.laundryRoom} Laundry Room</Text>
                  )}
                  {property?.hasDoubleGlazedWindows && (
                    <Text>Double Gazed Windows</Text>
                  )}
                  {property?.hasCentralAirConditioning && (
                    <Text>Central Air Conditioning</Text>
                  )}
                  {property?.hasCheckCentralHeating && (
                    <Text>Central Heating</Text>
                  )}
                  {property?.hasInternet && (
                    <Stack spacing={0}>
                      <Text>Internet Avilable</Text>
                      <Text>{property?.internetDescription}</Text>
                    </Stack>
                  )}
                  {property?.hasCableTv && (
                    <Stack spacing={0}>
                      <Text>TV Cable Available</Text>
                      <Text>{property?.cableDescription}</Text>
                    </Stack>
                  )}
                  {property?.hasSwimmingPool && (
                    <Text>Swimming Pool Available</Text>
                  )}
                  {property?.hasCommunityLawnandGarden && (
                    <Text>Community Lawn and Garden Available</Text>
                  )}
                  {property?.hasMedicalCenter && (
                    <Text>Medical Center Available</Text>
                  )}
                  {property?.hasDayCareCenter && (
                    <Text>Day Care Center Available</Text>
                  )}
                  {property?.hasKidsPlayArea && (
                    <Text>Kids Play Area Available</Text>
                  )}
                  {property?.hasBarBQueArea && (
                    <Text>Bar B Que Area Available</Text>
                  )}
                  {property?.nearbyFacilities && (
                    <Text>Nearby Facilities: {property?.nearbyFacilities}</Text>
                  )}
                  {property?.otherFacilities && (
                    <Text>Other Facilities: {property?.otherFacilities}</Text>
                  )}
                </Stack>
              )}
            {/* <Text>
              No Services available for this {property?.propertySubCategory} at
              the moment
            </Text> */}
          </Tabs.Panel>

          <Tabs.Panel value="location" pt="xs">
            <Text>Map Component Here</Text>
          </Tabs.Panel>
        </Tabs>
      </Group>
    </>
  )
}

export default PropertyPage
