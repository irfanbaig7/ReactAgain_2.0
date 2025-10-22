import React from 'react'
import { useProducts } from '../hooks/useProducts'

const ProductList = () => {

    const { data, isLoading, isError, error } = useProducts()

    if(isLoading) return <p className="text-center mt-5">Loading products...</p>;
    if(isError) return <p className="text-center mt-5 text-red-500" >{ error.message }</p>


  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-5">
        {data?.map((product) => (
            <div key={product.id}  className="border p-3 rounded-lg shadow-sm" >
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-20 h-20 object-contain mx-auto"
                />
                <h3 className="font-semibold text-sm mt-2 line-clamp-2">{product.title}</h3>
                <p className="text-gray-600">${product.price}</p>
            </div>
        ))}
        
    </div>
  )
}

export default ProductList