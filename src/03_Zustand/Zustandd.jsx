import React from 'react'
import ProductList from './products/ProductList'
import Cart from './products/Cart'

const Zustandd = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-5">
        Zustand Store Example 🧠
      </h1> 
      <ProductList />
      <Cart />
    </div>
  )
}

export default Zustandd