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
        <Group
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Text className={classes.titleText}>
            {property?.propertyTitle || 'Property Title Here'}
          </Text>
          <Text className={classes.cityText}>
            <IconMap2 />
            {property?.propertyCity || 'Property City Here'}
          </Text>
        </Group>
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
            <Text></Text>
          </Tabs.Panel>

          <Tabs.Panel value="location" pt="xs">
            Map Here
          </Tabs.Panel>
        </Tabs>
      </Group>
    </>
  )
}

export default PropertyPage
