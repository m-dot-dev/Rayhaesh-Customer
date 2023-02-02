import {
  Box,
  Button,
  Checkbox,
  Group,
  Input,
  NumberInput,
  RangeSlider,
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

const Filter = ({ city, setCity, range, setRange }) => {
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
      />
      <Divider my="sm" />
      <Input.Wrapper label="Price">
        <RangeSlider
          thumbSize={14}
          labelTransition="skew-down"
          labelTransitionDuration={150}
          labelTransitionTimingFunction="ease"
          min={0}
          max={50000000}
          value={range}
          onChange={setRange}
          styles={{
            bar: {
              backgroundColor: '#D92228',
            },
            thumb: {
              borderColor: '#D92228',
              borderWidth: 2,
              padding: 3,
            },
            label: {
              backgroundColor: '#D92228',
              color: 'white',
            },
          }}
        />
        {/* <Group
          style={{
            justifyContent: 'space-between',
          }}
        >
          <Input.Wrapper id="from" label="From">
            <NumberInput
              hideControls
              icon={<span>Rs.</span>}
              id="from"
              style={{
                width: 150,
              }}
              value={range[0]}
              onChange={(event) => setFrom(Number(event.currentTarget.value))}
            />
          </Input.Wrapper>
          <Input.Wrapper id="to" label="To">
            <NumberInput
              hideControls
              icon={<span>Rs.</span>}
              id="to"
              style={{
                width: 150,
              }}
              value={range[1]}
              onChange={(event) => setTo(Number(event.currentTarget.value))}
            />
          </Input.Wrapper>
        </Group> */}
      </Input.Wrapper>
      <Divider my="sm" />

      <Stack spacing={'lg'}>
        <PropertyCategoryCB />
        <PropertySubCategoryCB />
        <AreaCB />
        <PriceCB />
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
