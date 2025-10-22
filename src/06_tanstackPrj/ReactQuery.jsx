import React from 'react'
import ProductList from './components/ProductList'

const ReactQuery = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <h1 className="text-2xl font-bold text-center py-4">🛍️ Product Dashboard</h1>
      <ProductList />
    </div>
  )
}

export default ReactQuery