import { updateProductQuantity } from './actions';

type Props = {
  productId: number;
  quantity: number;
};

export default function AddToCartButton(props: Props) {
  return (
    <form className="basicFlex">
      <button
        // type="button"
        className="contentFlex basicFlexJustifyCenter basicFlexAlignCenter cartButton checkOut"
        data-test-id="product-add-to-cart"
        formAction={async () => {
          await updateProductQuantity(props.productId, props.quantity);
        }}
      >
        Add to cart
      </button>
    </form>
  );
}
