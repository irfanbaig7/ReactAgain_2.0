import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Header';

const Prj = () => {
  return (
    <ThemeProvider>
      <Router>
        {/* Navbar hamesha dikhega */}
        <Navbar />
        {/* Content area jinme routes load honge */}
        <main style={{ padding: '1rem', minHeight: 'calc(100vh - 56px)', boxSizing: 'border-box' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductList />} />
          </Routes>
        </main>
      </Router>
    </ThemeProvider>
  );
};

export default Prj;
