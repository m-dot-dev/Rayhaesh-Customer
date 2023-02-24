export function filtering(
  city,
  categoryValue,
  subCategoryValue,
  areaValue,
  priceValue,
  allproperties,
) {
  let filteredListings = []

  if (
    city?.length === 0 &&
    categoryValue?.length === 0 &&
    subCategoryValue?.length === 0 &&
    priceValue?.length === 0 &&
    areaValue?.length === 0
  ) {
    filteredListings = allproperties
  } else if (city?.length !== 0) {
    filteredListings = allproperties?.filter((property) => {
      return property?.propertyCity === city
    })
  }
  if (categoryValue?.length !== 0) {
    filteredListings = filteredListings?.filter((property) => {
      return property?.propertyCategory === categoryValue
    })
  }
  if (subCategoryValue?.length !== 0) {
    filteredListings = filteredListings?.filter((property) => {
      return property?.propertySubCategory === subCategoryValue
    })
  }
  if (areaValue?.length !== 0) {
    if (areaValue === '1') {
      filteredListings = filteredListings?.filter((property) => {
        return property?.area <= 5 * 272.25
      })
    } else if (areaValue === '2') {
      filteredListings = filteredListings?.filter((property) => {
        return property?.area <= 20 * 272.25
      })
    } else if (areaValue === '3') {
      filteredListings = filteredListings?.filter((property) => {
        return property?.area > 20 * 272.25 && property?.area <= 50 * 272.25
      })
    } else if (areaValue === '4') {
      filteredListings = filteredListings?.filter((property) => {
        return property?.area > 50 * 272.25
      })
    }
  }
  if (priceValue?.length !== 0) {
    if (priceValue === '1') {
      filteredListings = filteredListings?.filter((property) => {
        return property?.propertyPrice <= 1000000
      })
    } else if (priceValue === '2') {
      filteredListings = filteredListings?.filter((property) => {
        return (
          property?.propertyPrice > 1000000 &&
          property?.propertyPrice <= 5000000
        )
      })
    } else if (priceValue === '3') {
      filteredListings = filteredListings?.filter((property) => {
        return (
          property?.propertyPrice > 5000000 &&
          property?.propertyPrice <= 10000000
        )
      })
    } else if (priceValue === '4') {
      filteredListings = filteredListings?.filter((property) => {
        return property?.propertyPrice > 10000000
      })
    }
  }
  return filteredListings
}
