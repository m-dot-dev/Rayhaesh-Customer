import { List, Stack, Text } from '@mantine/core'
import { IconCheck } from '@tabler/icons'
import React from 'react'

const ServicesDetails = ({ property }) => {
  return (
    <>
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
                    <Text>{property?.servantQuarters} Servant Quarter</Text>
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
                        Internet Description: {property?.internetDescription}
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
                        TV Cable Description: {property?.cableDescription}
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
                  <Text>Nearby Facilities: {property?.nearbyFacilities}</Text>
                </List.Item>
              )}
              {property?.otherFacilities && (
                <List.Item>
                  <Text>Other Facilities: {property?.otherFacilities}</Text>
                </List.Item>
              )}
            </List>
          </Stack>
        )}
    </>
  )
}

export default ServicesDetails
