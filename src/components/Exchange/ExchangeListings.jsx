import React, { useEffect, useState } from 'react'
import {
  Button,
  Grid,
  Group,
  Paper,
  Skeleton,
  createStyles,
} from '@mantine/core'
import BuyCards from '../Buy/BuyCards'
import axios from 'axios'
import Filter from '../Filters/Filter'
import SixCardSkeleton from '../Skeletons/SixCardSkeleton'
import { Link } from 'react-router-dom'
import { Pagination } from '@mantine/core'

const ExchangeListings = () => {
  const useStyles = createStyles((theme) => ({
    filter: {},
  }))
  const { classes, theme } = useStyles()

  const [allproperties, setAllProperties] = useState([])
  const [error, setError] = useState('')
  const [loading, setIsLoaded] = useState(true)

  useEffect(() => {
    axios
      .get(
        import.meta.env.VITE_REACT_APP_BACKEND_URL + '/user/getAllProperties',
      )
      .then((data) => {
        setIsLoaded(false)
        setAllProperties(
          data.data.body.filter(
            (property) => property?.propertyIs === 'For Exchange',
          ),
        )
      })
      .catch((error) => {
        setIsLoaded(false)
        setError(error)
      })
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <>
      <Paper>
        <Grid px={'sm'} py="sm">
          <Grid.Col md={3}>
            <Filter />
          </Grid.Col>
          <Grid.Col md={9}>
            <Grid>
              {loading && (
                <Grid.Col>
                  <SixCardSkeleton />
                </Grid.Col>
              )}
              {allproperties.map((property) => {
                return (
                  <Grid.Col lg={4} md={6} xs={6}>
                    <Link
                      to={`/property/${property?._id}`}
                      state={{ data: property }}
                      style={{ textDecoration: 'none' }}
                    >
                      <BuyCards property={property} />
                    </Link>
                  </Grid.Col>
                )
              })}
            </Grid>
            <Group position="center" mt={'lg'}>
              <Pagination
                total={3}
                withEdges
                styles={() => ({
                  item: {
                    '&[data-active]': {
                      backgroundColor: '#D92228',
                    },
                  },
                })}
              />
            </Group>
          </Grid.Col>
        </Grid>
      </Paper>
    </>
  )
}

export default ExchangeListings
