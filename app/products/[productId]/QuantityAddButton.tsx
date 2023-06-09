'use client';

import Image from 'next/image';
import { ChangeEvent, useState } from 'react';
import addPositiveQuantity from '../../../functions/addPositiveQuantity';
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
    if (quantity <= 1 || typeof quantity !== 'number') {
      return NaN;
    }
    setQuantity(quantity - 1);
  }

  return (
    <section className="listFlexItem listWidthSmall contentFlexPadding bottomGap">
      <div className="contentFlex basicFlexVertical bottomGapHalf">
        <div className="bottomGap">
          <span
            data-test-id="product-price"
            className="prizeTitle boldParagraph"
          >
            {props.productPrice}
          </span>
          <span className="superScript">€</span>
          <p>incl. VAT, plus shipping*</p>
        </div>
        <div className="basicFlex basicFlexVertical">
          <p className="contentFlex">
            <Image
              src="/../../../images/icon_check.svg"
              height={32}
              width={32}
              alt="green check mark"
              className="rightPadding"
            />
            in stock
          </p>
          <p className="contentFlex">
            <Image
              src="/../../../images/icon_check.svg"
              height={32}
              width={32}
              alt="green check mark"
              className="rightPadding"
            />
            delivery within 3 days
          </p>
          <p className="contentFlex">
            <Image
              src="/../../../images/icon_check.svg"
              height={32}
              width={32}
              alt="green check mark"
              className="rightPadding"
            />
            30 days returns policy
          </p>
        </div>
      </div>
      <div className="productJustify bottomGap">
        <button
          className="productButton"
          onClick={() => {
            decreaseQuantity();
          }}
        >
          -
        </button>
        <input
          value={quantity}
          type="number"
          className="productInput"
          min="1"
          data-test-id="product-quantity"
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setQuantity(
              addPositiveQuantity(parseInt(event.currentTarget.value)),
            )
          }
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
      <AddToCartButton
        productId={props.productId}
        quantity={Number(quantity)}
      />
    </section>
  );
}
