import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { fetchProducts } from './api'
import EditProduct from './EditProduct'

const ProductList = () => {

    const { data: products, isLoading, isError, error, refetch } = useQuery({
        queryKey: ["products"],
        queryFn: fetchProducts,
        staleTime: 1000 * 60 * 2,
    })

     if (isLoading) return <p className="text-center">Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;



  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">🛍 Product List</h2>
      <button
        onClick={() => refetch()}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        Refetch
      </button>
      <div className="grid grid-cols-2 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded p-3 shadow-sm hover:shadow-md transition"
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-40 object-cover mb-2 rounded"
            />
            <h3 className="font-medium">{product.title}</h3>
            <p className="text-sm text-gray-600">${product.price}</p>
            <EditProduct key={product.id} product={product} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductList