import Link from 'next/link';
import { getProductById } from '../../database/products';
import { getCurrentProducts } from './actions';
import CurrentItem from './CurrentItem';

export default async function CartPage() {
  // load cookie content
  const productQuantity = await getCurrentProducts();

  // map according to items in cookie
  // use Promise.all in order resolve all database requests

  const productsInCart = await Promise.all(
    productQuantity.map(async (parsedCookieProduct) => {
      const matchingProduct = await getProductById(
        Number(parsedCookieProduct.id),
      );

      return {
        ...matchingProduct,
        totalQuantity: parsedCookieProduct.totalQuantity,
      };
    }),
  );

  function calculateTotal() {
    return productsInCart.reduce(
      (total, item) => total + item.totalQuantity * item.price,
      0,
    );
  }

  if (productQuantity.length === 0) {
    return (
      <section>
        <h1>Cart</h1>
        <div className="basicFlex basicFlexVertical basicFlexAlignCenter">
          <p>Your cart is empty! </p>
          <p>Pro-tip: add a yesTent 😉</p>
          <p>
            Check out our <Link href="/products">product page!</Link>
          </p>
        </div>
      </section>
    );
  } else {
    return (
      <>
        <h1>Cart</h1>
        <section className="basicFlex basicFlexVertical">
          {productsInCart.map((productInCart) => {
            return (
              <div
                key={`product-${productInCart.id}`}
                data-test-id={`cart-product-${productInCart.id}>`}
              >
                <CurrentItem
                  id={productInCart.id}
                  name={productInCart.name}
                  size={productInCart.size}
                  description={productInCart.description}
                  price={productInCart.price}
                  totalQuantity={productInCart.totalQuantity}
                />
              </div>
            );
          })}
        </section>
        <div className="basicFlex">
          <div>Total price:</div>
          <span data-test-id="cart-total">{calculateTotal()}</span>
          <span>€</span>
        </div>
        <button data-test-id="cart-checkout">Checkout</button>
      </>
    );
  }
}
