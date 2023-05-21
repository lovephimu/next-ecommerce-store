'use client';

import { useEffect, useState } from 'react';
import { getCurrentProducts } from './actions';

// I chose an useEffect hook because reading the cookies would return
// a promise Object - by putting this in an async function
// it would resolve into the desired object with id and total quantity

export default function ListOfCurrentProducts() {
  const [currentProducts, setCurrentProducts] = useState([]);

  async function downloadCookieQuantity() {
    const cookieQuantity = await getCurrentProducts();
    console.log('here we have...' + cookieQuantity);
    console.log(cookieQuantity[1].id);
    setCurrentProducts(cookieQuantity);
  }

  useEffect(() => {
    downloadCookieQuantity().catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div>List of products currently in your cart</div>
      {currentProducts.map((currentProduct) => {
        return (
          <div key={`product-${currentProduct.id}`}>{currentProduct.id}</div>
        );
      })}
    </>
  );
}
