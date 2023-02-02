export function filtering(city, categoryValue, allproperties) {
  let filteredListings = []

  if (city.length === 0 && categoryValue.length === 0) {
    filteredListings = allproperties
  } else if (city.length === 0) {
    filteredListings = allproperties.filter((listing) =>
      categoryValue.includes(listing.propertyCategory),
    )
  } else if (categoryValue.length === 0) {
    filteredListings = allproperties.filter((listing) =>
      city.includes(listing.propertyCity),
    )
  } else {
    filteredListings = allproperties.filter(
      (listing) =>
        city.includes(listing.propertyCity) &&
        categoryValue.includes(listing.propertyCategory),
    )
  }

  // if (city.length === 0 && categoryValue.length === 0) {
  //   return allproperties
  // }

  // let filteredListings = allproperties.filter(
  //   (listing) =>
  //     city.includes(listing.propertyCity) ||
  //     categoryValue.includes(listing.propertyCategory),
  // )

  console.log('====================================')
  console.log('city  in jsx file', city)
  console.log('listings in jsx file', filteredListings)
  console.log('category selected in filtering: ', categoryValue)
  console.log('====================================')
  return filteredListings
}
