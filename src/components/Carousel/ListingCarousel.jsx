import { Carousel } from '@mantine/carousel'
import ListingCard from '../Cards/ListingCard'
import { IconArrowRight, IconArrowLeft } from '@tabler/icons'

export default function ListingCarousel() {
  return (
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
      nextControlIcon={<IconArrowRight size={18} style={{ color: '#fff' }} />}
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
      <Carousel.Slide
        sx={{
          '&:hover': {
            cursor: 'pointer',
          },
        }}
      >
        <ListingCard />
      </Carousel.Slide>
      <Carousel.Slide>
        <ListingCard />
      </Carousel.Slide>
      <Carousel.Slide>
        <ListingCard />
      </Carousel.Slide>
      <Carousel.Slide>
        <ListingCard />
      </Carousel.Slide>
      <Carousel.Slide>
        <ListingCard />
      </Carousel.Slide>
    </Carousel>
  )
}
