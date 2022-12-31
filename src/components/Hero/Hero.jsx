import React from 'react'
import SearchSection from './SearchSection'
import ListingCarousel from '../Carousel/ListingCarousel'
import { Box, Text, createStyles } from '@mantine/core'
import AgenciesCarousel from '../Carousel/AgenciesCarousel'

const Hero = () => {
  const useStyles = createStyles((theme) => ({
    listingText: {
      fontSize: 30,
      fontWeight: 600,
      marginBottom: 10,
    },
  }))

  const { classes } = useStyles()

  return (
    <>
      <SearchSection />
      <Box style={{ marginTop: 50 }}>
        <Box style={{ padding: 20 }}>
          <Text className={classes.listingText}>Premiere House Listings</Text>
          <ListingCarousel />
        </Box>
        <Box style={{ padding: 20 }}>
          <Text className={classes.listingText}>Hot Flat Listings</Text>
          <ListingCarousel />
        </Box>
        <Box style={{ padding: 20 }}>
          <Text className={classes.listingText}>Latest Plot Listings</Text>
          <ListingCarousel />
        </Box>
        <Box style={{ padding: 20 }}>
          <Text className={classes.listingText}>
            Featured Commercial Listings
          </Text>
          <ListingCarousel />
        </Box>
        <Box style={{ paddingRight: 20, paddingLeft: 20 }}>
          <Text className={classes.listingText}>
            Featured Agencies Listings
          </Text>
          <AgenciesCarousel />
        </Box>
      </Box>
    </>
  )
}

export default Hero
