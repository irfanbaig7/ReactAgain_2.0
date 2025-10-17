import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create(
    persist(
        (set) => ({
            user: null,
            isAutenticated: false,

            login: (userData) => set({
                user: userData,
                isAutenticated: true
            }),

            logout: () => set({
                user: null,
                isAutenticated: false
            }),

        }),

        // key name for localstorage
        {
            name: "auth-storage"
        }
    )
)
