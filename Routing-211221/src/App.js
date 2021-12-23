import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import Products from './components/Products';
import ProductDetail from './components/ProductDetail';
import SearchProduct from './components/SearchProduct';
import NotFound from './components/NotFound';
import Nav from './components/base/Nav';
import Footer from './components/base/Footer';

export default function App() {
  return (
    <>
      <Nav />
      <div className="container my-5">
        <div className="row">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="products/:productId" element={<ProductDetail />} />
            <Route path="search-product" element={<SearchProduct />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </>
  );
}
