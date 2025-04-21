import fetchProducts from "./api.js";
import { addToCart } from "./cart.js";
import {
  displayCartTotal,
  getFromLocalStorage,
  updateCartIcon,
} from "./helper.js";
import { elements, renderCartItems, renderProducts } from "./ui.js";

elements.menuIcon.addEventListener("click", () => {
  elements.menu.classList.toggle("open-menu");
});

document.addEventListener("DOMContentLoaded", () => {

  const cart = getFromLocalStorage();

  // ? Hangi sayfadayız ?
  if (window.location.pathname.includes("/cart.html")) {
    // * Sepet Sayfası İşlemleri

    renderCartItems(cart);
    displayCartTotal(cart);
  } else {
    // * Ana Sayfa İşlemleri
    fetchProducts()
      .then((products) => {
        renderProducts(products, (e) => {
          addToCart(e, products);
        });
      })
      .catch((err) => {
        console.log(`Error: ${err}`);
      });
  }

  updateCartIcon(cart);
});
