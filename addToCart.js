
import { getCartProductFromLocalStorage } from "./getCartProductFromLocalStorage";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";

getCartProductFromLocalStorage();
export const addToCart = (event, id, stock) => {
  let arrLocalStorageProduct = getCartProductFromLocalStorage();

  const currProductElem = document.querySelector(`#card${id}`);
  let quantity = currProductElem.querySelector(".productQuantity").innerText;
  let price = currProductElem
    .querySelector(".productPrice")
    .innerText.replace("Rs", "")
    .trim();

  // find id and quantity from the cartbtnVale
  let existanceProducts = arrLocalStorageProduct.find(
    (curProd) => curProd.id === id
  );

  // IF PRODUCT EXISTS → UPDATE
  if (existanceProducts && quantity > 1) {
    quantity = Number(existanceProducts.quantity) + Number(quantity);
    price = Number(price * quantity);
    let updatedCart = { id, quantity, price };

    updatedCart = arrLocalStorageProduct.map((curProd) => {
      return curProd.id === id ? updatedCart : curProd;
    });
    console.log(updatedCart);
    localStorage.setItem("cartProductLS", JSON.stringify(updatedCart));
  }

  if (existanceProducts) {
    alert("Product quantity updated in cart");
    return false;
  }

  price = Number(price * quantity);
  quantity = Number(quantity);

  arrLocalStorageProduct.push({ id, price, quantity });
  localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct));

  // update the cart btn value
  updateCartValue(arrLocalStorageProduct);

  showToast("add", id);
};
