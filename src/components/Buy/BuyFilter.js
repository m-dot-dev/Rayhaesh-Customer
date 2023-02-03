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
    // if (areaValue === 1) {
    //   filteredListings = allproperties.filter(
    //     (listing) => listing.areaSize <= 5 && listing.areaSizeUnit === 'Marla',
    //     areaValue.includes(listing.areaSize + listing.areaSizeUnit),
    //   )
    //   console.log('====================================')
    //   console.log('area value i got in areaValue 1 condition: ', areaValue)
    //   console.log('====================================')
    // }
    // filteredListings = allproperties.filter((listing) =>
    //   areaValue.includes(listing.propertyArea),
    // )
    console.log('====================================')
    console.log('area value i got in areaValue 1 condition: ', areaValue)
    console.log('====================================')
  } else if (
    city.length === 0 &&
    categoryValue.length === 0 &&
    subCategoryValue.length === 0 &&
    areaValue.length === 0
  ) {
    filteredListings = allproperties.filter((listing) =>
      priceValue.includes(listing.propertyPrice),
    )
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

  console.log('====================================')
  console.log('@@@T1 City selected in js file: ', city)
  console.log('@@@T1 Category selected in js file: ', categoryValue)
  console.log('@@@T1 SubCategory selected in js file: ', subCategoryValue)
  console.log('@@@T1 Price selected in js file: ', priceValue)
  console.log('@@@T1 Area selected in js file: ', areaValue)
  console.log('====================================')

  return filteredListings
}
