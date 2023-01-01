import { Carousel } from '@mantine/carousel'
import { IconArrowRight, IconArrowLeft } from '@tabler/icons'
import { Image } from '@mantine/core'

export default function PropertyCarousel({ property }) {
  const slides = property?.images?.map((image) => (
    <Carousel.Slide>
      <Image src={image} alt="image" />
    </Carousel.Slide>
  ))
  return (
    <>
      {property.length !== 0 && (
        <Carousel
          controlsOffset={5}
          slidesToScroll={property?.length}
          nextControlIcon={
            <IconArrowRight size={18} style={{ color: '#fff' }} />
          }
          previousControlIcon={
            <IconArrowLeft size={18} style={{ color: '#fff' }} />
          }
          styles={{
            control: {
              border: '1px solid red',
              width: '30px',
              height: '30px',
              backgroundColor: '#D92228',
              opacity: 100,
            },
          }}
          withIndicators
          sx={{ maxWidth: 800 }}
          mx="auto"
        >
          {slides}
        </Carousel>
      )}
    </>
  )
}
