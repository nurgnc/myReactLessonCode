import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { Loading, ErrorComponent } from './helperComponents';
import { useQuery } from 'react-query';
import { fetchProducts } from '../api';

const QueryProducts = (props) => {
  const { isFetching, isLoading, isError, error, data, isFetched, ...query } =
    useQuery('products', fetchProducts);
  console.log(query);
  if (isError) {
    return <ErrorComponent message={error.message} />;
  }
  // //conditional return
  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <h1>Query Products</h1>
      <ul>
        {data?.data?.map((item) => (
          <li key={item.id}>
            <Link to={`/products/${item.id}`}>
              {item.title}-{item.price}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default QueryProducts;
