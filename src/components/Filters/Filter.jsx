import {
  Box,
  Button,
  Checkbox,
  Group,
  Input,
  NumberInput,
  Stack,
  Text,
} from '@mantine/core'
import React from 'react'
import { Divider } from '@mantine/core'
import { MultiSelect } from '@mantine/core'
import PropertyCategoryCB from './Checkboxes/PropertyCategoryCB'
import PropertySubCategoryCB from './Checkboxes/PropertySubCategoryCB'
import AreaCB from './Checkboxes/AreaCB'
import PriceCB from './Checkboxes/PriceCB'
import { useMediaQuery } from '@mantine/hooks'
import { PakistanCities } from './cities'

const Filter = ({
  city,
  setCity,
  categoryValue,
  setCategoryValue,
  subCategoryValue,
  setSubCategoryValue,
  areaValue,
  setAreaValue,
  priceValue,
  setPriceValue,
}) => {
  const match1200 = useMediaQuery('(max-width: 1200px)')
  const cityData = PakistanCities.map((city) => ({
    label: city.label,
    value: city.value,
  }))
  console.log(
    'dasdsaasdadasd: ',
    city,
    categoryValue,
    subCategoryValue,
    areaValue,
    priceValue,
  )
  return (
    <Box
      style={{
        padding: !match1200 ? 20 : 0,
      }}
    >
      {match1200 && (
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
          }}
        >
          Advance Filters
        </Text>
      )}
      {!match1200 && (
        <Group>
          <Button
            style={{
              width: '100%',
            }}
            color="red"
            my={'md'}
            onClick={() => {
              setCity([])
              setCategoryValue([])
              setSubCategoryValue([])
              setAreaValue([])
              setPriceValue([])
            }}
            disabled={
              city?.length === 0 &&
              categoryValue?.length === 0 &&
              subCategoryValue?.length === 0 &&
              areaValue?.length === 0 &&
              priceValue?.length === 0
            }
          >
            Clear Filters
          </Button>
        </Group>
      )}
      <MultiSelect
        data={cityData}
        label="City"
        placeholder="Cities Filter"
        value={city}
        onChange={setCity}
        mb={'md'}
      />
      <Divider my="sm" />

      <Stack spacing={'lg'}>
        <PropertyCategoryCB
          categoryValue={categoryValue}
          setCategoryValue={setCategoryValue}
        />
        <PropertySubCategoryCB
          subCategoryValue={subCategoryValue}
          setSubCategoryValue={setSubCategoryValue}
        />
        {/* Coming from backened */}
        {/* <AreaCB areaValue={areaValue} setAreaValue={setAreaValue} />
        <PriceCB priceValue={priceValue} setPriceValue={setPriceValue} /> */}
      </Stack>

      {match1200 && (
        <Group mt={'md'} position="apart" noWrap>
          <Button
            fullWidth
            style={{
              backgroundColor: '#D92228',
              color: 'white',
            }}
            onClick={() => {
              setCity([])
              setCategoryValue([])
              setSubCategoryValue([])
              setAreaValue([])
              setPriceValue([])
            }}
          >
            Reset
          </Button>
        </Group>
      )}
    </Box>
  )
}

export default Filter
