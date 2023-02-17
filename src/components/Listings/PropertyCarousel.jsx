import { Carousel, useAnimationOffsetEffect } from '@mantine/carousel'
import { IconArrowRight, IconArrowLeft } from '@tabler/icons'
import { Image, Text, createStyles } from '@mantine/core'
import { useState } from 'react'

export default function PropertyCarousel({ property, type }) {
  console.log('====================================')
  console.log('propertyDocs', property?.documents)
  console.log('====================================')

  const [embla, setEmbla] = useState(null)

  const useStyles = createStyles((theme) => ({
    imageContainer: {
      paddingRight: 20,
      maxHeight: 500,
    },
  }))
  const classes = useStyles()
  const imagesSlides = property?.images?.map(
    (image) =>
      property?.length !== 0 && (
        <Carousel.Slide>
          <Image src={image} alt="image" mah={500} />
        </Carousel.Slide>
      ),
  )

  const videoSlides = property?.videos?.map(
    (video) =>
      property?.length !== 0 && (
        <Carousel.Slide>
          <video
            src={video}
            alt="image"
            controls
            style={{
              maxWidth: '100%',
              objectFit: 'cover',
              maxHeight: 500,
            }}
          />
        </Carousel.Slide>
      ),
  )

  const documents = property?.documents?.map((document) => (
    <iframe src={document} alt="documents" />
  ))

  return (
    <Carousel
      controlsOffset={5}
      slidesToScroll={property?.length}
      nextControlIcon={<IconArrowRight size={18} style={{ color: '#fff' }} />}
      previousControlIcon={
        <IconArrowLeft size={18} style={{ color: '#fff' }} />
      }
      getEmblaApi={setEmbla}
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
      mx="auto"
      className={classes.imageContainer}
      slideSize="100%"
      slideGap="md"
    >
      {type === 'image'
        ? imagesSlides
        : type === 'video'
        ? videoSlides
        : type === 'documents'
        ? documents
        : null}
    </Carousel>
  )
}
