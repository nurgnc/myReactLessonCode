import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { fetchProduct } from '../api';
import { Loading, ErrorComponent } from './helperComponents';

const SingleProduct = (props) => {
  const { productId } = useParams();
  const { isError, isLoading, error, data, isFetched, isFetching, ...query } =
    useQuery(['product', productId], () => fetchProduct(productId), {
      select: (data) => data.data,
    });

  if (isError) {
    return <ErrorComponent message={error.message} />;
  }
  // //conditional return
  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <h1>{data?.title}</h1>
      <img src={data?.image} alt="" style={{ width: '200px' }} />
      <br />
      <p>{data?.price}</p>
    </>
  );
};

export default SingleProduct;
