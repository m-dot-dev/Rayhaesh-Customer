import {
  Box,
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

const Filter = () => {
  const [from, setFrom] = React.useState(0)
  const [to, setTo] = React.useState(50000000)
  const cityData = [
    { value: 'islamabad', label: 'Islamabad' },
    { value: 'rawalpindi', label: 'Rawalpindi' },
    { value: 'lahore', label: 'Lahore' },
    { value: 'karachi', label: 'Karachi' },
    { value: 'peshawar', label: 'Peshawar' },
    { value: 'quetta', label: 'Quetta' },
    { value: 'multan', label: 'Multan' },
    { value: 'faisalabad', label: 'Faisalabad' },
  ]
  return (
    <Box
      style={{
        padding: 20,
      }}
    >
      {/* <Text>Advance Filters</Text> */}
      <MultiSelect data={cityData} label="City" placeholder="Cities Filter" />
      <Divider my="sm" />
      <Input.Wrapper label="Price">
        <RangeSlider
          thumbSize={14}
          labelTransition="skew-down"
          labelTransitionDuration={150}
          labelTransitionTimingFunction="ease"
          min={0}
          max={50000000}
          value={[from, to]}
          onChange={(value) => {
            setFrom(value[0])
            setTo(value[1])
          }}
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
        <Group
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
              value={from}
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
              value={to}
              onChange={(event) => setTo(Number(event.currentTarget.value))}
            />
          </Input.Wrapper>
        </Group>
      </Input.Wrapper>
      <Divider my="sm" />

      <Stack spacing={'lg'}>
        <PropertyCategoryCB />
        <PropertySubCategoryCB />
      </Stack>

      {/* Filter by Size, checkboxes below for marla/kanal etc */}
      {/* Filter by Beds, checkboxes below for marla/kanal etc */}
    </Box>
  )
}

export default Filter
