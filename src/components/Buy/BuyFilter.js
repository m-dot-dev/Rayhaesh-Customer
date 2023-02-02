export function filtering(city, allproperties) {
  if (city.length === 0) {
    return allproperties
  }
  let filteredListings = allproperties.filter((listing) =>
    city.includes(listing.propertyCity),
  )
  console.log('====================================')
  console.log('city  in jsx file', city)
  console.log('listings in jsx file', filteredListings)
  console.log('====================================')
  return filteredListings
}
