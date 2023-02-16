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
    if (areaValue === 1) {
      filteredListings = allproperties.filter((listing) =>
        areaValue.includes(listing.areaSize),
      )
      if (filteredListings.includes(m)) {
        const marlaToSquareFeet = 272.25 * m
        const marlaToSquareFeetArray = areaValue.map((item) =>
          item.replace(m, marlaToSquareFeet),
        )
        filteredListings = allproperties.filter((listing) =>
          marlaToSquareFeetArray.includes(listing.areaSize),
        )
      } else if (areaValue.includes(sqyd)) {
        const squareYardToSquareFeet = 9 * sqyd
        const squareYardToSquareFeetArray = areaValue.map((item) =>
          item.replace(sqyd, squareYardToSquareFeet),
        )
        filteredListings = allproperties.filter((listing) =>
          squareYardToSquareFeetArray.includes(listing.areaSize),
        )
      } else if (areaValue.includes(sqmt)) {
        const squareMeterToSquareFeet = 10.7639 * sqmt
        const squareMeterToSquareFeetArray = areaValue.map((item) =>
          item.replace(sqmt, squareMeterToSquareFeet),
        )
        filteredListings = allproperties.filter((listing) =>
          squareMeterToSquareFeetArray.includes(listing.areaSize),
        )
      } else if (areaValue.includes(cnl)) {
        const canalToSquareFeet = 6272 * cnl
        const canalToSquareFeetArray = areaValue.map((item) =>
          item.replace(cnl, canalToSquareFeet),
        )
        filteredListings = allproperties.filter((listing) =>
          canalToSquareFeetArray.includes(listing.areaSize),
        )
      } else {
        filteredListings = allproperties.filter((listing) =>
          areaValue.includes(listing.areaSize),
        )
      }
    }

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

  return filteredListings
}
