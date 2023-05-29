import Link from 'next/link';
import { getProductById } from '../../database/products';
import { getCurrentProducts } from './actions';
import CurrentItem from './CurrentItem';

export default async function CartPage() {
  type ParsedCookie = {
    id: number;
    totalQuantity: number;
  };

  // load cookie content
  const productQuantity = await getCurrentProducts();

  // map according to items in cookie
  // use Promise.all in order resolve all database requests

  const productsInCart = await Promise.all(
    productQuantity.map(async (parsedCookieProduct: ParsedCookie) => {
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
            Check out our{' '}
            <Link href={{ pathname: '/products' }}>product page!</Link>
          </p>
        </div>
      </section>
    );
  } else {
    return (
      <main className="structureFlex basicFlexVertical">
        <h1 className="bottomGap">Cart</h1>
        <section className="basicFlex cartPaddingGlobal basicFlexVertical bottomGapHalf">
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
        <div className="basicFlex cartSpaceBetween cartPaddingGlobal bottomGapHalf">
          <p>Total price:</p>
          <div>
            <span data-test-id="cart-total" className="boldParagraph pTitle">
              {calculateTotal()}
            </span>
            <span className="superScript">€</span>
          </div>
        </div>
        <div className="basicFlex cartPaddingGlobal bottomGap">
          <a
            data-test-id="cart-checkout"
            href="/cart/checkout"
            className="basicFlex basicFlexJustifyCenter basicFlexAlignCenter cartButton checkOut"
          >
            Proceed to Checkout
          </a>
        </div>
      </main>
    );
  }
}
