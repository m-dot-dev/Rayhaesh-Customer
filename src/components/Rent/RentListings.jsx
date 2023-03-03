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
import { Link, useLocation } from 'react-router-dom'
import ListingPagination from '../Generic/ListingPagination'
import { useMediaQuery } from '@mantine/hooks'
import { IconSearch } from '@tabler/icons'
import { filtering } from '../Buy/BuyFilter'

const RentListings = () => {
  const [opened, setOpened] = useState(false)
  const match1200 = useMediaQuery('(max-width: 1280px)')

  //Filter hooks here
  //City Hooks
  const [city, setCity] = React.useState([])
  const [filteredData, setFilteredData] = React.useState([])

  //Category Hooks
  const [categoryValue, setCategoryValue] = useState([])

  //SubCategory Hooks
  const [subCategoryValue, setSubCategoryValue] = useState([])

  //Area Hooks
  const [areaValue, setAreaValue] = useState([])

  //Price Hooks
  const [priceValue, setPriceValue] = useState([])

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

  const location = useLocation()

  useEffect(() => {
    let city = location?.state?.city
      ? Array.isArray(location?.state?.city)
        ? location?.state?.city
        : [location?.state?.city]
      : []
    let SubCategory = location?.state?.SubCategory
      ? Array.isArray(location?.state?.SubCategory)
        ? location?.state?.SubCategory
        : [location?.state?.SubCategory]
      : []
    let Price = location?.state?.price
      ? Array.isArray(location?.state?.price)
        ? location?.state?.price
        : [location?.state?.price]
      : []

    setCity(city)
    setSubCategoryValue(SubCategory)
    setPriceValue(Price)
  }, [location])

  useEffect(() => {
    setFilteredData(
      filtering(
        city,
        categoryValue,
        subCategoryValue,
        areaValue,
        priceValue,
        allproperties,
      ),
    )
  }, [
    city,
    categoryValue,
    areaValue,
    priceValue,
    subCategoryValue,
    allproperties,
  ])

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
        setFilteredData(
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
      <Container size="xl">
        <Grid py="md">
          <Grid.Col md={3} hidden={match1200 ? true : false}>
            <Filter
              city={city}
              setCity={setCity}
              categoryValue={categoryValue}
              setCategoryValue={setCategoryValue}
              subCategoryValue={subCategoryValue}
              setSubCategoryValue={setSubCategoryValue}
              areaValue={areaValue}
              setAreaValue={setAreaValue}
              priceValue={priceValue}
              setPriceValue={setPriceValue}
            />
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
                  <Text>Results</Text>
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
                <Text>No Results Found for Rentable Properties</Text>
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
        <Filter
          city={city}
          setCity={setCity}
          categoryValue={categoryValue}
          setCategoryValue={setCategoryValue}
          subCategoryValue={subCategoryValue}
          setSubCategoryValue={setSubCategoryValue}
          areaValue={areaValue}
          setAreaValue={setAreaValue}
          priceValue={priceValue}
          setPriceValue={setPriceValue}
        />
      </Modal>
    </>
  )
}

export default RentListings
