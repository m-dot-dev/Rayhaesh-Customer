export function filtering(
  city,
  categoryValue,
  subCategoryValue,
  areaValue,
  priceValue,
  allproperties,
) {
  let filteredListings = []

  // mathematical formulas for converting values to square feet
  const m = 'Marla'
  const sqyd = 'Sq.Ft'
  const sqmt = 'Sq.Yard'
  const cnl = 'canal'

  if (
    city.length === 0 &&
    categoryValue.length === 0 &&
    subCategoryValue.length === 0 &&
    priceValue.length === 0 &&
    areaValue.length === 0
  ) {
    filteredListings = allproperties
  } else if (
    city.length === 0 &&
    categoryValue.length === 0 &&
    subCategoryValue.length === 0 &&
    priceValue.length === 0
  ) {
    console.log('====================================')
    console.log('area filter code here')
    console.log('====================================')
  } else if (
    city.length === 0 &&
    categoryValue.length === 0 &&
    subCategoryValue.length === 0 &&
    areaValue.length === 0
  ) {
    if (priceValue.includes('1')) {
      filteredListings = allproperties.filter(
        (listing) => listing?.totalPrice < 1000000,
      )
    }
    if (priceValue.includes('2')) {
      filteredListings = allproperties.filter(
        (listing) =>
          listing?.totalPrice >= 1000000 && listing?.totalPrice < 5000000,
      )
    }
    if (priceValue.includes('3')) {
      filteredListings = allproperties.filter(
        (listing) =>
          listing?.totalPrice >= 5000000 && listing?.totalPrice < 10000000,
      )
    }
    if (priceValue.includes('4')) {
      filteredListings = allproperties.filter(
        (listing) => listing?.totalPrice >= 10000000,
      )
    }
  } else if (
    city.length === 0 &&
    categoryValue.length === 0 &&
    priceValue.length === 0 &&
    areaValue.length === 0
  ) {
    filteredListings = allproperties.filter((listing) =>
      subCategoryValue.includes(listing.propertySubCategory),
    )
  } else if (
    city.length === 0 &&
    subCategoryValue.length === 0 &&
    priceValue.length === 0 &&
    areaValue.length === 0
  ) {
    filteredListings = allproperties.filter((listing) =>
      categoryValue.includes(listing.propertyCategory),
    )
  } else if (
    categoryValue.length === 0 &&
    subCategoryValue.length === 0 &&
    priceValue.length === 0 &&
    areaValue.length === 0
  ) {
    filteredListings = allproperties.filter((listing) =>
      city.includes(listing.propertyCity),
    )
  } else if (
    city.length === 0 &&
    categoryValue.length === 0 &&
    subCategoryValue.length === 0
  ) {
    filteredListings = allproperties.filter(
      (listing) =>
        priceValue.includes(listing.propertyPrice) &&
        areaValue.includes(listing.propertyArea),
    )
  } else if (
    city.length === 0 &&
    categoryValue.length === 0 &&
    priceValue.length === 0
  ) {
    filteredListings = allproperties.filter(
      (listing) =>
        subCategoryValue.includes(listing.propertySubCategory) &&
        areaValue.includes(listing.propertyArea),
    )
  } else if (
    city.length === 0 &&
    categoryValue.length === 0 &&
    areaValue.length === 0
  ) {
    filteredListings = allproperties.filter(
      (listing) =>
        subCategoryValue.includes(listing.propertySubCategory) &&
        priceValue.includes(listing.propertyPrice),
    )
  } else if (
    city.length === 0 &&
    subCategoryValue.length === 0 &&
    priceValue.length === 0
  ) {
    filteredListings = allproperties.filter(
      (listing) =>
        categoryValue.includes(listing.propertyCategory) &&
        areaValue.includes(listing.propertyArea),
    )
  } else if (
    city.length === 0 &&
    subCategoryValue.length === 0 &&
    areaValue.length === 0
  ) {
    filteredListings = allproperties.filter(
      (listing) =>
        categoryValue.includes(listing.propertyCategory) &&
        priceValue.includes(listing.propertyPrice),
    )
  } else if (
    city.length === 0 &&
    priceValue.length === 0 &&
    areaValue.length === 0
  ) {
    filteredListings = allproperties.filter(
      (listing) =>
        categoryValue.includes(listing.propertyCategory) &&
        subCategoryValue.includes(listing.propertySubCategory),
    )
  } else if (
    categoryValue.length === 0 &&
    subCategoryValue.length === 0 &&
    priceValue.length === 0
  ) {
    filteredListings = allproperties.filter(
      (listing) =>
        city.includes(listing.propertyCity) &&
        areaValue.includes(listing.propertyArea),
    )
  } else if (
    categoryValue.length === 0 &&
    subCategoryValue.length === 0 &&
    areaValue.length === 0
  ) {
    filteredListings = allproperties.filter(
      (listing) =>
        city.includes(listing.propertyCity) &&
        priceValue.includes(listing.propertyPrice),
    )
  } else if (
    categoryValue.length === 0 &&
    priceValue.length === 0 &&
    areaValue.length === 0
  ) {
    filteredListings = allproperties.filter(
      (listing) =>
        city.includes(listing.propertyCity) &&
        subCategoryValue.includes(listing.propertySubCategory),
    )
  } else if (
    subCategoryValue.length === 0 &&
    priceValue.length === 0 &&
    areaValue.length === 0
  ) {
    filteredListings = allproperties.filter(
      (listing) =>
        city.includes(listing.propertyCity) &&
        categoryValue.includes(listing.propertyCategory),
    )
  } else if (city.length === 0 && categoryValue.length === 0) {
    filteredListings = allproperties.filter(
      (listing) =>
        subCategoryValue.includes(listing.propertySubCategory) &&
        priceValue.includes(listing.propertyPrice) &&
        areaValue.includes(listing.propertyArea),
    )
  } else if (city.length === 0 && subCategoryValue.length === 0) {
    filteredListings = allproperties.filter(
      (listing) =>
        categoryValue.includes(listing.propertyCategory) &&
        priceValue.includes(listing.propertyPrice) &&
        areaValue.includes(listing.propertyArea),
    )
  } else if (city.length === 0 && priceValue.length === 0) {
    filteredListings = allproperties.filter(
      (listing) =>
        categoryValue.includes(listing.propertyCategory) &&
        subCategoryValue.includes(listing.propertySubCategory) &&
        areaValue.includes(listing.propertyArea),
    )
  } else if (city.length === 0 && areaValue.length === 0) {
    filteredListings = allproperties.filter(
      (listing) =>
        categoryValue.includes(listing.propertyCategory) &&
        subCategoryValue.includes(listing.propertySubCategory) &&
        priceValue.includes(listing.propertyPrice),
    )
  } else if (categoryValue.length === 0 && subCategoryValue.length === 0) {
    filteredListings = allproperties.filter(
      (listing) =>
        city.includes(listing.propertyCity) &&
        priceValue.includes(listing.propertyPrice) &&
        areaValue.includes(listing.propertyArea),
    )
  } else if (categoryValue.length === 0 && priceValue.length === 0) {
    filteredListings = allproperties.filter(
      (listing) =>
        city.includes(listing.propertyCity) &&
        subCategoryValue.includes(listing.propertySubCategory) &&
        areaValue.includes(listing.propertyArea),
    )
  } else if (categoryValue.length === 0 && areaValue.length === 0) {
    filteredListings = allproperties.filter(
      (listing) =>
        city.includes(listing.propertyCity) &&
        subCategoryValue.includes(listing.propertySubCategory) &&
        priceValue.includes(listing.propertyPrice),
    )
  } else if (subCategoryValue.length === 0 && priceValue.length === 0) {
    filteredListings = allproperties.filter(
      (listing) =>
        city.includes(listing.propertyCity) &&
        categoryValue.includes(listing.propertyCategory) &&
        areaValue.includes(listing.propertyArea),
    )
  } else if (subCategoryValue.length === 0 && areaValue.length === 0) {
    filteredListings = allproperties.filter(
      (listing) =>
        city.includes(listing.propertyCity) &&
        categoryValue.includes(listing.propertyCategory) &&
        priceValue.includes(listing.propertyPrice),
    )
  } else if (priceValue.length === 0 && areaValue.length === 0) {
    filteredListings = allproperties.filter(
      (listing) =>
        city.includes(listing.propertyCity) &&
        categoryValue.includes(listing.propertyCategory) &&
        subCategoryValue.includes(listing.propertySubCategory),
    )
  } else if (city.length === 0) {
    filteredListings = allproperties.filter(
      (listing) =>
        categoryValue.includes(listing.propertyCategory) &&
        subCategoryValue.includes(listing.propertySubCategory) &&
        priceValue.includes(listing.propertyPrice) &&
        areaValue.includes(listing.propertyArea),
    )
  } else if (categoryValue.length === 0) {
    filteredListings = allproperties.filter(
      (listing) =>
        city.includes(listing.propertyCity) &&
        subCategoryValue.includes(listing.propertySubCategory) &&
        priceValue.includes(listing.propertyPrice) &&
        areaValue.includes(listing.propertyArea),
    )
  } else if (subCategoryValue.length === 0) {
    filteredListings = allproperties.filter(
      (listing) =>
        city.includes(listing.propertyCity) &&
        categoryValue.includes(listing.propertyCategory) &&
        priceValue.includes(listing.propertyPrice) &&
        areaValue.includes(listing.propertyArea),
    )
  } else if (priceValue.length === 0) {
    filteredListings = allproperties.filter(
      (listing) =>
        city.includes(listing.propertyCity) &&
        categoryValue.includes(listing.propertyCategory) &&
        subCategoryValue.includes(listing.propertySubCategory) &&
        areaValue.includes(listing.propertyArea),
    )
  } else if (areaValue.length === 0) {
    filteredListings = allproperties.filter(
      (listing) =>
        city.includes(listing.propertyCity) &&
        categoryValue.includes(listing.propertyCategory) &&
        subCategoryValue.includes(listing.propertySubCategory) &&
        priceValue.includes(listing.propertyPrice),
    )
  } else {
    filteredListings = allproperties.filter(
      (listing) =>
        city.includes(listing.propertyCity) &&
        categoryValue.includes(listing.propertyCategory) &&
        subCategoryValue.includes(listing.propertySubCategory) &&
        priceValue.includes(listing.propertyPrice) &&
        areaValue.includes(listing.propertyArea),
    )
  }

  return filteredListings
}
