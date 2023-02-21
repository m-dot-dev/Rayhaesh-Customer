import {
  Group,
  Text,
  createStyles,
  Tabs,
  Stack,
  Grid,
  Paper,
  Button,
  List,
  Box,
  Input,
  Modal,
  Notification,
  Dialog,
  Container,
} from '@mantine/core'
import {
  IconAdjustmentsHorizontal,
  IconArrowRight,
  IconCheck,
  IconFileInfo,
  IconFiles,
  IconMap2,
  IconPhoto,
  IconShoppingBag,
  IconUser,
  IconVideo,
  IconX,
} from '@tabler/icons'
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import PropertyCarousel from './PropertyCarousel'
import { useMediaQuery } from '@mantine/hooks'
import { useNavigate } from 'react-router-dom'
import { showNotification } from '@mantine/notifications'
import LocationMap from '../Generic/LocationMap'
import VideosCarousel from '../Carousel/VideosCarousel'
import ImagesCarousel from '../Carousel/ImagesCarousel'
import AgencyDetails from '../ListingTabs/AgencyDetails'
import ServicesDetails from '../ListingTabs/ServicesDetails'
import AboutDetails from '../ListingTabs/AboutDetails'
import LocationDetails from '../ListingTabs/LocationDetails'

const PropertyPage = () => {
  const useStyles = createStyles((theme) => ({
    titleText: {
      fontSize: 22,
      fontWeight: 600,
    },
    cityText: {
      fontSize: 18,
      fontWeight: 400,
      opacity: 0.7,
      display: 'flex',
      flexDirection: 'row',
      marginRight: 25,
      gap: 5,
    },
    aboutText: {
      fontSize: 16,
      fontWeight: 500,
      color: '#D92228',
      textTransform: 'uppercase',
    },
    bookingText: {
      fontSize: 20,
      fontWeight: 700,
      textAlign: 'center',
    },
  }))
  const { classes } = useStyles()

  const location = useLocation()
  const [property, setProperty] = React.useState({})
  const match1200 = useMediaQuery('(max-width: 1200px)')

  useEffect(() => {
    setProperty(location.state?.data)
  }, [location])

  const [opened, setOpened] = useState(false)

  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const handleBookingSubmit = (e) => {
    e.preventDefault()
    if (name === '' || email === '' || phone === '') {
      showNotification({
        title: 'Error',
        message: 'Please fill in all the fields',
        styles: (theme) => ({
          root: {
            backgroundColor: theme.colors.red[8],
            borderColor: theme.colors.red[8],

            '&::before': { backgroundColor: theme.white },
          },

          title: { color: theme.white },
          description: { color: theme.white },
          closeButton: {
            color: theme.white,
            backgroundColor: theme.colors.red[6],
            '&:hover': { backgroundColor: theme.colors.red[7] },
          },
        }),
      })
    } else {
      navigate(`/booking/${property?._id}`, {
        state: { data: property },
      })
    }
  }

  return (
    <Container size={'xl'} pt={'md'}>
      <Grid columns={12}>
        <Grid.Col
          style={match1200 ? { padding: 50 } : null}
          span={match1200 ? 12 : 8}
          className={classes.container}
        >
          <Group className={classes.mainGroup}>
            {/* Title and Locations */}
            <Stack spacing={'xs'}>
              <Text className={classes.titleText}>
                {property?.propertyTitle || 'Property Title Here'}
              </Text>
              <Text className={classes.cityText}>
                <IconMap2 />
                {property?.propertyCity || 'Property City Here'}
              </Text>
            </Stack>
          </Group>
          {/* Tabs */}
          <Group className={classes.mainGroup}>
            <Tabs
              color="red"
              variant="pills"
              defaultValue="photos"
              mt={'xl'}
              keepMounted={false}
            >
              <Tabs.List>
                {property?.images?.length !== 0 && (
                  <Tabs.Tab value="photos" icon={<IconPhoto size={14} />}>
                    Photos
                  </Tabs.Tab>
                )}
                {property?.videos?.length !== 0 && (
                  <Tabs.Tab value="videos" icon={<IconVideo size={14} />}>
                    Videos
                  </Tabs.Tab>
                )}
                {property?.documents?.length !== 0 && (
                  <Tabs.Tab value="documents" icon={<IconFiles size={14} />}>
                    Documents
                  </Tabs.Tab>
                )}
                {match1200 && (
                  <Tabs.Tab
                    value="booking"
                    icon={<IconShoppingBag size={14} />}
                    onClick={() => setOpened(true)}
                  >
                    Booking
                  </Tabs.Tab>
                )}
              </Tabs.List>

              <Tabs.Panel value="photos" pt="xs">
                <ImagesCarousel property={property} />
              </Tabs.Panel>

              <Tabs.Panel value="videos" pt="xs">
                <VideosCarousel property={property} />
              </Tabs.Panel>

              {property?.documents && (
                <Tabs.Panel value="documents" pt="xs">
                  <PropertyCarousel property={property} type="document" />
                </Tabs.Panel>
              )}

              <Tabs.Panel value="booking" pt="xs">
                <Modal opened={opened} onClose={() => setOpened(false)}>
                  <Paper shadow="sm" p="xl" withBorder>
                    <Stack spacing={'md'}>
                      <Text
                        style={{
                          fontSize: 22,
                          fontWeight: 700,
                          color: '#D92228',
                          textAlign: 'center',
                        }}
                      >
                        Booking
                      </Text>
                      <form onSubmit={handleBookingSubmit}>
                        <Input.Wrapper label="Name" id="">
                          <Input
                            // required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                        </Input.Wrapper>
                        <Input.Wrapper label="Email Address" id="">
                          <Input
                            // required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </Input.Wrapper>
                        <Input.Wrapper label="Phone Number" id="">
                          <Input
                            // required
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                          />
                        </Input.Wrapper>
                        <Button
                          style={{
                            color: 'white',
                            backgroundColor: '#D92228',
                            fontFamily: 'poppins',
                            ':hover': {
                              backgroundColor: '#D92228',
                            },
                          }}
                          mt={'md'}
                          fullWidth
                          size="md"
                          rightIcon={<IconArrowRight />}
                          type="submit"
                        >
                          Book Now
                        </Button>
                      </form>
                    </Stack>
                  </Paper>
                </Modal>
              </Tabs.Panel>
            </Tabs>
          </Group>

          {/* Details Section */}
          <Group className={classes.mainGroup}>
            <Tabs color="red" variant="default" defaultValue="about" mt={'xl'}>
              <Tabs.List>
                <Tabs.Tab value="about" icon={<IconPhoto size={14} />}>
                  About
                </Tabs.Tab>
                <Tabs.Tab
                  value="services"
                  icon={<IconAdjustmentsHorizontal size={14} />}
                >
                  Services
                </Tabs.Tab>
                <Tabs.Tab value="agency" icon={<IconFileInfo size={14} />}>
                  Agency
                </Tabs.Tab>
                <Tabs.Tab value="location" icon={<IconMap2 size={14} />}>
                  Location
                </Tabs.Tab>
              </Tabs.List>

              <Tabs.Panel value="about" pt="xs">
                <AboutDetails property={property} />
              </Tabs.Panel>

              <Tabs.Panel value="services" pt="xs">
                <ServicesDetails property={property} />
              </Tabs.Panel>

              <Tabs.Panel value="location" pt="xs">
                <LocationDetails property={property} />
              </Tabs.Panel>

              <Tabs.Panel value="agency" pt="xs">
                <Stack spacing={0}>
                  {property?.agency && (
                    <Group>
                      <AgencyDetails property={property} />
                    </Group>
                  )}
                </Stack>
              </Tabs.Panel>
            </Tabs>
          </Group>
        </Grid.Col>
        <Grid.Col span={4} p="xl" hidden={match1200 ? true : false}>
          <Paper
            shadow="sm"
            p="xl"
            withBorder
            style={{
              marginTop: 100,
              marginRight: 50,
              top: '100px',
              position: 'sticky',
              outline: '0px',
            }}
          >
            <Stack spacing={'md'}>
              <Text
                style={{
                  fontSize: 22,
                  fontWeight: 700,
                  color: '#D92228',
                  textAlign: 'center',
                }}
              >
                Booking
              </Text>
              <form onSubmit={handleBookingSubmit}>
                <Input.Wrapper label="Name">
                  <Input
                    // required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Input.Wrapper>
                <Input.Wrapper label="Email Address">
                  <Input
                    // required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Input.Wrapper>
                <Input.Wrapper label="Phone Number">
                  <Input
                    // required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </Input.Wrapper>
                <Button
                  sx={{
                    color: 'white',
                    backgroundColor: '#D92228',
                    fontFamily: 'poppins',
                    ':hover': {
                      backgroundColor: '#D92228',
                    },
                  }}
                  mt={'md'}
                  fullWidth
                  size="md"
                  rightIcon={<IconArrowRight />}
                  type="submit"
                >
                  Book Now
                </Button>
              </form>
            </Stack>
          </Paper>
        </Grid.Col>
      </Grid>
    </Container>
  )
}

export default PropertyPage
