import { getProductById } from '../../database/products';

export default function CurrentItem(props) {
  const currentProduct = getProductById(props.productId);
  return (
    <section>
      <div>Product: {currentProduct.name}</div>
      <div>Quantity: {props.quantity}</div>
    </section>
  );
}
