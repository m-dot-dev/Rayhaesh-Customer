import { Group, Stack, Text, createStyles } from '@mantine/core'
import React from 'react'

const AboutDetails = ({ property }) => {
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
  return (
    <>
      <Group noWrap mt={'xs'} spacing={'xs'}>
        <Text>{property?.propertyDescription}</Text>
      </Group>
      <Group noWrap mt={'xs'} spacing={'xs'}>
        <Text className={classes.aboutText}>Property Availability Status:</Text>
        <Text>{property?.propertyAvailabilityStatus}</Text>
      </Group>
      <Group noWrap mt={'xs'} spacing={'xs'}>
        <Text className={classes.aboutText}>Property Occupation Status:</Text>
        <Text>{property?.occupied}</Text>
      </Group>
      <Group noWrap mt={'xs'}>
        <Text className={classes.aboutText}>Property Category:</Text>
        <Text>{property?.propertyCategory}</Text>
      </Group>
      <Group noWrap mt={'xs'}>
        <Text className={classes.aboutText}>Property Sub Category:</Text>
        <Text>{property?.propertySubCategory}</Text>
      </Group>
      <Group noWrap mt={'xs'}>
        <Text className={classes.aboutText}>Property is:</Text>
        <Text>{property?.propertyIs}</Text>
      </Group>
      <Group noWrap mt={'xs'}>
        <Text className={classes.aboutText}>Property price:</Text>
        {property?.propertyIs === 'For Rent' ? (
          <Text>{property?.monthlyRent + 'Rs./Month'}</Text>
        ) : (
          <Text>{property?.totalPrice + 'Rs.'}</Text>
        )}
      </Group>
      <Group noWrap mt={'xs'}>
        <Text className={classes.aboutText}>Property area:</Text>
        <Group>
          <Text>
            {property?.areaSize} {property?.areaSizeUnit}
          </Text>
        </Group>
      </Group>
      <Group mt={'xs'}>
        {property?.propertyIs === 'For Exchange' ? (
          <Stack spacing={2}>
            <Group noWrap>
              <Text className={classes.aboutText}>Exchange details: </Text>
              <Text>{property?.exchangeWith}</Text>
            </Group>
            <Group noWrap mt={'xs'}>
              <Text className={classes.aboutText}>
                Minimum Exchange Value:{' '}
              </Text>
              <Text>{property?.minimumExchangeValue}</Text>
            </Group>
            <Group>
              {property?.inInstallments && (
                <Stack>
                  <Text className={classes.aboutText}>In Installments: </Text>
                  <Group spacing={'xs'}>
                    <Text>Down Payment:</Text>
                    <Text>{property?.downPayment}</Text>
                  </Group>
                  <Group spacing={'xs'}>
                    <Text className={classes.aboutText}>
                      Total Number of Installments:{' '}
                    </Text>
                    <Text>{property?.totalNumberOfInstallments}</Text>
                  </Group>
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
      <Group mt={'xs'}>
        {property?.propertyIs === 'For Rent' ? (
          <Stack spacing={2}>
            <Group noWrap>
              <Text className={classes.aboutText}>
                Minimum Contract Period:{' '}
              </Text>
              <Text>{property?.minimumContractPeriod}</Text>
            </Group>
            <Group noWrap mt={'xs'}>
              <Text className={classes.aboutText}>Monthly Rent: </Text>
              <Text>{property?.monthlyRent}</Text>
            </Group>
            <Group noWrap mt={'xs'}>
              <Text className={classes.aboutText}>Security Deposit: </Text>
              <Text>{property?.securityDeposit}</Text>
            </Group>
            <Group noWrap mt={'xs'}>
              <Text className={classes.aboutText}>Advance Rent: </Text>
              <Text>{property?.advanceRent}</Text>
            </Group>
          </Stack>
        ) : (
          <Text></Text>
        )}
      </Group>
    </>
  )
}

export default AboutDetails
