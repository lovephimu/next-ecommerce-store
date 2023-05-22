import { updateProductQuantity } from './actions';

export default function AddToCartButton(props) {
  return (
    <form>
      <button
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
