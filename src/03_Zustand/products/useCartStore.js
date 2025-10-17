import { create } from "zustand";
import { devtools } from "zustand/middleware"  

export const useCartStore = create(devtools(
  (set) => ({
  // empty cart array
  cart: [],

  // add item
  addItem: (item) => set( (state) => ({
    cart: [...state.cart, item]
  }) ),

  // remove item
  removeItem: (id) =>
  set( (state) => ({
    cart: state.cart.filter((item) => item.id !== id),
  }) ),

  // clear cart
  clearCart: () => set({ cart: [] })

})
))