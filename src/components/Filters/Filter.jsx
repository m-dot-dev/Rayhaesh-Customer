import { Box, Input, NumberInput, RangeSlider, Text } from '@mantine/core'
import React from 'react'
import { Divider } from '@mantine/core'
import { MultiSelect } from '@mantine/core'

const Filter = () => {
  const [from, setFrom] = React.useState(0)
  const [to, setTo] = React.useState(200000)
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
      <MultiSelect data={cityData} label="City" placeholder="Cities Filter" />
      <Divider my="sm" />
      <Text>From</Text>
      <RangeSlider thumbSize={14} mt="xl" min={from} max={to} color="red" />
      <Input.Wrapper id="from" label="From">
        <NumberInput hideControls placeholder="Rs." width={50} />
      </Input.Wrapper>
      <Divider my="sm" />
      {/* Filter by Property Type, checkboxes below */}
      {/* Filter by Size, checkboxes below for marla/kanal etc */}
      {/* Filter by Beds, checkboxes below for marla/kanal etc */}
    </Box>
  )
}

export default Filter
