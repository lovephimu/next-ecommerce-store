import ListOfCurrentProducts from './ListOfCurrentProducts';

export default function CartPage() {
  return (
    <>
      <h1>Cart</h1>
      <section>
        <ListOfCurrentProducts />
        <p>Product array map</p>
        <p>Quantity</p>
        <p>Remove Button</p>
      </section>
      <div data-test-id="cart-total">(Total price number)</div>
      <button data-test-id="cart-checkout">Checkout</button>
    </>
  );
}
