import { Pagination } from '@mantine/core'
import React from 'react'

const ListingPagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <Pagination
      total={pageNumbers.length}
      onChange={(page) => paginate(page)}
      withEdges
      styles={() => ({
        item: {
          '&[data-active]': {
            backgroundColor: '#D92228',
          },
        },
      })}
    />
  )
}

export default ListingPagination
