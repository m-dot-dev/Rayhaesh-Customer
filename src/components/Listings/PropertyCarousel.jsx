import { Carousel } from '@mantine/carousel'
import { IconArrowRight, IconArrowLeft } from '@tabler/icons'
import { Image, createStyles } from '@mantine/core'

export default function PropertyCarousel({ property }) {
  const useStyles = createStyles((theme) => ({
    imageContainer: {
      width: 500,
      paddingRight: 20,
    },
  }))
  const classes = useStyles()
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
          //   style={{ maxWidth: 800 }}
          sx={{
            maxWidth: 800,
            '@media (max-width: 940px)': {
              maxWidth: 600,
            },
            '@media (max-width: 700px)': {
              maxWidth: 400,
            },
            '@media (max-width: 500px)': {
              maxWidth: 300,
            },
            '@media (max-width: 380px)': {
              maxWidth: 250,
            },
          }}
          mx="auto"
          className={classes.imageContainer}
        >
          {slides}
        </Carousel>
      )}
    </>
  )
}
