import React from 'react'
import ProductList from './products/ProductList'
import Cart from './products/Cart'
import Login from './authh/Login'
import Profile from './authh/Profile'

const Zustandd = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-5">
        Zustand Store Example 🧠
      </h1> 

      {/* example 1 */}

      {/* <ProductList />
      <Cart /> */}


      {/* example 2 */}

      <Login />
      <Profile />


    </div>
  )
}

export default Zustandd