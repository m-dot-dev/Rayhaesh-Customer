export function filtering(
  city,
  categoryValue,
  subCategoryValue,
  allproperties,
) {
  let filteredListings = []

  if (
    city.length === 0 &&
    categoryValue.length === 0 &&
    subCategoryValue.length === 0
  ) {
    filteredListings = allproperties
  } else if (city.length === 0 && categoryValue.length === 0) {
    filteredListings = allproperties.filter((listing) =>
      subCategoryValue.includes(listing.propertySubCategory),
    )
  } else if (city.length === 0 && subCategoryValue.length === 0) {
    filteredListings = allproperties.filter((listing) =>
      categoryValue.includes(listing.propertyCategory),
    )
  } else if (categoryValue.length === 0 && subCategoryValue.length === 0) {
    filteredListings = allproperties.filter((listing) =>
      city.includes(listing.propertyCity),
    )
  } else if (city.length === 0) {
    filteredListings = allproperties.filter(
      (listing) =>
        categoryValue.includes(listing.propertyCategory) &&
        subCategoryValue.includes(listing.propertySubCategory),
    )
  } else if (categoryValue.length === 0) {
    filteredListings = allproperties.filter(
      (listing) =>
        city.includes(listing.propertyCity) &&
        subCategoryValue.includes(listing.propertySubCategory),
    )
  } else if (subCategoryValue.length === 0) {
    filteredListings = allproperties.filter(
      (listing) =>
        city.includes(listing.propertyCity) &&
        categoryValue.includes(listing.propertyCategory),
    )
  } else {
    filteredListings = allproperties.filter(
      (listing) =>
        city.includes(listing.propertyCity) &&
        categoryValue.includes(listing.propertyCategory) &&
        subCategoryValue.includes(listing.propertySubCategory),
    )
  }

  // if (city.length === 0 && categoryValue.length === 0) {
  //   filteredListings = allproperties
  // } else if (city.length === 0) {
  //   filteredListings = allproperties.filter((listing) =>
  //     categoryValue.includes(listing.propertyCategory),
  //   )
  // } else if (categoryValue.length === 0) {
  //   filteredListings = allproperties.filter((listing) =>
  //     city.includes(listing.propertyCity),
  //   )
  // } else {
  //   filteredListings = allproperties.filter(
  //     (listing) =>
  //       city.includes(listing.propertyCity) &&
  //       categoryValue.includes(listing.propertyCategory),
  //   )
  // }

  console.log('====================================')
  console.log('city  in jsx file', city)
  console.log('listings in jsx file', filteredListings)
  console.log('category selected in filtering: ', categoryValue)
  console.log('subCategory selected in filtering: ', subCategoryValue)
  console.log('====================================')
  return filteredListings
}
