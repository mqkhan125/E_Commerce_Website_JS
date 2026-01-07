import { getCartProductFromLocalStorage } from "./getCartProductFromLocalStorage";

export const updateCartProductTotal = () => {

    let productSubTotal = document.querySelector(".productSubTotal");
    let productFinalTotal = document.querySelector(".productFinalTotal");

    let localCartProducts = getCartProductFromLocalStorage();
    let initailValue = 0;

    let totalProductPrice = localCartProducts.reduce((accum, curElem) => {
        let productPrice = parseInt(curElem.price) || 0;
        return accum + productPrice;
    }, initailValue)
    

    console.log(totalProductPrice)
    productSubTotal.textContent = `Rs${totalProductPrice}`;
    productFinalTotal.textContent = (`Rs${totalProductPrice + 50}`)

}