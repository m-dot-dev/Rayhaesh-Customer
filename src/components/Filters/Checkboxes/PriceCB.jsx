import { Checkbox, Input } from '@mantine/core'

export default function PriceCB({ priceValue, setPriceValue }) {
  return (
    <>
      <Input.Wrapper label="Filter by Price">
        <Checkbox.Group
          orientation="vertical"
          value={priceValue}
          onChange={setPriceValue}
        >
          <Checkbox
            value="1"
            label="< 5 Lac"
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
          />
          <Checkbox
            value="2"
            label="< 30 Lac"
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
          />
          <Checkbox
            value="3"
            label="< 1 Crore"
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
          />
          <Checkbox
            value="4"
            label="> 1 Crore"
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
          />
        </Checkbox.Group>
      </Input.Wrapper>
    </>
  )
}
