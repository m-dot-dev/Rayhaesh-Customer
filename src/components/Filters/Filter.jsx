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
        <AreaCB areaValue={areaValue} setAreaValue={setAreaValue} />
        <PriceCB priceValue={priceValue} setPriceValue={setPriceValue} />
      </Stack>

      {match1200 && (
        <Group mt={'md'} position="apart" noWrap>
          <Button
            fullWidth
            style={{
              backgroundColor: '#D92228',
              color: 'white',
            }}
          >
            Reset
          </Button>
          <Button
            fullWidth
            style={{
              backgroundColor: '#D92228',
              color: 'white',
            }}
          >
            Apply
          </Button>
        </Group>
      )}
    </Box>
  )
}

export default Filter
