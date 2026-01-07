import { getCartProductFromLocalStorage } from "./getCartProductFromLocalStorage";
import { updateCartProductTotal } from "./updateCartProductTotal";

export const incrementDecrementBtn = (event, id, price, stock) => {
    let currentCartElement = document.querySelector(`#card${id}`)
     const productQuantity = currentCartElement.querySelector(".productQuantity");
     const productPrice = currentCartElement.querySelector(".productPrice")

   let quantity = 1;
   let localStoragePrice = 0;
   
   // get data from localStorage
   let localCartProduct = getCartProductFromLocalStorage();
   let existanceProducts = localCartProduct.find((curProd) => curProd.id === id)

   if(existanceProducts) {
     quantity = existanceProducts.quantity;
     localStoragePrice = existanceProducts.price;
   } else {
    localStoragePrice = price;
    price = price
   }


   if (event.target.className === "cartIncrement") {
     if (quantity < stock) {
       quantity += 1;
     } else if (quantity === stock) {
       quantity = stock;
     }
   }

   if (event.target.className === "cartDecrement") {
     if (quantity > 1) {
       quantity -= 1;
     }
   }

   // finally we will update price in localStorage.
   localStoragePrice = price * quantity
   localStoragePrice = Number(localStoragePrice.toFixed(2))

   let updatedCart = { id, quantity, price: localStoragePrice };

    updatedCart = localCartProduct.map((curProd) => {
      return curProd.id === id ? updatedCart : curProd;
    });
    console.log(updatedCart);
    localStorage.setItem("cartProductLS", JSON.stringify(updatedCart));

    // update price and quantity in UI 
    productQuantity.innerText = quantity;
    productPrice.innerText = localStoragePrice;

       // calculating the cart total in our cartProduct page
       updateCartProductTotal()

}