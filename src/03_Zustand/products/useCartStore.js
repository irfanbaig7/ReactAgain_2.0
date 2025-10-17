import { create } from "zustand";
import { devtools, persist } from "zustand/middleware"

export const useCartStore = create(
  devtools(
    persist(
      (set) => ({

        cart: [],

        addItem: (item) =>
          set((state) => ({
            cart: [...state.cart, item]
          })),

        removeItem: (id) =>
          set((state) => ({
            cart: state.cart.filter((item) => item.id !== id)
          })),

        clearCart: () => set({ cart: [] }),
      }),

      {
        name: "cart-storage", // key name for localstorage
      },

    ),

    {
      name: "CartStore" // name shown in redux DevTools
    }

  )
)