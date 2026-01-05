import { getCartProductFromLocalStorage } from "./getCartProductFromLocalStorage";
import { updateCartValue } from "./updateCartValue";

getCartProductFromLocalStorage();
export const addToCart = (event, id, stock) => {
  let arrLocalStorageProduct = getCartProductFromLocalStorage();

  const currProductElem = document.querySelector(`#card${id}`);
  let quantity = currProductElem.querySelector(".productQuantity").innerText;
  let price = currProductElem.querySelector(".productPrice").innerText;

  // find id and quantity from the cartbtnVale
  let existanceProducts = arrLocalStorageProduct.find((curProd) => curProd.id === id);

  // update the quantity of every cart
  if (existanceProducts && quantity > 1) {

    quantity = Number(existanceProducts.quantity) + Number(quantity);
    price = Number(price * quantity);
    let updatedCart = { id, quantity, price};

   updatedCart = arrLocalStorageProduct.map((curProd) => {
     return curProd.id === id ? updatedCart : curProd;
   });
    console.log(updatedCart);
    localStorage.setItem("cartProductLS", JSON.stringify(updatedCart));
  }

   if (existanceProducts) {
     alert("bhai duplicate hai");
     return false;
   }

  price = price.replace("Rs", "");
  price = Number(price * quantity);
  quantity = Number(quantity);

  arrLocalStorageProduct.push({ id, price, quantity });
  localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct));

  // update the cart btn value
  updateCartValue(arrLocalStorageProduct);
};
