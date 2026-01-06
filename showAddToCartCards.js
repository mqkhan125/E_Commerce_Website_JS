import products from "./Api/Products.json";
import { fetchQuantityFromLS } from "./fetchQuatityFromLS";
import { getCartProductFromLocalStorage } from "./getCartProductFromLocalStorage";

let cartProducts = getCartProductFromLocalStorage();

let filteredProducts = products.filter((curProd) => {
  return cartProducts.some((curItems) => {
    return curItems.id === curProd.id;
  });
});

console.log(filteredProducts);

const cartElement = document.querySelector("#productCartContainer");
const templateContainer = document.querySelector("#productCartTemplate");

const showCartProduct = () => {
  filteredProducts.forEach((curItems) => {
    const { id, name, category, price, stock, image } = curItems;

    const productClone = document.importNode(templateContainer.content, true);

    const LSActualData = fetchQuantityFromLS(id, price)

        productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);
        productClone.querySelector(".productName").textContent = name;
        productClone.querySelector(".category").textContent = category;
        productClone.querySelector(".productImage").src = image;
        productClone.querySelector(".productImage").alt = name;

        productClone.querySelector(".productQuantity").textContent = LSActualData.quantity;
        productClone.querySelector(".productPrice").textContent = LSActualData.price;

       cartElement.appendChild(productClone)
  });
};

showCartProduct();
