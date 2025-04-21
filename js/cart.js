import {
    displayCartTotal,
    getFromLocalStorage,
    saveToLocalStorage,
    updateCartIcon,
  } from "./helper.js";
  import { renderCartItems } from "./ui.js";
  
  let cart = getFromLocalStorage();
  
  
  const addToCart = (e, products) => {

    const productId = +e.target.dataset.id;
  
  
    const product = products.find((product) => product.id === productId);
  
    if (product) {
     
      const exitingItem = cart.find((item) => item.id === productId);
      if (exitingItem) {
      
        exitingItem.quantity++;
      } else {
      
        const cartItem = {
          id: product.id,
          title: product.title,
          price: product.price,
          image: product.image,
          quantity: 1,
        };
  
        cart.push(cartItem);
  
       
        updateCartIcon(cart);
      }
    }
  
    
    saveToLocalStorage(cart);
    
    e.target.innerText = "Added";
  
  
    setTimeout(() => {
      e.target.innerText = "Add to cart";
    }, 2000);
  };
  
  
  const removeFromCart = (e) => {
  
    const productId = parseInt(e.target.dataset.id);
  
    
    cart = cart.filter((item) => item.id !== productId);
  
    
    saveToLocalStorage(cart);
  
    renderCartItems(cart);
  
  
    updateCartIcon(cart);
  
    
    displayCartTotal(cart);
  };
  
  
  
  const onQuantityChange = (e) => {
    
    const newQuantity = +e.target.value;
    
    const productId = +e.target.dataset.id;
  
  
    if (newQuantity > 0) {
      
      const updateItem = cart.find((item) => item.id === productId);
  
  
      updateItem.quantity = newQuantity;
  
      
      saveToLocalStorage(cart);
  
      updateCartIcon(cart);
  
      displayCartTotal(cart);
    }
  };
  
  export { addToCart, removeFromCart, onQuantityChange };
  