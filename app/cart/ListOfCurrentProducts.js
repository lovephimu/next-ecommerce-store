'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getProductById } from '../../database/products';
import {
  deleteProduct,
  updateProductQuantity,
} from '../products/[productId]/actions';
import { getCurrentProducts } from './actions';
import CurrentItem from './CurrentItem';

// I chose an useEffect hook because reading the cookies would return
// a promise Object - by putting this in an async function
// it would resolve into the desired object with id and total quantity

export default function ListOfCurrentProducts() {
  const [currentProducts, setCurrentProducts] = useState([]);

  const router = useRouter();

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
    <section>
      <div>List of your products</div>
      <div>
        {currentProducts.map((currentProduct) => {
          return (
            <div key={`product-${currentProduct.id}`}>
              <h1>{currentProduct.id}</h1>
              <CurrentItem
                productId={currentProduct.id}
                quantity={currentProduct.totalQuantity}
              />
              <form>
                <button
                  formAction={async () => {
                    await updateProductQuantity(currentProduct.id, 1);
                    await downloadCookieQuantity();
                  }}
                >
                  +
                </button>
                <button
                  formAction={async () => {
                    await updateProductQuantity(currentProduct.id, -1);
                    await downloadCookieQuantity();
                  }}
                >
                  -
                </button>
              </form>
              <form>
                <button
                  formAction={async () => {
                    await deleteProduct(currentProduct.id);
                    await downloadCookieQuantity();
                  }}
                >
                  RemoveButton
                </button>
              </form>
            </div>
          );
        })}
      </div>
    </section>
  );

  // return (
  //   <>
  //     <div>List of products currently in your cart</div>
  //     {currentProducts.map((currentProduct) => {
  //       const foundProducts = getProductById(currentProduct.id);

  //       console.log(foundProducts);

  //       return (
  //         <div key={`product-${currentProduct.id}`}>
  //           {currentProduct.id} + {foundProducts.name}
  //           <div>{}</div>
  //         </div>
  //       );
  //     })}
  //   </>
  // );
}
