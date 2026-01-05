export const homeQualityToggle = (event, id, stock) => {
    const currCardElement = document.querySelector(`#card${id}`)
    console.log(currCardElement)

    const productQuantity = currCardElement.querySelector(".productQuantity");
    // console.log(productQuantity)
    let quality = parseInt(productQuantity.getAttribute("data-quality") || 1)

    if(event.target.className === "cartIncrement"){
        if(quality < stock){
            quality += 1;
        }
        else if(quality === stock){
            quality = stock;
        }
    }

     if (event.target.className === "cartDecrement") {
        if(quality > 1){
            quality -= 1;
        }
     }

    productQuantity.innerText = quality;
    productQuantity.setAttribute('data-quality', quality)
    return quality;

};