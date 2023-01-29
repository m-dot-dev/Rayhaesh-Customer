import React, { useEffect, useState } from 'react'
import {
  Button,
  Container,
  Grid,
  Group,
  Input,
  Modal,
  SimpleGrid,
  Text,
} from '@mantine/core'
import BuyCards from '../Buy/BuyCards'
import axios from 'axios'
import Filter from '../Filters/Filter'
import SixCardSkeleton from '../Skeletons/SixCardSkeleton'
import { Link } from 'react-router-dom'
import ListingPagination from '../Generic/ListingPagination'
import { useMediaQuery } from '@mantine/hooks'
import { IconSearch } from '@tabler/icons'

const ExchangeListings = () => {
  const [opened, setOpened] = useState(false)
  const match1200 = useMediaQuery('(max-width: 1280px)')

  const [allproperties, setAllProperties] = useState([])
  const [error, setError] = useState('')
  const [loading, setIsLoaded] = useState(true)

  const [query, setQuery] = useState('')

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
      <Container size="xl">
        <Grid py="md">
          <Grid.Col md={3} hidden={match1200 ? true : false}>
            <Filter />
          </Grid.Col>

          <Grid.Col md={!match1200 ? 9 : 12}>
            <Group
              style={{
                justifyContent: 'space-between',
              }}
              mb="lg"
            >
              <Group
                noWrap
                style={{
                  width: '100%',
                }}
                position="apart"
              >
                <Group noWrap spacing={3}>
                  <Text
                    style={{
                      fontWeight: 600,
                    }}
                  >
                    {
                      currentPosts.filter((property) => {
                        if (query === '') {
                          return property
                        } else if (
                          property.propertyCity
                            .toLowerCase()
                            .includes(query.toLowerCase())
                        ) {
                          return property
                        }
                        return null
                      }).length
                    }{' '}
                  </Text>
                  <Text>Results for Exchangeable Properties</Text>
                </Group>

                {match1200 ? (
                  <Input
                    placeholder="Search"
                    icon={<IconSearch />}
                    style={{ width: '100%' }}
                    onChange={(e) => setQuery(e.target.value)}
                  />
                ) : (
                  <Input
                    placeholder="Search"
                    icon={<IconSearch />}
                    onChange={(e) => setQuery(e.target.value)}
                  />
                )}
                {match1200 && (
                  <Button
                    onClick={() => {
                      setOpened(true)
                    }}
                    style={{
                      backgroundColor: '#D92228',
                      color: 'white',
                    }}
                  >
                    Filters
                  </Button>
                )}
              </Group>
            </Group>
            {loading ? (
              <SixCardSkeleton />
            ) : allproperties.length === 0 ? (
              <Group position="center" mt={'md'}>
                <Text>No Results Found for Exchange-able Properties</Text>
              </Group>
            ) : (
              <SimpleGrid
                cols={3}
                breakpoints={[
                  { maxWidth: 1040, cols: 2, spacing: 'md' },
                  { maxWidth: 680, cols: 1, spacing: 'sm' },
                ]}
              >
                {currentPosts
                  .filter((property) => {
                    if (query === '') {
                      return property
                    } else if (
                      property?.propertyCity
                        ?.toLowerCase()
                        .includes(query.toLowerCase())
                    ) {
                      return property
                    }
                  })
                  ?.map((property) => {
                    return (
                      <Link
                        to={`/property/${property?._id}`}
                        state={{ data: property }}
                        style={{ textDecoration: 'none' }}
                      >
                        <BuyCards property={property} key={property._id} />
                      </Link>
                    )
                  })}
              </SimpleGrid>
            )}
            <Group position="center" mt={'lg'}>
              <ListingPagination
                postsPerPage={postsPerPage}
                totalPosts={allproperties.length}
                paginate={paginate}
              />
            </Group>
          </Grid.Col>
        </Grid>
      </Container>
      <Modal opened={opened} onClose={() => setOpened(false)}>
        <Filter />
      </Modal>
    </>
  )
}

export default ExchangeListings
