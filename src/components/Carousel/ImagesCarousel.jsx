import { Carousel } from '@mantine/carousel'
import { Image, Skeleton } from '@mantine/core'

const ImagesCarousel = ({ property }) => {
  let propertyImages = property?.images
  return (
    <Carousel
      styles={{
        viewport: {
          borderRadius: '5px',
        },
        control: {
          '&[data-inactive]': {
            opacity: 0,
            cursor: 'default',
          },
        },
      }}
      withIndicators
      height="501px"
      slideSize="100%"
      slideGap={2}
      // loop
      align="start"
      // control
    >
      {propertyImages?.length !== 0 && propertyImages !== undefined ? (
        propertyImages.map((image, index) => (
          <Carousel.Slide key={index}>
            <Image height="500px" width={'100%'} src={image} />
          </Carousel.Slide>
        ))
      ) : (
        <Skeleton height="500px" width="100%" />
      )}
    </Carousel>
  )
}

export default ImagesCarousel
