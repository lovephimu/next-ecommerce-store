import { getProductById } from '../../database/products';

export default function CurrentItem(props) {
  const currentProduct = getProductById(props.productId);
  return (
    <section>
      <div className="basicFlex">
        <div>Product: {currentProduct.name}</div>
        <div>Quantity: {props.quantity}</div>
        <div>{currentProduct.price}</div>
      </div>
    </section>
  );
}
