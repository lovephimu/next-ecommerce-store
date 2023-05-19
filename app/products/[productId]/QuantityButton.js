'use client';

import { useState } from 'react';

export default function QuantityButton() {
  const [quantity, setQuantity] = useState(0);

  function increaseQuantity() {
    setQuantity(quantity + 1);
  }

  function decreaseQuantity() {
    if (quantity === 0) {
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
        onChange={(event) => setQuantity(event.currentTarget.value)}
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
