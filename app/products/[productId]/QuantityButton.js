'use client';

import { useState } from 'react';

export default function QuantityButton() {
  const [quantity, setQuantity] = useState(1);

  function increaseQuantity() {
    setQuantity(quantity + 1);
  }

  function decreaseQuantity() {
    if (quantity <= 0) {
      return;
    }
    setQuantity(quantity - 1);
  }

  return (
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
            : setQuantity(0);
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
  );
}
