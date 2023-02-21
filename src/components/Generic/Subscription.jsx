import {
  Badge,
  Button,
  Center,
  Container,
  Group,
  List,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  createStyles,
} from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { IconCircleCheck } from '@tabler/icons'
import axios from 'axios'
import React, { useEffect } from 'react'

const Subscription = () => {
  const [subscriptions, setSubscriptions] = React.useState([])
  const match1100 = useMediaQuery('(max-width: 1100px)')
  const match768 = useMediaQuery('(max-width: 768px)')
  const match576 = useMediaQuery('(max-width: 576px)')

  useEffect(() => {
    axios
      .get(
        import.meta.env.VITE_REACT_APP_BACKEND_URL + '/user/getSubscriptions',
      )
      .then((data) => {
        setSubscriptions(data)
      })
      .catch((error) => {
        console.log('====================================')
        console.log('error: ', error)
        console.log('====================================')
      })
  }, [])

  return (
    <Container size={'xl'}>
      <Center>
        <Text size="xl" weight={600} mt={'xl'}>
          Choose your subscription plan
        </Text>
      </Center>
      <SimpleGrid cols={match576 ? 1 : match768 ? 1 : match1100 ? 2 : 3}>
        {subscriptions?.data?.body?.map((subscription) => {
          return (
            <Center>
              <Paper
                withBorder
                shadow="md"
                style={{
                  width: 420,
                  height: 450,
                  backgroundColor: '#e5e5f7',
                  opacity: 0.8,
                  backgroundImage:
                    'radial-gradient(#D92228 0.5px, #e5e5f7 0.5px)',
                  backgroundSize: '10px 10px',
                  position: 'relative',
                }}
                radius={'lg'}
                mt={'xl'}
                mb={'xl'}
                sx={{
                  '&:hover': {
                    transform: 'scale(1.01)',
                    transition: 'all 0.6s ease-in-out',
                    cursor: 'pointer',
                  },
                }}
                p={'lg'}
              >
                <Center mt={'xs'}>
                  <Text weight={700} color="#D92228" size={'xl'}>
                    PKR {subscription?.price || 'NA'}/Month
                  </Text>
                </Center>

                <Badge
                  color="grape"
                  style={{
                    position: 'absolute',
                    top: -10,
                    right: -10,
                  }}
                >
                  {subscription?.title || 'Subscription Title'}
                </Badge>

                <Center mt={'md'}>
                  <Text weight={500} size={'lg'}>
                    {subscription?.description || 'Subscription Description'}
                  </Text>
                </Center>

                <Stack mt={'xl'} spacing={'xs'}>
                  <Text weight={500} size={'lg'}>
                    {subscription?.durationInMonths || 'Duration in Months'}
                  </Text>

                  <Text weight={500} size={'lg'}>
                    {subscription?.allowedNumberOfPropertyListings ||
                      'Allowed Number of Property Listings'}
                  </Text>

                  <Text weight={500} size={'lg'}>
                    {subscription?.allowedNumerOfHotListings ||
                      'Allowed Number of Hot Listings'}
                  </Text>

                  <Text weight={500} size={'lg'}>
                    {subscription?.allowedNumberOfSuperHotListings ||
                      'Allowed Number of Super Hot Listings'}
                  </Text>

                  <Text weight={500} size={'lg'}>
                    {subscription?.allowedNumberOfPremiumListings ||
                      'Allowed Number of Premium Listings'}
                  </Text>
                </Stack>

                <Group
                  style={{
                    marginTop: 20,
                  }}
                  position="center"
                >
                  <Button
                    variant="filled"
                    color="red"
                    radius="lg"
                    size="sm"
                    uppercase
                    style={{
                      position: 'absolute',
                      bottom: -20,
                    }}
                  >
                    Choose Plan
                  </Button>
                </Group>
              </Paper>
            </Center>
          )
        })}
      </SimpleGrid>
    </Container>
  )
}

export default Subscription
