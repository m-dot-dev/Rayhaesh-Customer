import { useListState, randomId } from '@mantine/hooks'
import { Checkbox, Input } from '@mantine/core'

const initialValues = [
  { label: 'Residential', checked: false, key: randomId() },
  { label: 'Commercial', checked: false, key: randomId() },
]

export default function PropertyCategoryCB() {
  const [values, handlers] = useListState(initialValues)

  const allChecked = values.every((value) => value.checked)
  const indeterminate = values.some((value) => value.checked) && !allChecked

  const items = values.map((value, index) => (
    <Checkbox
      mt="xs"
      label={value.label}
      key={value.key}
      checked={value.checked}
      onChange={(event) =>
        handlers.setItemProp(index, 'checked', event.currentTarget.checked)
      }
      styles={{
        input: {
          '&:checked': {
            backgroundColor: '#D92228',
            borderColor: '#D92228',
          },
        },
      }}
    />
  ))

  return (
    <>
      <Input.Wrapper label="Filter by Property Category">
        <Checkbox
          checked={allChecked}
          indeterminate={indeterminate}
          label="All"
          mt={'md'}
          transitionDuration={0}
          onChange={() =>
            handlers.setState((current) =>
              current.map((value) => ({ ...value, checked: !allChecked })),
            )
          }
          styles={{
            input: {
              '&:checked': {
                backgroundColor: '#D92228',
                borderColor: '#D92228',
              },
            },
          }}
        />
        {items}
      </Input.Wrapper>
    </>
  )
}
