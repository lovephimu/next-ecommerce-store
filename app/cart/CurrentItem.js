'use client';

import { useState } from 'react';
import {
  deleteProduct,
  updateProductQuantity,
} from '../products/[productId]/actions';
import { getCurrentQuantity } from './actions';

export default function CurrentItem(props) {
  const [currentQuantity, setCurrentQuantity] = useState(props.totalQuantity);

  // change function so it only returns one
  //

  async function downloadCookieQuantity(id) {
    const cookieQuantity = await getCurrentQuantity(id);
    setCurrentQuantity(cookieQuantity.totalQuantity);
  }

  return (
    <section>
      <div className="structureFlex basicFlexAlignCenter">
        <div className="basicFlex">
          <div className="cartItem ">#{props.id}</div>
          <div className="cartItem basicWidthTwenty">{props.name}</div>
          <div
            className="cartItem "
            data-test-id={`cart-product-quantity-${props.id}`}
          >
            {currentQuantity}
          </div>
          <div className="cartItem ">à {props.price}€</div>
        </div>
        <div className="cartButtonFlex">
          <form>
            <button
              className="cartButton"
              formAction={async () => {
                await updateProductQuantity(props.id, 1);
                await downloadCookieQuantity(props.id);
              }}
            >
              +
            </button>
            <button
              className="cartButton"
              formAction={async () => {
                if (props.totalQuantity > 1) {
                  await updateProductQuantity(props.id, -1);
                  await downloadCookieQuantity(props.id);
                }
              }}
            >
              -
            </button>
            <button
              className="cartButton"
              data-test-id={`cart-product-remove-${props.id}`}
              formAction={async () => {
                await deleteProduct(props.id);
                await downloadCookieQuantity();
              }}
            >
              x
            </button>
          </form>
        </div>
        <div className="cartItem basicWidthTwenty  basicFlexJustifyContentRight">
          {props.price * currentQuantity}€
        </div>
      </div>
    </section>
  );
}
