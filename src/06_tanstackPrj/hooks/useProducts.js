import { useQuery } from "@tanstack/react-query"
import { api } from "../api/axiosInstance"


export const useProducts = () => {
    return useQuery({
        queryKey: ["products"], // unique indentifire
        queryFn: async () => {
            const res = await api.get("/products")
            return res.data
        },
        staleTime: 1000 * 60 * 2, // 2 min tak cache fresh rahega
    })
}