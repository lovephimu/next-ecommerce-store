'use client';

import { useRouter } from 'next/navigation';

type Props = {
  activated: boolean;
};

export default function CheckOutButton(props: Props) {
  const router = useRouter();

  return (
    <section className="basicFlex bottomGap">
      <button
        type="button"
        disabled={props.activated}
        className="basicFlex basicFlexJustifyCenter basicFlexAlignCenter cartButton checkOut"
        data-test-id="checkout-confirm-order"
        onClick={() => {
          router.push('/cart/checkout/thankyou');
          router.refresh();
        }}
      >
        Confirm order
      </button>
    </section>
  );
}
