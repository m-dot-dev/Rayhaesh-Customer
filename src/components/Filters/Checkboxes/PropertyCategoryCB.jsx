import { randomId } from '@mantine/hooks'
import { Checkbox, Input } from '@mantine/core'
import { useState } from 'react'
export default function PropertyCategoryCB({
  categoryValue,
  setCategoryValue,
}) {
  console.log('====================================')
  console.log('categoryValue selected: ', categoryValue)
  console.log('====================================')

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
            styles={{
              input: {
                '&:checked': {
                  backgroundColor: '#D92228',
                  borderColor: '#D92228',
                },
              },
            }}
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
              },
            }}
          />
        </Checkbox.Group>
      </Input.Wrapper>
    </>
  )
}
