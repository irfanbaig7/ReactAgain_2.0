import { create } from "zustand";

export const useCartStore = create((set) => ({
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

}))