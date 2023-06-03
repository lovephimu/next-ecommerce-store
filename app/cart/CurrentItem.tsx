'use client';
import Image from 'next/image';
import { useState } from 'react';
import {
  deleteProduct,
  updateProductQuantity,
} from '../products/[productId]/actions';
import { getCurrentQuantity } from './actions';

type Props = {
  id: number;
  name: string;
  price: number;
  totalQuantity: number;
};

export default function CurrentItem(props: Props) {
  const [currentQuantity, setCurrentQuantity] = useState(props.totalQuantity);

  // change function so it only returns one
  //

  async function downloadCookieQuantity(id: number) {
    const cookieQuantity = await getCurrentQuantity(id);
    setCurrentQuantity(cookieQuantity.totalQuantity);
  }

  return (
    <section>
      <div className="structureFlex basicFlexAlignCenter ">
        <div className="basicFlex cartBorder bottomPaddingHalf bottomGapHalf">
          <div>
            <Image
              src={`/images/${props.name}_product.png`}
              alt="Product Pic"
              width={150}
              height={150}
            />
          </div>
          <div className="justFlex justWidth cartSpaceBetween basicFlexVertical cartItem">
            <div>
              <div className="justFlex justWidth cartSpaceBetween justBottomBorder bottomGapHalf">
                <h3 className="justFlex  basicWidthTwenty basicAlignBottom">
                  {props.name}
                </h3>
                <div className="justFlex    basicFlexJustifyContentRight boldParagraph basicAlignBottom">
                  {props.price * currentQuantity}€
                </div>
              </div>
              <p className="">
                <span data-test-id={`cart-product-quantity-${props.id}`}>
                  {currentQuantity}
                </span>
                <span> </span>
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
                    }}
                  >
                    x
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
