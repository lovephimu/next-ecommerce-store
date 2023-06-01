'use client';

import { useState } from 'react';
import AddToCartButton from './AddToCardButton';

// import { updateProductQuantity } from './actions';

type Props = {
  productId: number;
  productPrice: number;
};

export default function QuantityAddButton(props: Props) {
  const [quantity, setQuantity] = useState(1);
  // const router = useRouter();

  function increaseQuantity() {
    setQuantity(quantity + 1);
  }

  function decreaseQuantity() {
    if (quantity <= 1) {
      return;
    }
    setQuantity(quantity - 1);
  }

  return (
    <>
      <section className="basicFlex cartSpaceBetween bottomGap basicFlexAlignCenter">
        <div>
          <span data-test-id="product-price" className="pTitle boldParagraph">
            {props.productPrice}
          </span>
          <span className="superScript">€</span>
        </div>
        <div className="productJustify">
          <button
            className="productButton"
            onClick={() => {
              decreaseQuantity();
            }}
          >
            -
          </button>
          <input
            className="productInput"
            data-test-id="product-quantity"
            value={quantity}
            onChange={(event) => {
              Number(event.currentTarget.value) >= 0
                ? setQuantity(Number(event.currentTarget.value))
                : setQuantity(1);
            }}
          />
          <button
            className="productButton"
            onClick={() => {
              increaseQuantity();
            }}
          >
            +
          </button>
        </div>
      </section>
      <section className="bottomGap">
        <AddToCartButton
          productId={props.productId}
          quantity={Number(quantity)}
        />
      </section>
    </>
  );
}
