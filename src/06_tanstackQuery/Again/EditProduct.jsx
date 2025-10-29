import { useMutation, useQueryClient } from '@tanstack/react-query'
import React, { useState } from 'react'
import { deleteProduct, updateProduct } from './api'
import toast from 'react-hot-toast'

const EditProduct = ({ product }) => {

    const [editing, setEditing] = useState(false);
    const [title, setTitle] = useState(product.title);
    const [price, setPrice] = useState(product.price);


    const queryClient = useQueryClient()

    // update
    const { mutate } = useMutation({
        mutationFn: updateProduct,

        // optimistic update magic
        onMutate: async (updatedProduct) => {
            await queryClient.cancelQueries(["products"])
            const previousData = queryClient.getQueryData(["products"])

            // update cache instantly
            queryClient.setQueryData(["products"], (old) =>
                old.map((p) =>
                    p.id === updatedProduct.id ? { ...p, ...updatedProduct } : p
                )
            );

            return { previousData };
        },

        onError: (err, _, context) => {
            toast.error("Update failed, reverting changes...")
            queryClient.setQueryData(["products"], context.previousData)
        },

        onSuccess: () => {
            toast.success("Product updated")
        },

        onSettled: () => {
            queryClient.invalidateQueries(["products"])
        }

    })


    // delete
    const deleteMutation = useMutation({
        mutationFn: deleteProduct,

        // optimistic Update: remove instantly from cache
        onMutate: async (id) => {
            await queryClient.cancelQueries(["products"])
            const previousData = queryClient.getQueryCache(["products"])
            queryClient.setQueryData(["products"], (old) =>
                old.filter((p) => p.id !== id)
            )
            return { previousData }
        },

        onError: (err, _, context) => {
            toast.error("❌ Delete failed! Reverting...");
            queryClient.setQueryData(["products"], context.previousData);
        },

        onSuccess: () => toast.success("🗑 Product deleted!"),

        onSettled: () => queryClient.invalidateQueries(["products"]),

    })

    // handle update
    const handleUpdate = () => {
        mutate({ id: product.id, title, price });
        setEditing(false);
    };

    // handle Delete
    const handleDelete = () => {
        if (confirm(`Are you sure you want to delete "${product.title}"?`)) {
            deleteMutation.mutate(product.id);
        }
    };


    return (
        <div className="border p-3 rounded shadow-sm hover:shadow-md transition">
            {editing ? (
                <>
                    <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="border px-2 py-1 rounded mb-2 w-full"
                    />
                    <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="border px-2 py-1 rounded mb-2 w-full"
                    />
                    <button
                        onClick={handleUpdate}
                        className="bg-green-600 text-white px-3 py-1 rounded mr-2"
                    >
                        Save
                    </button>
                    <button
                        onClick={() => setEditing(false)}
                        className="bg-gray-400 text-white px-3 py-1 rounded"
                    >
                        Cancel
                    </button>
                </>
            ) : (
                <>
                    <h3 className="font-medium text-lg">{product.title}</h3>
                    <p className="text-gray-200">${product.price}</p>
                    <button
                        onClick={() => setEditing(true)}
                        className="bg-blue-600 text-white px-3 py-1 rounded mt-2"
                    >
                        Edit
                    </button>
                    <button
                        onClick={handleDelete}
                        className="bg-red-600 text-white px-3 py-1 rounded ml-2"
                    >
                        Delete
                    </button>
                </>
            )}
        </div>
    )
}

export default EditProduct