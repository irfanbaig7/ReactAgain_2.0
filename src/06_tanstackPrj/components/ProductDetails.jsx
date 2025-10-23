import React from 'react'
import { useProductDetails } from '../hooks/useProductDetails'

const ProductDetails = ({ id, onBack }) => {

    const { data, isLoading, isError, error } = useProductDetails(id)

    if (isLoading) return <p className="text-center mt-5">Loading product...</p>;
    if (isError) return <p className="text-center text-red-500">{error.message}</p>;

    return (
        <div className="p-6 text-center">
            <button onClick={onBack} className="mb-4 px-3 py-1 bg-gray-200 rounded">
                🔙 back
            </button>
            <img src={data.image} alt={data.title} className="w-40 h-40 object-contain mx-auto" />
            <h2 className="text-xl font-semibold mt-3">{data.title}</h2>
            <p className="text-gray-600 mt-2">{data.description}</p>
            <p className="text-lg font-bold mt-3">${data.price}</p>
        </div>
    )
}

export default ProductDetails