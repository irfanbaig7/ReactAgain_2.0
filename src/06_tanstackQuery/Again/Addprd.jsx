import { useMutation, useQueryClient } from '@tanstack/react-query'
import React, { useState } from 'react'
import { addProduct } from './api'
import toast from 'react-hot-toast'

const Addprd = () => {

    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")

    const queryClient = useQueryClient()

    const { mutate, isPending } = useMutation({
        mutationFn: addProduct,
        onSuccess: (data) => {
            toast.success("Product added")
            queryClient.invalidateQueries(["products"])
            setTitle('')
            setPrice('')
            console.log("response from api : ", data);
        },
        onError: (error) => {
            toast.error(`Failed: ${error.message}`)
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!title || !price) return toast.error("please fill all fields")

        mutate({
            title,
            price: Number(price)
        })
    }


    return (
        <form
            onSubmit={handleSubmit}
            className="flex gap-3 p-4 items-center justify-center shadow-md rounded"
        >
            <input
                type="text"
                placeholder="Product name"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border px-3 py-2 rounded w-40"
            />
            <input
                type="number"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="border px-3 py-2 rounded w-32"
            />
            <button
                type="submit"
                disabled={isPending}
                className="bg-green-600 px-4 py-2 rounded hover:bg-green-700 transition"
            >
                {isPending ? "Adding..." : "Add Product"}
            </button>
        </form>
    )
}

export default Addprd