import {
  Badge,
  Button,
  Container,
  Group,
  List,
  Paper,
  Stack,
  Text,
  ThemeIcon,
  createStyles,
} from '@mantine/core'
import { IconCircleCheck } from '@tabler/icons'
import axios from 'axios'
import React, { useEffect } from 'react'

const Subscription = () => {
  const useStyles = createStyles((theme) => ({
    titleText: {
      color: theme.white,
      fontSize: 28,
      fontWeight: 700,
      marginTop: 10,
      marginBottom: 10,
    },
    secondaryText: {
      color: theme.white,
      fontSize: 22,
      fontWeight: 600,
    },
    listItemText: {
      color: theme.white,
      fontSize: 18,
      fontStyle: 'italic',
    },
  }))
  const { classes } = useStyles()

  const [subscriptions, setSubscriptions] = React.useState([])

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

  console.log('====================================')
  console.log('subscription PRICE: ', subscriptions?.data?.body)
  console.log('====================================')

  return (
    <Container size={'xl'}>
      {subscriptions?.data?.body?.map((subscription) => {
        return (
          <Paper
            withBorder
            shadow="md"
            p={30}
            mt={30}
            radius="lg"
            style={{
              background: 'rgb(228, 152, 70)',
              backgroundImage:
                'linear-gradient(270deg, rgba(228,152,70,1) 0%, rgba(215,115,32,1) 35%, rgba(200,101,35,1) 45%, rgba(205,47,47,1) 85%)',
              // maxHeight: 500,
              maxWidth: 400,
            }}
            sx={{
              '&:hover': {
                transform: 'scale(1.02)',
                transition: 'all 0.5s ease-in-out',
                cursor: 'pointer',
              },
            }}
          >
            <Group position="right">
              <Badge variant="filled" color="red" size="lg">
                Most Popular
              </Badge>
            </Group>
            <Group>
              <Text className={classes.titleText}>
                PKR {subscription?.price || 'NA'}/Month
              </Text>
            </Group>

            <Text className={classes.secondaryText}>
              {subscription?.title || 'Subscription Title'}
            </Text>

            <Text className={classes.secondaryText}>
              {subscription?.description || 'Subscription Description'}
            </Text>

            <Text className={classes.secondaryText}>
              {subscription?.durationInMonths || 'Duration in Months'}
            </Text>

            <Text className={classes.secondaryText}>
              {subscription?.allowedNumberOfPropertyListings ||
                'Allowed Number of Property Listings'}
            </Text>

            <Text className={classes.secondaryText}>
              {subscription?.allowedNumerOfHotListings ||
                'Allowed Number of Hot Listings'}
            </Text>

            <Text className={classes.secondaryText}>
              {subscription?.allowedNumberOfSuperHotListings ||
                'Allowed Number of Super Hot Listings'}
            </Text>

            <Text className={classes.secondaryText}>
              {subscription?.allowedNumberOfPremiumListings ||
                'Allowed Number of Premium Listings'}
            </Text>

            <Group
              style={{
                marginTop: 20,
              }}
              position="center"
            >
              <Button
                variant="filled"
                color="red"
                radius="xl"
                size="sm"
                uppercase
              >
                Choose Plan
              </Button>
            </Group>
          </Paper>
        )
      })}
    </Container>
  )
}

export default Subscription
