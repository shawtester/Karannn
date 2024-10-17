import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: JSON.parse(localStorage.getItem('cartItems')) || [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;

      // Check if the product with the same id, weight, and flavor (or 'N/A') is already in the cart
      const existingItem = state.cartItems.find(
        cartItem =>
          cartItem.id === item.id &&
          cartItem.weight === item.weight &&
          cartItem.flavour === (item.flavour || 'N/A')
      );

      if (existingItem) {
        // If the item exists, increase the quantity
        existingItem.quantity += item.quantity;
      } else {
        // If it's a new item, add it to the cart
        state.cartItems.push({ ...item });
      }
    },
    
    
    increaseQuantity: (state, action) => {
      const item = state.cartItems.find(item => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      
        localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
      }
    },

    
    decreaseQuantity: (state, action) => {
      const item = state.cartItems.find(item => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else {
        
        state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
      }
      
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },

    
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload);

      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;

export default cartSlice.reducer;
