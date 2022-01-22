import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchSingleProduct } from "../api";
import { ErrorComponent, LoadingComponent } from "./helperComponents";
import { useDispatch } from "react-redux";
import { addVisitedProduct } from "../reduxStore/visitedProducts";

function SingleProduct() {
  const { productId } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    if (productId) {
      dispatch(addVisitedProduct(Number(productId)))
    }
  }, [])

  const { isLoading, isError, error, data } =
    useQuery(
      ["product", productId],

      () => fetchSingleProduct(productId),

      {
        retry: false,
        select: (data) => data.data,
      }
    );

  if (isError) {
    return <ErrorComponent message={error.message} />;
  }

  if (isLoading) {
    return <LoadingComponent />;
  }

  return (
    <>
      <h1>{data?.title}</h1>
      <img src={data?.image} alt="" style={{ width: "200px" }} />
      <p />
      <p>{data?.price}</p>
    </>
  );
}

export default SingleProduct;
