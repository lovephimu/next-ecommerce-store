'use client';

import { useRouter } from 'next/navigation';

export default function CheckOutButton() {
  const router = useRouter();

  return (
    <section className="basicFlex bottomGap">
      <button
        // type="button"
        className="basicFlex basicFlexJustifyCenter basicFlexAlignCenter cartButton checkOut"
        data-test-id="checkout-confirm-order"
        onClick={() => router.push('/cart/checkout')}
      >
        Confirm order
      </button>
    </section>
  );
}
