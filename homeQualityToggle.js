export const homeQualityToggle = (event, id, stock) => {
    const currCardElement = document.querySelector(`#card${id}`)
    console.log(currCardElement)

    const productQuantity = currCardElement.querySelector(".productQuantity");
    // console.log(productQuantity)
    let quantity = parseInt(productQuantity.getAttribute("data-quality") || 1)

    if(event.target.className === "cartIncrement"){
        if(quantity < stock){
            quantity += 1;
        }
        else if(quantity === stock){
            quantity = stock;
        }
    }

     if (event.target.className === "cartDecrement") {
        if(quantity > 1){
            quantity -= 1;
        }
     }

    productQuantity.innerText = quantity;
    productQuantity.setAttribute('data-quality', quantity)
    return quantity;

};