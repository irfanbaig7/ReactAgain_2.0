import { useQuery } from "@tanstack/react-query"
import { api } from "../api/axiosInstance"


export const useProductDetails = (id) => {
    return useQuery({
        queryKey: ["product", id], // unique per id
        queryFn: async () => {
            const res = await api.get(`/products/${id}`)
            return res.data;
        },
        enabled: !!id, // jab tak id na mile tb tak req mat bhejna
    })
}