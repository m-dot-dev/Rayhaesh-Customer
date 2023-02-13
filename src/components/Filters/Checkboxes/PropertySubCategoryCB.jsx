import { Checkbox, Input } from '@mantine/core'
export default function PropertySubCategoryCB({
  subCategoryValue,
  setSubCategoryValue,
}) {
  return (
    <>
      <Input.Wrapper label="Filter by Property Sub Category">
        <Checkbox.Group
          orientation="vertical"
          value={subCategoryValue}
          onChange={setSubCategoryValue}
          mb={'xl'}
        >
          <Checkbox
            value="house"
            label="House"
            // mt={'md'}
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
            value="file"
            label="File"
            // mt={'md'}
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
            value="plot"
            label="Plot"
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
            value="flat"
            label="Flat"
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
            value="villa"
            label="Villa"
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
            value="farmhosue"
            label="Farmhouse"
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
            value="penthouse"
            label="Penthouse"
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
            value="shop"
            label="Shop"
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
            value="plaza"
            label="Plaza"
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
            value="building"
            label="Building"
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
