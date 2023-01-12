import { Carousel } from '@mantine/carousel'
import { IconArrowRight, IconArrowLeft } from '@tabler/icons'
import { Image, Text, createStyles } from '@mantine/core'

export default function PropertyCarousel({ property, type }) {
  const useStyles = createStyles((theme) => ({
    imageContainer: {
      // width: 500,
      paddingRight: 20,
    },
  }))
  const classes = useStyles()
  const imagesSlides = property?.images?.map(
    (image) =>
      property.length !== 0 && (
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
          sx={{
            maxWidth: 900,
            '@media (max-width: 1030px)': {
              maxWidth: 700,
            },
            '@media (max-width: 850px)': {
              maxWidth: 600,
            },
            '@media (max-width: 736px)': {
              maxWidth: 500,
            },
            '@media (max-width: 650px)': {
              maxWidth: 450,
            },
            '@media (max-width: 500px)': {
              maxWidth: 300,
            },
          }}
          mx="auto"
          className={classes.imageContainer}
        >
          <Carousel.Slide>
            <Image src={image} alt="image" />
          </Carousel.Slide>
        </Carousel>
      ),
  )

  const videoSlides = property?.videos?.map(
    (video) =>
      property.length !== 0 && (
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
          <Carousel.Slide>
            <video src={video} alt="image" />
          </Carousel.Slide>
        </Carousel>
      ),
  )

  return (
    <>{type === 'image' ? imagesSlides : type === 'video' && videoSlides}</>
  )
}
