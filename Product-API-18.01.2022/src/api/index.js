import axios from 'axios';

//axios kullanmadan önceki fetch
/* 
  fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setProducts(data);
      })
      .catch((err) => {
        console.log(err.message);
        setError(err.message);
      });
  */

const BASE_API = axios.create({ baseURL: 'https://fakestoreapi.com' });
export const fetchProducts = () => BASE_API.get('/products');
export const fetchProduct = (productId) =>
  BASE_API.get(`/products/${productId}`);
