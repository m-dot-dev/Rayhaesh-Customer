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
  }
  // else if (
  //   city.length === 0 &&
  //   categoryValue.length === 0 &&
  //   subCategoryValue.length === 0 &&
  //   priceValue.length === 0
  // ) {
  //   console.log('====================================')
  //   console.log('area filter code here')
  //   console.log('====================================')
  // } else if (
  //   city.length === 0 &&
  //   categoryValue.length === 0 &&
  //   subCategoryValue.length === 0 &&
  //   areaValue.length === 0
  // ) {
  //   if (priceValue.includes('1')) {
  //     filteredListings = allproperties.filter(
  //       (listing) => listing?.totalPrice < 1000000,
  //     )
  //   }
  //   if (priceValue.includes('2')) {
  //     filteredListings = allproperties.filter(
  //       (listing) =>
  //         listing?.totalPrice >= 1000000 && listing?.totalPrice < 5000000,
  //     )
  //   }
  //   if (priceValue.includes('3')) {
  //     filteredListings = allproperties.filter(
  //       (listing) =>
  //         listing?.totalPrice >= 5000000 && listing?.totalPrice < 10000000,
  //     )
  //   }
  //   if (priceValue.includes('4')) {
  //     filteredListings = allproperties.filter(
  //       (listing) => listing?.totalPrice >= 10000000,
  //     )
  //   }
  // } else if (
  //   city.length === 0 &&
  //   categoryValue.length === 0 &&
  //   priceValue.length === 0 &&
  //   areaValue.length === 0
  // ) {
  //   filteredListings = allproperties.filter((listing) =>
  //     subCategoryValue.includes(listing.propertySubCategory),
  //   )
  // } else if (
  //   city.length === 0 &&
  //   subCategoryValue.length === 0 &&
  //   priceValue.length === 0 &&
  //   areaValue.length === 0
  // ) {
  //   filteredListings = allproperties.filter((listing) =>
  //     categoryValue.includes(listing.propertyCategory),
  //   )
  // } else if (
  //   categoryValue.length === 0 &&
  //   subCategoryValue.length === 0 &&
  //   priceValue.length === 0 &&
  //   areaValue.length === 0
  // ) {
  //   filteredListings = allproperties.filter((listing) =>
  //     city.includes(listing.propertyCity),
  //   )
  // } else if (
  //   city.length === 0 &&
  //   categoryValue.length === 0 &&
  //   subCategoryValue.length === 0
  // ) {
  //   filteredListings = allproperties.filter(
  //     (listing) =>
  //       priceValue.includes(listing?.totalPrice) &&
  //       areaValue.includes(listing?.propertyArea),
  //   )
  // } else if (
  //   city.length === 0 &&
  //   categoryValue.length === 0 &&
  //   priceValue.length === 0
  // ) {
  //   filteredListings = allproperties.filter(
  //     (listing) =>
  //       subCategoryValue.includes(listing.propertySubCategory) &&
  //       areaValue.includes(listing.propertyArea),
  //   )
  // } else if (
  //   city.length === 0 &&
  //   categoryValue.length === 0 &&
  //   areaValue.length === 0
  // ) {
  //   filteredListings = allproperties.filter(
  //     (listing) =>
  //       subCategoryValue.includes(listing.propertySubCategory) &&
  //       priceValue.includes(listing.totalPrice),
  //   )
  // } else if (
  //   city.length === 0 &&
  //   subCategoryValue.length === 0 &&
  //   priceValue.length === 0
  // ) {
  //   filteredListings = allproperties.filter(
  //     (listing) =>
  //       categoryValue.includes(listing.propertyCategory) &&
  //       areaValue.includes(listing.propertyArea),
  //   )
  // } else if (
  //   city.length === 0 &&
  //   subCategoryValue.length === 0 &&
  //   areaValue.length === 0
  // ) {
  //   filteredListings = allproperties.filter(
  //     (listing) =>
  //       categoryValue.includes(listing.propertyCategory) &&
  //       priceValue.includes(listing.totalPrice),
  //   )
  // } else if (
  //   city.length === 0 &&
  //   priceValue.length === 0 &&
  //   areaValue.length === 0
  // ) {
  //   filteredListings = allproperties.filter(
  //     (listing) =>
  //       categoryValue.includes(listing.propertyCategory) &&
  //       subCategoryValue.includes(listing.propertySubCategory),
  //   )
  // } else if (
  //   categoryValue.length === 0 &&
  //   subCategoryValue.length === 0 &&
  //   priceValue.length === 0
  // ) {
  //   filteredListings = allproperties.filter(
  //     (listing) =>
  //       city.includes(listing.propertyCity) &&
  //       areaValue.includes(listing.propertyArea),
  //   )
  // } else if (
  //   categoryValue.length === 0 &&
  //   subCategoryValue.length === 0 &&
  //   areaValue.length === 0
  // ) {
  //   filteredListings = allproperties.filter(
  //     (listing) =>
  //       city.includes(listing.propertyCity) &&
  //       priceValue.includes(listing.totalPrice),
  //   )
  // } else if (
  //   categoryValue.length === 0 &&
  //   priceValue.length === 0 &&
  //   areaValue.length === 0
  // ) {
  //   filteredListings = allproperties.filter(
  //     (listing) =>
  //       city.includes(listing.propertyCity) &&
  //       subCategoryValue.includes(listing.propertySubCategory),
  //   )
  // } else if (
  //   subCategoryValue.length === 0 &&
  //   priceValue.length === 0 &&
  //   areaValue.length === 0
  // ) {
  //   filteredListings = allproperties.filter(
  //     (listing) =>
  //       city.includes(listing.propertyCity) &&
  //       categoryValue.includes(listing.propertyCategory),
  //   )
  // } else if (city.length === 0 && categoryValue.length === 0) {
  //   filteredListings = allproperties.filter(
  //     (listing) =>
  //       subCategoryValue.includes(listing.propertySubCategory) &&
  //       priceValue.includes(listing.totalPrice) &&
  //       areaValue.includes(listing.propertyArea),
  //   )
  // } else if (city.length === 0 && subCategoryValue.length === 0) {
  //   filteredListings = allproperties.filter(
  //     (listing) =>
  //       categoryValue.includes(listing.propertyCategory) &&
  //       priceValue.includes(listing.totalPrice) &&
  //       areaValue.includes(listing.propertyArea),
  //   )
  // } else if (city.length === 0 && priceValue.length === 0) {
  //   filteredListings = allproperties.filter(
  //     (listing) =>
  //       categoryValue.includes(listing.propertyCategory) &&
  //       subCategoryValue.includes(listing.propertySubCategory) &&
  //       areaValue.includes(listing.propertyArea),
  //   )
  // } else if (city.length === 0 && areaValue.length === 0) {
  //   filteredListings = allproperties.filter(
  //     (listing) =>
  //       categoryValue.includes(listing.propertyCategory) &&
  //       subCategoryValue.includes(listing.propertySubCategory) &&
  //       priceValue.includes(listing.totalPrice),
  //   )
  // } else if (categoryValue.length === 0 && subCategoryValue.length === 0) {
  //   filteredListings = allproperties.filter(
  //     (listing) =>
  //       city.includes(listing.propertyCity) &&
  //       priceValue.includes(listing.totalPrice) &&
  //       areaValue.includes(listing.propertyArea),
  //   )
  // } else if (categoryValue.length === 0 && priceValue.length === 0) {
  //   filteredListings = allproperties.filter(
  //     (listing) =>
  //       city.includes(listing.propertyCity) &&
  //       subCategoryValue.includes(listing.propertySubCategory) &&
  //       areaValue.includes(listing.propertyArea),
  //   )
  // } else if (categoryValue.length === 0 && areaValue.length === 0) {
  //   filteredListings = allproperties.filter(
  //     (listing) =>
  //       city.includes(listing.propertyCity) &&
  //       subCategoryValue.includes(listing.propertySubCategory) &&
  //       priceValue.includes(listing.totalPrice),
  //   )
  // } else if (subCategoryValue.length === 0 && priceValue.length === 0) {
  //   filteredListings = allproperties.filter(
  //     (listing) =>
  //       city.includes(listing.propertyCity) &&
  //       categoryValue.includes(listing.propertyCategory) &&
  //       areaValue.includes(listing.propertyArea),
  //   )
  // } else if (subCategoryValue.length === 0 && areaValue.length === 0) {
  //   filteredListings = allproperties.filter(
  //     (listing) =>
  //       city.includes(listing.propertyCity) &&
  //       categoryValue.includes(listing.propertyCategory) &&
  //       priceValue.includes(listing.totalPrice),
  //   )
  // } else if (priceValue.length === 0 && areaValue.length === 0) {
  //   filteredListings = allproperties.filter(
  //     (listing) =>
  //       city.includes(listing.propertyCity) &&
  //       categoryValue.includes(listing.propertyCategory) &&
  //       subCategoryValue.includes(listing.propertySubCategory),
  //   )
  // } else if (city.length === 0) {
  //   filteredListings = allproperties.filter(
  //     (listing) =>
  //       categoryValue.includes(listing.propertyCategory) &&
  //       subCategoryValue.includes(listing.propertySubCategory) &&
  //       priceValue.includes(listing.totalPrice) &&
  //       areaValue.includes(listing.propertyArea),
  //   )
  // } else if (categoryValue.length === 0) {
  //   filteredListings = allproperties.filter(
  //     (listing) =>
  //       city.includes(listing.propertyCity) &&
  //       subCategoryValue.includes(listing.propertySubCategory) &&
  //       priceValue.includes(listing.totalPrice) &&
  //       areaValue.includes(listing.propertyArea),
  //   )
  // } else if (subCategoryValue.length === 0) {
  //   filteredListings = allproperties.filter(
  //     (listing) =>
  //       city.includes(listing.propertyCity) &&
  //       categoryValue.includes(listing.propertyCategory) &&
  //       priceValue.includes(listing.totalPrice) &&
  //       areaValue.includes(listing.propertyArea),
  //   )
  // } else if (priceValue.length === 0) {
  //   filteredListings = allproperties.filter(
  //     (listing) =>
  //       city.includes(listing.propertyCity) &&
  //       categoryValue.includes(listing.propertyCategory) &&
  //       subCategoryValue.includes(listing.propertySubCategory) &&
  //       areaValue.includes(listing.propertyArea),
  //   )
  // } else if (areaValue.length === 0) {
  //   filteredListings = allproperties.filter(
  //     (listing) =>
  //       city.includes(listing.propertyCity) &&
  //       categoryValue.includes(listing.propertyCategory) &&
  //       subCategoryValue.includes(listing.propertySubCategory) &&
  //       priceValue.includes(listing.totalPrice),
  //   )
  // } else {
  //   filteredListings = allproperties.filter(
  //     (listing) =>
  //       city.includes(listing.propertyCity) &&
  //       categoryValue.includes(listing.propertyCategory) &&
  //       subCategoryValue.includes(listing.propertySubCategory) &&
  //       priceValue.includes(listing.totalPrice) &&
  //       areaValue.includes(listing.propertyArea),
  //   )
  // }
  else {
    filteredListings = allproperties.filter((listing) => {
      let calculatedAreaValue

      calculatedAreaValue =
        listing?.area < 1361.25
          ? '1'
          : listing?.area < 5445
          ? '2'
          : listing?.area < 27225
          ? '3'
          : listing?.area < 27225
          ? '4'
          : null

      let calculatedPriceValue

      calculatedPriceValue =
        listing?.totalPrice < 1500000
          ? '1'
          : listing?.totalPrice < 5000000
          ? '2'
          : listing?.totalPrice < 10000000
          ? '3'
          : listing?.totalPrice < 10000000
          ? '4'
          : null

      let cityFilter = city.length === 0 || city.includes(listing.propertyCity)
      let categoryFilter =
        categoryValue.length === 0 ||
        categoryValue.includes(listing.propertyCategory)
      let subCategoryFilter =
        subCategoryValue.length === 0 ||
        subCategoryValue.includes(listing.propertySubCategory)
      let priceFilter =
        priceValue.length === 0 || priceValue.includes(calculatedPriceValue)
      let areaFilter =
        areaValue.length === 0 || areaValue.includes(calculatedAreaValue)
      return (
        cityFilter &&
        categoryFilter &&
        subCategoryFilter &&
        priceFilter &&
        areaFilter
      )
    })
  }
  return filteredListings
}
