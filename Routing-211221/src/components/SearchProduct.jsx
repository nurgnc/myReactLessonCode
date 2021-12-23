import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function AddProduct(props) {
  let location = useLocation();
  let navigate = useNavigate();
  console.log(location);
  console.log(navigate);
  return (
    <>
      <h1>Search Product</h1>
      // FORM arama kismi olsun, home sayfasindan arama yapilinca burdaki input
      icine n11 deki gibi arama bilgisi dolsun ve aratilan urun burda
      listelensin...
      <h2>{location.search}</h2>
    </>
  );
}

export default AddProduct;
