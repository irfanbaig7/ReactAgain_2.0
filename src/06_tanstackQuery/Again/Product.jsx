import React from 'react'
import ProductList from './ProductList'
import Addprd from './Addprd'

const Product = () => {
  return (
     <div className="min-h-screen">
      <h1 className="text-3xl font-bold text-center py-5">🧺 Product Dashboard</h1>
      <Addprd />
      <ProductList />
    </div>
  )
}

export default Product