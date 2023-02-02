import { randomId } from '@mantine/hooks'
import { Checkbox, Input } from '@mantine/core'
import { useState } from 'react'
export default function PropertyCategoryCB() {
  const [categoryValue, setCategoryValue] = useState([])

  return (
    <>
      <Input.Wrapper label="Filter by Property Category">
        <Checkbox.Group
          orientation="vertical"
          value={categoryValue}
          onChange={setCategoryValue}
        >
          <Checkbox value="commercial" label="Commercial" />
          <Checkbox value="residential" label="Residential" />
        </Checkbox.Group>
      </Input.Wrapper>
    </>
  )
}
