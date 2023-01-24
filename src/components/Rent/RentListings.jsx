import React, { useEffect, useState } from 'react'
import {
  Button,
  Grid,
  Group,
  Paper,
  Skeleton,
  Text,
  createStyles,
} from '@mantine/core'
import BuyCards from '../Buy/BuyCards'
import axios from 'axios'
import Filter from '../Filters/Filter'
import SixCardSkeleton from '../Skeletons/SixCardSkeleton'
import { Link } from 'react-router-dom'
import { Pagination } from '@mantine/core'
import ListingPagination from '../Generic/ListingPagination'

const RentListings = () => {
  const useStyles = createStyles((theme) => ({
    filter: {},
  }))

  const [allproperties, setAllProperties] = useState([])
  const [error, setError] = useState('')
  const [loading, setIsLoaded] = useState(true)

  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(9)

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = allproperties.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  useEffect(() => {
    axios
      .get(
        import.meta.env.VITE_REACT_APP_BACKEND_URL + '/user/getAllProperties',
      )
      .then((data) => {
        setIsLoaded(false)
        setAllProperties(
          data.data.body.filter(
            (property) => property?.propertyIs === 'For Rent',
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
      {allproperties.length === 0 ? (
        <Group position="center" mt={'lg'}>
          <Text>No Properties to Display</Text>
        </Group>
      ) : (
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
              {allproperties.length === 0 && (
                <Grid.Col>
                  <Group position="center" mt={'lg'}>
                    <Text>No Properties to Display</Text>
                  </Group>
                </Grid.Col>
              )}
              {currentPosts.map((property) => {
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
              <ListingPagination
                postsPerPage={postsPerPage}
                totalPosts={allproperties.length}
                paginate={paginate}
              />
            </Group>
          </Grid.Col>
        </Grid>
      )}
    </>
  )
}

export default RentListings
