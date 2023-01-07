import React, { useEffect, useState } from 'react'
import { Button, Grid, Paper, Skeleton, createStyles } from '@mantine/core'
import BuyCards from './BuyCards'
import axios from 'axios'
import Filter from '../Filters/Filter'

const BuyListings = () => {
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
        setAllProperties(data.data.body)
      })
      .catch((error) => {
        setIsLoaded(false)
        setError(error)
      })
  }, [])

  if (loading) {
    return <Skeleton style={{ width: '100%', height: '200px' }} />
  }
  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <Paper>
      <Grid px={'sm'} py="sm">
        <Grid.Col md={3}>
          <Filter />
        </Grid.Col>
        <Grid.Col md={9}>
          <Grid>
            {allproperties.map((property) => {
              return (
                <Grid.Col lg={4} md={6} xs={6}>
                  <BuyCards property={property} />
                </Grid.Col>
              )
            })}
          </Grid>
        </Grid.Col>
      </Grid>
    </Paper>
  )
}

export default BuyListings
