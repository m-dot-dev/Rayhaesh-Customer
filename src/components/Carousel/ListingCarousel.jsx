import { Carousel } from '@mantine/carousel'
import ListingCard from '../Cards/ListingCard'
import { IconArrowRight, IconArrowLeft } from '@tabler/icons'
import axios from 'axios'
import { Group, Paper } from '@mantine/core'
import { Link } from 'react-router-dom'
import CardSkeleton from '../Skeletons/CardSkeleton'

export default function ListingCarousel({ listings, loading, error }) {
  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <>
      {loading && (
        <Group position="center">
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </Group>
      )}
      {listings.length !== 0 && (
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
          {listings.map((property) => (
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
