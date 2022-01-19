import React from 'react';
import './style.css';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Basket from './components/Basket';
import Contact from './components/Contact';
import Home from './components/Home';
import Products from './components/Products';
import QueryProducts from './components/QueryProducts';
import SingleProduct from './components/SingleProduct';

export default function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/query-products" element={<QueryProducts />} />
        <Route path="/products/:productId" element={<SingleProduct />} />
      </Routes>
    </div>
  );
}
