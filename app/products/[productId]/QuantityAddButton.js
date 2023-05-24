'use client';

import { useState } from 'react';
import AddToCartButton from './AddToCardButton';

// import { updateProductQuantity } from './actions';

export default function QuantityAddButton(props) {
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
      <div>
        <button
          onClick={() => {
            decreaseQuantity();
          }}
        >
          -
        </button>
        <input
          data-test-id="product-quantity"
          value={quantity}
          onChange={(event) => {
            event.currentTarget.value >= 0
              ? setQuantity(event.currentTarget.value)
              : setQuantity(1);
          }}
        />
        <button
          onClick={() => {
            increaseQuantity();
          }}
        >
          +
        </button>
      </div>
      <AddToCartButton productId={props.productId} quantity={quantity} />
    </>
  );
}

// <form>
//   <button
//     data-test-id="product-add-to-cart"
//     formAction={async () => {
//       router.refresh();
//       await updateProductQuantity(props.productId, quantity);
//     }}
//   >
//     Add to cart
//   </button>
// </form>
