'use client';
import Image from 'next/image';
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
      <div className="structureFlex basicFlexAlignCenter ">
        <div className="basicFlex cartBorder bottomPaddingHalf bottomGapHalf">
          <div>
            <Image
              src={`/images/${props.name}.png`}
              alt="Product Pic"
              width={150}
              height={150}
            />
          </div>
          <div className="basicFlex cartSpaceBetween">
            <div className="basicFlex basicFlexVertical">
              <h3 className="cartItem basicWidthTwenty">{props.name}</h3>
              <p className="cartItem">
                <span data-test-id={`cart-product-quantity-${props.id}`}>
                  {currentQuantity}{' '}
                </span>
                <span>à {props.price}€</span>
              </p>
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
            </div>
            <div className="cartItem basicWidthTwenty  basicFlexJustifyContentRight boldParagraph">
              {props.price * currentQuantity}€
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
