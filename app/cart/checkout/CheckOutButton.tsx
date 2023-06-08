import { useRouter } from 'next/navigation';
import { emptyCookie } from '../../products/[productId]/actions';

type Props = {
  activated: boolean;
};

export default function CheckOutButton(props: Props) {
  const router = useRouter();

  return (
    <section className="contentFlex bottomGap">
      <form>
        <button
          type="button"
          disabled={props.activated}
          className="basicFlex basicFlexJustifyCenter basicFlexAlignCenter cartButton checkOut"
          data-test-id="checkout-confirm-order"
          formAction={async () => {
            router.push('/cart/checkout/thankyou');
            await emptyCookie();
            router.refresh();
          }}
        >
          Confirm order
        </button>
      </form>
    </section>
  );
}
