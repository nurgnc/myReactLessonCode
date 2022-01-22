import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
// import Basket from "./components/Basket";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Products from "./components/Products";
import SingleProduct from "./components/SingleProduct";
import QueryProducts from "./components/QueryProducts";
import FooterProducts from "./components/FooterProducts";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <h1>App</h1>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Products />} />
            <Route path="/query-products" element={<QueryProducts />} />
            <Route path="/products/:productId" element={<SingleProduct />} />
          </Routes>
          <FooterProducts productIds={[1, 3, 4, 5, 6]} />
        </div>
      </div>
    </div>
  );
}

export default App;
