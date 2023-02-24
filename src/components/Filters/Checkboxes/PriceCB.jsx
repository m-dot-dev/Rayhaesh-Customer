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
            label="< 15 Lac"
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
            value="2"
            label="> 15 Lac & < 50 Lac"
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
            value="3"
            label=">50 Lac & < 1 Crore"
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
            unselectable="on"
          />
        </Checkbox.Group>
      </Input.Wrapper>
    </>
  )
}
