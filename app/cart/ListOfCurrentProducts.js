'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getProductById } from '../../database/products';
import {
  deleteProduct,
  updateProductQuantity,
} from '../products/[productId]/actions';
import { getCurrentProducts } from './actions';

// I chose an useEffect hook because reading the cookies would return
// a promise Object - by putting this in an async function
// it would resolve into the desired object with id and total quantity

export default function ListOfCurrentProducts() {
  const [currentProducts, setCurrentProducts] = useState([]);

  const router = useRouter();

  // Download Cookie Quantity
  // loads and parses the cart cookie
  // sets currentProducts state to parsed cookie
  // in format {id: num, totalQuantity: num}

  async function downloadCookieQuantity() {
    const cookieQuantity = await getCurrentProducts();
    setCurrentProducts(cookieQuantity);
  }

  useEffect(() => {
    downloadCookieQuantity().catch((error) => console.log(error));
  }, []);

  return (
    <section>
      <h2>List of your products</h2>
      <div className="basicFlex basicFlexVertical">
        {currentProducts.map((currentProduct) => {
          const currentProductObject = getProductById(currentProduct.id);

          return (
            <section key={`product-${currentProduct.id}`}>
              <div className="basicFlex basicFlexNoWrap">
                <div>#{currentProduct.id}</div>
                <div className="basicFlex">
                  <div>Product: {currentProductObject.name}</div>
                  <div>Quantity: {currentProduct.totalQuantity} Pcs.</div>
                  <div>{currentProductObject.price}</div>
                </div>
                <form className="basicFlex">
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
                      if (currentProduct.totalQuantity > 1) {
                        await updateProductQuantity(currentProduct.id, -1);
                        await downloadCookieQuantity();
                      }
                    }}
                  >
                    -
                  </button>
                </form>
                <form className="basicFlex">
                  <button
                    formAction={async () => {
                      await deleteProduct(currentProductObject.id);
                      await downloadCookieQuantity();
                    }}
                  >
                    RemoveButton
                  </button>
                </form>
                <div>{currentProduct.price}</div>
              </div>
            </section>
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
