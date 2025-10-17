import React from 'react'
import { useCartStore } from './useCartStore'

const ProductList = () => {

    const addItme = useCartStore((state) => state.addItem)

    const products = [
        { id: 1, name: "Laptop", price: 80000 },
        { id: 2, name: "Phone", price: 30000 },
        { id: 3, name: "Headphones", price: 2000 },
    ];


    return (
        <div className='p-4'>
            <h2 className='text-xl font-bold mb-3'>Product List</h2>
            {products.map((p) => (
                <div key={p.id} className="border p-2 mb-2 flex justify-between items-center">
                    <div>
                        {p.name} - 💸{p.price}
                    </div>
                    <button onClick={() => addItme({ ...p, id: Date.now()})} className="bg-green-500 text-white px-2 py-1 rounded">
                        Add to cart
                    </button>
                </div>
            ))}
        </div>
    )
}

export default ProductList