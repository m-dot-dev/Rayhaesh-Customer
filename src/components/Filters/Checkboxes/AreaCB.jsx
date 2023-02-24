import { Checkbox, Input } from '@mantine/core'

export default function AreaCB({ areaValue, setAreaValue }) {
  return (
    <>
      <Input.Wrapper label="Filter by Area">
        <Checkbox.Group
          orientation="vertical"
          value={areaValue}
          onChange={setAreaValue}
        >
          <Checkbox
            value="1"
            label="< 5 Marla"
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
            label="> 5 Marla & < 20 Marla"
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
            label="> 20 Marla & < 5 Kanal"
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
            label="> 5 Kanal"
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
