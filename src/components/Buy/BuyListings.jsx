import React from 'react'
import { Container, Grid, Paper, createStyles } from '@mantine/core'
import ListingCard from '../Cards/ListingCard'

const BuyListings = () => {
  const useStyles = createStyles((theme) => ({
    filter: {},
  }))
  const { classes, theme } = useStyles()

  return (
    <Paper>
      <Grid px={'sm'} py="sm">
        <Grid.Col md={3} bg="gray">
          Filters Here
        </Grid.Col>
        <Grid.Col md={9} bg="lime">
          <Grid>
            <Grid.Col lg={4} md={6} xs={6} bg="red">
              <ListingCard />
            </Grid.Col>
            <Grid.Col lg={4} md={6} xs={6} bg="red">
              <ListingCard />
            </Grid.Col>
            <Grid.Col lg={4} md={6} xs={6} bg="red">
              <ListingCard />
            </Grid.Col>
            <Grid.Col lg={4} md={6} xs={6} bg="red">
              <ListingCard />
            </Grid.Col>
            <Grid.Col lg={4} md={6} xs={6} bg="red">
              <ListingCard />
            </Grid.Col>
            <Grid.Col lg={4} md={6} xs={6} bg="red">
              <ListingCard />
            </Grid.Col>
            <Grid.Col lg={4} md={6} xs={6} bg="red">
              <ListingCard />
            </Grid.Col>
            <Grid.Col lg={4} md={6} xs={6} bg="red">
              <ListingCard />
            </Grid.Col>
            <Grid.Col lg={4} md={6} xs={6} bg="red">
              <ListingCard />
            </Grid.Col>
          </Grid>
        </Grid.Col>
      </Grid>
    </Paper>
  )
}

export default BuyListings
