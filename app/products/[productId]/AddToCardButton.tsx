import { useRouter } from 'next/navigation';
import { updateProductQuantity } from './actions';

type Props = {
  productId: number;
  quantity: number;
};

export default function AddToCartButton(props: Props) {
  const router = useRouter();
  return (
    <form className="basicFlex ">
      <button
        // type="button"
        className="contentFlex basicFlexJustifyCenter basicFlexAlignCenter cartButton addToCart"
        data-test-id="product-add-to-cart"
        formAction={async () => {
          await updateProductQuantity(props.productId, props.quantity);
          router.refresh();
        }}
      >
        Add to cart
      </button>
    </form>
  );
}
