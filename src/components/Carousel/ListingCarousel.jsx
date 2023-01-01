import { Carousel } from '@mantine/carousel'
import ListingCard from '../Cards/ListingCard'
import { IconArrowRight, IconArrowLeft } from '@tabler/icons'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Skeleton } from '@mantine/core'
import { Link } from 'react-router-dom'

export default function ListingCarousel() {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [allProperties, setAllProperties] = useState([])

  useEffect(() => {
    axios
      .get(
        import.meta.env.VITE_REACT_APP_BACKEND_URL + '/user/getAllProperties',
      )
      .then((data) => {
        setIsLoaded(true)
        setAllProperties(data.data.body)
      })
      .catch((error) => {
        setIsLoaded(true)
        setError(error)
      })
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>
  } else if (!isLoaded) {
    return (
      <>
        <Skeleton height={'150px'} />
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </>
    )
  } else {
    return (
      <>
        {allProperties.length !== 0 && (
          <Carousel
            slideSize="25%"
            slideGap="md"
            breakpoints={[
              { maxWidth: 'md', slideSize: '50%' },
              { maxWidth: 'sm', slideSize: '100%', slideGap: 0 },
            ]}
            loop
            align="center"
            controlsOffset={0}
            slidesToScroll={3}
            nextControlIcon={
              <IconArrowRight size={18} style={{ color: '#fff' }} />
            }
            previousControlIcon={
              <IconArrowLeft size={18} style={{ color: '#fff' }} />
            }
            styles={{
              control: {
                border: '1px solid red',
                width: '40px',
                height: '40px',
                backgroundColor: '#D92228',
                opacity: 100,
              },
            }}
            sx={{
              maxHeight: '400px',
            }}
          >
            {allProperties.map((property) => (
              <Carousel.Slide
                sx={{
                  '&:hover': {
                    cursor: 'pointer',
                  },
                }}
              >
                <Link
                  to={`/property/${property?._id}`}
                  state={{ data: property }}
                  style={{ textDecoration: 'none' }}
                >
                  <ListingCard property={property} />
                </Link>
              </Carousel.Slide>
            ))}
          </Carousel>
        )}
      </>
    )
  }
}
