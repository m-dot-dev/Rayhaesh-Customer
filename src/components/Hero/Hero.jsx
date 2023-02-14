import React, { useEffect, useState } from 'react'
import SearchSection from './SearchSection'
import ListingCarousel from '../Carousel/ListingCarousel'
import { Box, Container, Text, createStyles } from '@mantine/core'
import AgenciesCarousel from '../Carousel/AgenciesCarousel'
import axios from 'axios'

const Hero = ({ setSearchFilters }) => {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(true)
  const [house, setHouse] = useState([])
  const [flat, setFlat] = useState([])
  const [plot, setPlot] = useState([])
  const [file, setFile] = useState([])

  useEffect(() => {
    axios
      .get(
        import.meta.env.VITE_REACT_APP_BACKEND_URL + '/user/getAllProperties',
      )
      .then((data) => {
        setIsLoaded(false)
        setHouse(
          data.data.body.filter(
            (property) => property.propertySubCategory === 'farmhouse',
          ),
        )
        setFlat(
          data.data.body.filter(
            (property) => property.propertySubCategory === 'flat',
          ),
        )
        setPlot(
          data.data.body.filter(
            (property) => property.propertySubCategory === 'plot',
          ),
        )
        setFile(
          data.data.body.filter(
            (property) => property.propertySubCategory === 'file',
          ),
        )
      })
      .catch((error) => {
        setIsLoaded(false)
        setError(error)
      })
  }, [])

  const useStyles = createStyles(() => ({
    listingText: {
      fontSize: 30,
      fontWeight: 600,
      marginBottom: 10,
    },
  }))

  const { classes } = useStyles()

  return (
    <>
      <SearchSection setSearchFilters={setSearchFilters} />
      <Container size={'xl'} mt={'xl'}>
        <Box style={{ padding: 20 }}>
          <Text className={classes.listingText}>Premiere House Listings</Text>
          <ListingCarousel listings={house} loading={isLoaded} error={error} />
        </Box>
        <Box style={{ padding: 20 }}>
          <Text className={classes.listingText}>Hot Flat Listings</Text>
          <ListingCarousel listings={flat} loading={isLoaded} error={error} />
        </Box>
        <Box style={{ padding: 20 }}>
          <Text className={classes.listingText}>Latest Plot Listings</Text>
          <ListingCarousel listings={plot} loading={isLoaded} error={error} />
        </Box>
        <Box style={{ padding: 20 }}>
          <Text className={classes.listingText}>Featured Files</Text>
          <ListingCarousel listings={file} loading={isLoaded} error={error} />
        </Box>
        <Box style={{ paddingRight: 20, paddingLeft: 20 }}>
          <Text className={classes.listingText}>
            Featured Agencies Listings
          </Text>
          <AgenciesCarousel />
        </Box>
      </Container>
    </>
  )
}

export default Hero
