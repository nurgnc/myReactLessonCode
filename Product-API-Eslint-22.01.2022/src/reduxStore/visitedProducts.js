const ADD_VISITED_PRODUCT = "ADD_VISITED_PRODUCT";

const addVisitedProduct = (productId) => ({
  type: ADD_VISITED_PRODUCT,
  payload: productId
})

const visitedProductReducer = (productIds = [], action) => {
  switch (action.type) {
    case ADD_VISITED_PRODUCT:
      let items;
      if (typeof (productIds) === "number") {
        items = []
        items.push(productIds)
      } else {
        items = [...productIds]
      }
      if (items.indexOf(action.payload) >= 0) {
        items = items.filter(id => id !== action.payload)
      }
      items = items.slice(0, 4)
      items.unshift(action.payload)
      return items
    default:
      return productIds
  }
}

export { addVisitedProduct, visitedProductReducer }