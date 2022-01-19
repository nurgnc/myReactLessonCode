import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Loading, ErrorComponent } from './helperComponents';
const Products = (props) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState('');

 
  useEffect(() => {
    const BASE_API = axios.create({ baseURL: 'https://fakestoreapi.com' });
    BASE_API.get('/products')
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        setError(err.message);
      });
  }, []);

  // console.log('isLoading', isLoading);
  // console.log('products', products);
  // console.log('error:::', error);

  if (error) {
    return <ErrorComponent message={error} />;
  }
  //conditional return
  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <h1>Products</h1>
      <ul>
        {products.map((item) => (
          <li key={item.id}>
            {item.title} - {item.price} $
          </li>
        ))}
      </ul>
    </>
  );
};

export default Products;
