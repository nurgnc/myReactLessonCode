import axios from "axios";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { useEffect, useState } from "react";
import { ErrorComponent, LoadingComponent } from "./helperComponents";
import { fetchProducts } from "../api";

const QueryProducts = (props) => {
  const { isLoading, isError, error, data, isFetched, isFetching, ...query } =
    useQuery("products", fetchProducts, {
      retry: false,
      select: (data) => data.data,
    });

  console.log(data);
  console.log(query);

  if (isError) {
    return <ErrorComponent message={error.message} />;
  }

  if (isLoading) {
    return <LoadingComponent />;
  }

  return (
    <>
      <h1>QueryProducts</h1>
      <ul>
        {data?.map((item) => (
          <li key={item.id}>
            <Link to={`/products/${item.id}`}>
              {item.title} - {item.price}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default QueryProducts;
