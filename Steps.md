====================================================================
**_ Building an Ecommerce Website with Vanilla JavaScript _**
====================================================================

**_ Folder structure _**

my-vanilla-js-project/
├── public/
│ ├── images/
│ │ ├── logo.png
│ │ └── background.jpg
│ └── index.html
├── src/
│ ├── index.html
│ ├── main.js
│ ├── utils.js
│ └── styles.css
├── vite.config.js
└── package.json

**_ or we can also use _**

my-vanilla-js-project/
├── public/
│ ├── images/
│ │ ├── logo.png
│ │ └── background.jpg
│ └── index.html
├── index.html
├── main.js
├── styles.css
├── vite.config.js
└── package.json


====================================================================
**_ Steps to Create a Function for Displaying Product Containers _**
====================================================================

## Step 1: Selecting DOM Elements

- Use `document.querySelector()` to select the product container and template container elements from the HTML document.

## Step 2: Defining the Function

- Define a function named `showProductContainer` that takes an array of products as input.

## Step 3: Checking for Valid Input

- Check if the `products` array is truthy. If not, return `false`.

## Step 4: Iterating Over Products

- Iterate over each product in the `products` array using `forEach()`.

## Step 5: Destructuring Product Properties

- Destructure the properties of each product object (brand, category, description, etc.) for easier access.

## Step 6: Cloning the Template

- Use `document.importNode()` to clone the template container for each product.

## Step 7: Updating Product Information

- Update the cloned template with the product details:
  - Set the text content of elements to display product information.
  - Set the source attribute of the product image element.
  - Calculate and display the actual price based on the product price.

## Step 8: Adding Event Listener

- Add an event listener to a specific element (`.stockElement`) within each product template.
- Use event delegation to handle click events and pass relevant data (event, product id, stock) to the `homeQuantityToggle()` function.

## Step 9: Appending to Product Container

- Append the cloned template with updated product information to the product container element.

## Step 10: Ensuring Container Availability

- Check if the product container element exists before appending the cloned template.

## Conclusion

- I has created a function that dynamically populates the product container with product information based on the provided array of products.

