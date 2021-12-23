import React from 'react';
import { Link } from 'react-router-dom';

function Nav(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="#">
          Navbar
        </Link>

        <div className="navbar">
          <Link className="nav-item nav-link active" to="/">
            Home
          </Link>
          <Link className="nav-item nav-link" to="products">
            Products
          </Link>
          <Link className="nav-item nav-link" to="search-product">
            Search Product
          </Link>
          <Link className="nav-item nav-link" to="contact">
            Contact
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Nav;
