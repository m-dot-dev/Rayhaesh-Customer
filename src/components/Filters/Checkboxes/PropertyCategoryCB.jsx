import { randomId } from '@mantine/hooks'
import { Checkbox, Input } from '@mantine/core'
import { useState } from 'react'
export default function PropertyCategoryCB({
  categoryValue,
  setCategoryValue,
}) {
  return (
    <>
      <Input.Wrapper label="Filter by Property Category">
        <Checkbox.Group
          orientation="vertical"
          value={categoryValue}
          onChange={setCategoryValue}
        >
          <Checkbox
            value="Commercial"
            label="Commercial"
            mt={'md'}
            styles={{
              input: {
                '&:checked': {
                  backgroundColor: '#D92228',
                  borderColor: '#D92228',
                },
                '&:hover': {
                  cursor: 'pointer',
                },
              },
            }}
            unselectable="on"
          />
          <Checkbox
            value="Residential"
            label="Residential"
            styles={{
              input: {
                '&:checked': {
                  backgroundColor: '#D92228',
                  borderColor: '#D92228',
                },
                '&:hover': {
                  cursor: 'pointer',
                },
              },
            }}
            unselectable="on"
          />
        </Checkbox.Group>
      </Input.Wrapper>
    </>
  )
}
