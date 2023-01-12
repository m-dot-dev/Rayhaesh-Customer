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
} from '@mantine/core'
import {
  IconAdjustmentsHorizontal,
  IconArrowRight,
  IconCheck,
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
    mainGroup: {
      marginTop: 40,
      marginLeft: 120,
      [theme.fn.smallerThan('xs')]: {
        marginTop: 20,
        marginLeft: 60,
      },
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

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name === '' || email === '' || phone === '') {
      return (
        <Notification
          title="Default notification"
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            zIndex: 20,
          }}
        >
          This is default notification with title and body
          {console.log('asdasdasdasdasdasdasdasdasdasdasd')}
        </Notification>
      )
    } else {
      navigate(`/booking/${property?._id}`, { state: { data: property } })
    }
  }

  return (
    <>
      <Grid columns={12}>
        <Grid.Col
          style={{ display: 'flex', flexDirection: 'column' }}
          span={match1200 ? 12 : 8}
        >
          <Group className={classes.mainGroup}>
            {/* Title and Locations */}
            <Stack>
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
            <Tabs color="red" variant="pills" defaultValue="photos">
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
                <PropertyCarousel property={property} type="image" />
              </Tabs.Panel>

              <Tabs.Panel value="videos" pt="xs">
                <PropertyCarousel property={property} type="video" />
              </Tabs.Panel>

              <Tabs.Panel value="booking" pt="xs">
                <Modal opened={opened} onClose={() => setOpened(false)}>
                  <Paper shadow="sm" p="xl" withBorder>
                    <Stack>
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
                      <Input.Wrapper label="Name" id="">
                        <Input
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </Input.Wrapper>
                      <Input.Wrapper label="Email Address" id="">
                        <Input
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </Input.Wrapper>
                      <Input.Wrapper label="Phone Number" id="">
                        <Input
                          required
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
                        size="md"
                        rightIcon={<IconArrowRight />}
                        onClick={handleSubmit}
                      >
                        Book Now
                      </Button>
                    </Stack>
                  </Paper>
                </Modal>
              </Tabs.Panel>
            </Tabs>
          </Group>

          {/* Details Section */}
          <Group className={classes.mainGroup}>
            <Tabs color="red" variant="default" defaultValue="about">
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
                <Tabs.Tab value="location" icon={<IconMap2 size={14} />}>
                  Location
                </Tabs.Tab>
                <Tabs.Tab value="seller" icon={<IconUser size={14} />}>
                  About Seller
                </Tabs.Tab>
              </Tabs.List>

              <Tabs.Panel value="about" pt="xs">
                <Text>{property?.propertyDescription}</Text>
                <Group
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                  }}
                  noWrap
                >
                  <Text className={classes.aboutText}>Property Category:</Text>
                  <Text>{property?.propertyCategory}</Text>
                </Group>
                <Group
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginTop: 5,
                  }}
                  noWrap
                >
                  <Text className={classes.aboutText}>
                    Property Sub Category:
                  </Text>
                  <Text>{property?.propertySubCategory}</Text>
                </Group>
                <Group
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginTop: 5,
                  }}
                  noWrap
                >
                  <Text className={classes.aboutText}>Property is:</Text>
                  <Text>{property?.propertyIs}</Text>
                </Group>
                <Group
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginTop: 5,
                  }}
                >
                  {property?.propertyIs === 'For Exchange' ? (
                    <Stack spacing={2}>
                      <Group noWrap>
                        <Text className={classes.aboutText}>
                          Exchange details:{' '}
                        </Text>
                        <Text>{property?.exchangeWith}</Text>
                      </Group>
                      <Group noWrap>
                        <Text className={classes.aboutText}>
                          Minimum Exchange Value:{' '}
                        </Text>
                        <Text>{property?.minimumExchangeValue}</Text>
                      </Group>
                      {/* There is no installments in the last property but it has monthly rent etc. where to put that? */}
                      <Group>
                        {property?.inInstallments && (
                          <Stack>
                            <Text className={classes.aboutText}>
                              In Installments:{' '}
                            </Text>
                            <Text className={classes.aboutText}>
                              Total Number of Installments:{' '}
                            </Text>
                            <Text>{property?.totalNumberOfInstallments}</Text>
                            <Text className={classes.aboutText}>
                              Installment Duration:{' '}
                            </Text>
                            <Text>{property?.installmentDuration}</Text>
                            <Text className={classes.aboutText}>
                              Monthly Installments:{' '}
                            </Text>
                            <Text>{property?.monthlyInstallment}</Text>
                          </Stack>
                        )}
                      </Group>
                    </Stack>
                  ) : (
                    <Text></Text>
                  )}
                </Group>
              </Tabs.Panel>

              <Tabs.Panel value="services" pt="xs">
                {property?.propertySubCategory !== 'plot' &&
                  property?.propertySubCategory !== 'file' && (
                    <Stack spacing={0}>
                      <List icon={<IconCheck />}>
                        {property?.noOfBedRooms !== 0 && (
                          <List.Item>
                            <Text>{property?.noOfBedRooms} Bedrooms</Text>
                          </List.Item>
                        )}
                        {property?.noOfBathrooms !== 0 && (
                          <List.Item>
                            <Text>{property?.noOfBathrooms} Bathrooms</Text>
                          </List.Item>
                        )}
                        {property?.parkingSpace !== 0 && (
                          <List.Item>
                            <Text>{property?.parkingSpace} Parking Space</Text>
                          </List.Item>
                        )}
                        {property?.drawingRoom !== 0 && (
                          <List.Item>
                            <Text>{property?.drawingRoom} Drawing Room</Text>
                          </List.Item>
                        )}
                        {property?.servantQuarters !== 0 && (
                          <List.Item>
                            <Stack spacing={0}>
                              <Text>
                                {property?.servantQuarters} Servant Quarter
                              </Text>
                              <List.Item>
                                <Text italic>
                                  Servant Quarter Description:{' '}
                                  {property?.servantQuarterDetails}
                                </Text>
                              </List.Item>
                            </Stack>
                          </List.Item>
                        )}
                        {property?.diningRoom !== 0 && (
                          <List.Item>
                            <Text>{property?.diningRoom} Dining Room</Text>
                          </List.Item>
                        )}
                        {property?.kitchen !== 0 && (
                          <List.Item>
                            <Text>{property?.kitchen} Kitchen</Text>
                          </List.Item>
                        )}
                        {property?.floorType !== 0 && (
                          <List.Item>
                            <Text>Floor Type: {property?.floorType}</Text>
                          </List.Item>
                        )}
                        {property?.electricityBackup && (
                          <List.Item>
                            <Text>Electricity Backup Available</Text>
                          </List.Item>
                        )}
                        {property?.powderRoom !== 0 && (
                          <List.Item>
                            <Text>{property?.powderRoom} Powder Room</Text>
                          </List.Item>
                        )}
                        {property?.storeRoom !== 0 && (
                          <List.Item>
                            <Text>{property?.storeRoom} Store Room</Text>
                          </List.Item>
                        )}
                        {property?.wasteDisposal && (
                          <List.Item>
                            <Text>Waste Disposal Available</Text>
                          </List.Item>
                        )}
                        {property?.steamRoom !== 0 && (
                          <List.Item>
                            <Text>{property?.steamRoom} Steam Room</Text>
                          </List.Item>
                        )}
                        {property?.lounge !== 0 && (
                          <List.Item>
                            <Text>{property?.lounge} Lounge</Text>
                          </List.Item>
                        )}
                        {property?.sittingRoom !== 0 && (
                          <List.Item>
                            <Text>{property?.sittingRoom} Sitting Room</Text>
                          </List.Item>
                        )}
                        {property?.laundryRoom !== 0 && (
                          <List.Item>
                            <Text>{property?.laundryRoom} Laundry Room</Text>
                          </List.Item>
                        )}
                        {property?.hasDoubleGlazedWindows && (
                          <List.Item>
                            <Text>Double Gazed Windows</Text>
                          </List.Item>
                        )}
                        {property?.hasCentralAirConditioning && (
                          <List.Item>
                            <Text>Central Air Conditioning</Text>
                          </List.Item>
                        )}
                        {property?.hasCheckCentralHeating && (
                          <List.Item>
                            <Text>Central Heating</Text>
                          </List.Item>
                        )}
                        {property?.hasInternet && (
                          <List.Item>
                            <Stack spacing={0}>
                              <Text>Internet Avilable</Text>
                              <Text italic>
                                <List.Item>
                                  Internet Description:{' '}
                                  {property?.internetDescription}
                                </List.Item>
                              </Text>
                            </Stack>
                          </List.Item>
                        )}
                        {property?.hasCableTv && (
                          <List.Item>
                            <Stack spacing={0}>
                              <Text>TV Cable Available</Text>
                              <List.Item>
                                <Text italic>
                                  TV Cable Description:{' '}
                                  {property?.cableDescription}
                                </Text>
                              </List.Item>
                            </Stack>
                          </List.Item>
                        )}
                        {property?.hasSwimmingPool && (
                          <List.Item>
                            <Text>Swimming Pool Available</Text>
                          </List.Item>
                        )}
                        {property?.hasCommunityLawnandGarden && (
                          <List.Item>
                            <Text>Community Lawn and Garden Available</Text>
                          </List.Item>
                        )}
                        {property?.hasMedicalCenter && (
                          <List.Item>
                            <Text>Medical Center Available</Text>
                          </List.Item>
                        )}
                        {property?.hasDayCareCenter && (
                          <List.Item>
                            <Text>Day Care Center Available</Text>
                          </List.Item>
                        )}
                        {property?.hasKidsPlayArea && (
                          <List.Item>
                            <Text>Kids Play Area Available</Text>
                          </List.Item>
                        )}
                        {property?.hasBarBQueArea && (
                          <List.Item>
                            <Text>Bar B Que Area Available</Text>
                          </List.Item>
                        )}
                        {property?.nearbyFacilities && (
                          <List.Item>
                            <Text>
                              Nearby Facilities: {property?.nearbyFacilities}
                            </Text>
                          </List.Item>
                        )}
                        {property?.otherFacilities && (
                          <List.Item>
                            <Text>
                              Other Facilities: {property?.otherFacilities}
                            </Text>
                          </List.Item>
                        )}
                      </List>
                    </Stack>
                  )}
              </Tabs.Panel>

              <Tabs.Panel value="location" pt="xs">
                <Stack spacing={0}>
                  {property?.propertyCity && (
                    <Group>
                      <Text className={classes.aboutText}>City:</Text>
                      <Text>{property?.propertyCity}</Text>
                    </Group>
                  )}
                  {property?.streetNumber && (
                    <Group>
                      <Text className={classes.aboutText}>Street Number: </Text>
                      <Text>{property?.streetNumber}</Text>
                    </Group>
                  )}
                  {property?.houseNumber && (
                    <Group>
                      <Text className={classes.aboutText}>House Number: </Text>
                      <Text>{property?.houseNumber}</Text>
                    </Group>
                  )}
                  {property?.ZIPCode && (
                    <Group>
                      <Text className={classes.aboutText}>Zip Code: </Text>
                      <Text>{property?.ZIPCode}</Text>
                    </Group>
                  )}
                </Stack>
              </Tabs.Panel>
              <Tabs.Panel value="seller" pt="xs">
                <Text>Information about the seller</Text>
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
            <Stack>
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
              <Input.Wrapper label="Name">
                <Input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Input.Wrapper>
              <Input.Wrapper label="Email Address">
                <Input
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Input.Wrapper>
              <Input.Wrapper label="Phone Number">
                <Input
                  required
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
                size="md"
                rightIcon={<IconArrowRight />}
                onClick={handleSubmit}
              >
                Book Now
              </Button>
            </Stack>
          </Paper>
        </Grid.Col>
      </Grid>
    </>
  )
}

export default PropertyPage
