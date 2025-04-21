import { onQuantityChange, removeFromCart } from "./cart.js";

// Ui elemanlarının tutulduğu obje
const elements = {
  menuIcon: document.querySelector("#menu-icon"),
  menu: document.querySelector(".navbar"),
  productList: document.querySelector("#product-list"),
  cartContainer: document.querySelector("#cart-items"),
  cartTotal: document.querySelector("#cart-total"),
};

const renderProducts = (products, addToCartFunction) => {
  const productsHtml = products
    .map(
      (product) => ` <div class="product">
   
          <img
            src="${product.image}"
            alt="product-image"
            class="product-image"
          />
      
          <div class="product-info">
            <h2 class="product-title">${product.title}</h2>
            <p class="product-price">$${product.price}</p>
            <a class="add-to-cart" data-id='${product.id}' >Add to cart</a>
  
          </div>
        </div>`
    )
    .join("");

  elements.productList.innerHTML = productsHtml;

  const addToCartButtons = document.querySelectorAll(".add-to-cart");

  for (let i = 0; i < addToCartButtons.length; i++) {
    const addToCartButton = addToCartButtons[i];

    addToCartButton.addEventListener("click", addToCartFunction);
  }
};


const renderCartItems = (cart) => {
  elements.cartContainer.innerHTML = cart
    .map(
      (item) => `       <div class="cart-item">
              <img
                src="${item.image}"
                alt=""
              />

              <div class="cart-item-info">
                <h2 class="cart-title">${item.title}</h2>
                <input
                  type="number"
                  min="1"
                  value="${item.quantity}"
                  class="cart-item-quantity"
                  data-id='${item.id}'
                />
              </div>
              <h2 class="cart-item-price">$${item.price}</h2>
              <button class="remove-from-cart" data-id='${item.id}'>Remove</button>
            </div>`
    )
    .join("");

  const removeButtons = document.querySelectorAll(".remove-from-cart");

  for (let i = 0; i < removeButtons.length; i++) {
    const removeButton = removeButtons[i];

    removeButton.addEventListener("click", removeFromCart);
  }

  const quantityInputs = document.querySelectorAll(".cart-item-quantity");


  for (let k = 0; k < quantityInputs.length; k++) {
    const quantityInput = quantityInputs[k];

    quantityInput.addEventListener("change", onQuantityChange);
  }
};

export { elements, renderProducts, renderCartItems };
