import React from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => {
  return (
    <ul>
      <li>
        <Link to="/">Ana Sayfa</Link>
      </li>
      <li>
        <Link to="/products">Ürünler</Link>
      </li>
      <li>
        <Link to="/query-products">Q-Ürünler</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  );
};

export default Nav;
