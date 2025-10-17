import React from 'react'
import { useCartStore } from './useCartStore'

const Cart = () => {

    const { cart, removeItem, clearCart } = useCartStore() 

    if (cart.lenght === 0) {
        return <p className='text-center mt-10'>Cart is empty</p>
    }

  return (
    <div className='p-4'>
        <h2 className='text-xl font-bold mb-3'>Cart</h2>
        {cart.map((item) => (
            <div key={item.id} className='border p-2 mb-2 flex justify-between items-center'>
                <div>
                    {item.name} - 💸{item.price}
                </div>
                <button onClick={() => removeItem(item.id)} className="bg-red-500 text-white px-2 py-1 rounded">
                    Remove
                </button>
            </div>
        ))}

        <button onClick={clearCart} className="bg-gray-600 text-white px-4 py-2 mt-3 rounded">
            Clear cart
        </button>
    </div>
  )
}

export default Cart