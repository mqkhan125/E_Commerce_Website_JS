import { getCartProductFromLocalStorage } from "./getCartProductFromLocalStorage"
import { updateCartProductTotal } from "./updateCartProductTotal"
import { updateCartValue } from "./updateCartValue"

export const removeTheCartFromCart = (id) => {
  
    let cartProducts = getCartProductFromLocalStorage()

    let filteredProducts = cartProducts.filter((curProd) => curProd.id !== id)

    console.log(filteredProducts)
    //update the localStorage after removing the item
      localStorage.setItem("cartProductLS", JSON.stringify(filteredProducts));
    
      // handle increment and descrement btn
      

      // to romove the div section onclick
      let removeDiv = document.querySelector(`#card${id}`)

      if(removeDiv){
          removeDiv.remove()
      }

      updateCartValue(filteredProducts)

        // calculating the cart total in our cartProduct page
         updateCartProductTotal()
}