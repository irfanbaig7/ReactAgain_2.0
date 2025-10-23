import React from 'react'
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import ProductList from './components/ProductList'
import ProductDetails from './components/ProductDetails'

const ReactQuery = () => {
  return (

    <Router>
      <nav className="flex gap-4 p-4 bg-gray-100 shadow">
        <Link to="/">All Products</Link>
      </nav>

      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  )
}

export default ReactQuery