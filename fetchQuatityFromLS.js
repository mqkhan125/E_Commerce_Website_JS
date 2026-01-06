import { getCartProductFromLocalStorage } from "./getCartProductFromLocalStorage";

export const fetchQuantityFromLS = (id, price) => {

  let cartProducts = getCartProductFromLocalStorage()

    let existanceProducts = cartProducts.find((curProd) => curProd.id === id)
    let quantity = 1;

    if(existanceProducts) {
      quantity = existanceProducts.quantity;
      price = existanceProducts.price
    }

    return {quantity, price}
}