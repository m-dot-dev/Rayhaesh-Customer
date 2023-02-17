import { Carousel } from '@mantine/carousel'
import { Skeleton } from '@mantine/core'

const VideosCarousel = ({ property }) => {
  let propertyVideos = property?.videos || []
  return (
    <Carousel
      styles={{
        viewport: {
          borderRadius: '10px',
        },
        control: {
          '&[data-inactive]': {
            opacity: 0,
            cursor: 'default',
          },
        },
      }}
      // withIndicators

      height="501px"
      slideSize="100%"
      slideGap={2}
      // loop
      align="start"
      control
    >
      {console.log('venueVideos', propertyVideos)}
      {propertyVideos?.length !== 0 ? (
        propertyVideos.map((v, index) => (
          <Carousel.Slide key={index}>
            <video
              style={{ objectFit: 'cover' }}
              height="500px"
              width={'100%'}
              src={v}
              controls
            ></video>
          </Carousel.Slide>
        ))
      ) : (
        <Skeleton height="500px" width="100%" />
      )}
    </Carousel>
  )
}

export default VideosCarousel
