import { useMutation, useQueryClient } from '@tanstack/react-query'
import React, { useState } from 'react'
import { axiosInstance } from './axiosInstance';

const AddProduct = () => {

    const [title, setTitle] = useState('')
    const queryClientt = useQueryClient();

    const { mutate, isPending, isError, error } = useMutation({
        mutationFn: async (newProduct) => {
            const res = await axiosInstance.post("/products", newProduct);
            return res.data;
        },

        // InvalidateQueries (Old wala tariqa)
        // onSuccess: () => {
        //     // Jab product add ho gaya → products list ko refresh kar do 
        //     queryClientt.invalidateQueries({ queryKey: ["products"] })
        // },

        
        //  SetQueryData (Naya aur better tariqa)
        onSuccess: (newProduct) => {
            queryClientt.setQueryData(['products'], (oldData) => [...oldData, newProduct]);
        }
    })

const handleSubmit = (e) => {
    e.preventDefault()
    if (!title.trim()) return alert("Please Enter a product name")
    mutate({
        title,
        price: 50,
        description: "Sample product",
        image: "https://plus.unsplash.com/premium_photo-1678099940967-73fe30680949?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
        category: "electronics",
    })

    setTitle("")
}



return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 border p-4 rounded">
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Enter product name..' className="border p-2 rounded" />
        <button
            disabled={isPending}
            className="bg-blue-500 text-white py-1 rounded"
        >
            {isPending ? "Adding..." : "Add Product"}
        </button>
        {isError && <p>{error.message}</p>}

    </form>
)
}

export default AddProduct