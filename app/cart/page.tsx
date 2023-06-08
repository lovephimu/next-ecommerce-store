import Link from 'next/link';
import { getProducts } from '../../database/products';
import { combineData } from '../../functions/combineData';
import { totalSum } from '../../functions/totalsum';
import { getCurrentProducts } from './actions';
import CurrentItem from './CurrentItem';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'yesTent - cart',
  description: 'Product cart',
};

export type ParsedCookie = {
  id: number;
  totalQuantity: number;
};

export type ProductWithQuantity = {
  id: number;
  name: string;
  size: string;
  price: number;
  description: string | null;
  totalQuantity: number;
};

export default async function CartPage() {
  // load cookie content

  const products = await getProducts();
  const productQuantity = await getCurrentProducts();

  const productsInCart = combineData(products, productQuantity);

  if (productQuantity.length === 0) {
    return (
      <section>
        <h1 className="bottomGap cartPaddingGlobal">Cart</h1>
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
        <h1 className="bottomGap cartPaddingGlobal">Cart</h1>
        <section className="cartFlex cartPaddingGlobal">
          <section className="cartFlexItem cartListGrow basicFlexVertical bottomGapHalf">
            {productsInCart.map((productInCart) => {
              return (
                <div
                  key={`product-${productInCart.id}`}
                  data-test-id={`cart-product-${productInCart.id}>`}
                >
                  <CurrentItem
                    id={productInCart.id}
                    name={productInCart.name}
                    price={productInCart.price}
                    totalQuantity={productInCart.totalQuantity}
                  />
                </div>
              );
            })}
            <div className="basicFlex cartSpaceBetween bottomGapHalf">
              <p>Total price:</p>
              <div>
                <span
                  data-test-id="cart-total"
                  className="boldParagraph pTitle"
                >
                  {totalSum(productsInCart)}
                </span>
                <span className="superScript">€</span>
              </div>
            </div>
          </section>
          <div className="cartFlexItem cartFlexPadding bottomGap cartProgressBorder">
            <p className="bottomPaddingHalf">Almost there! </p>
            <p className="subTitle">Two steps remaining:</p>
            <div className="basicFlex basicFlexAlignBottom cartBoxHeight cartSpaceBetween">
              <div className="contentFlex basicFlexAlignEnd">
                <p>▲</p>
                <p>Choice</p>
              </div>
              <div className="contentFlex basicFlexAlignEnd">
                <p>△</p>
                <p>Checkout</p>
              </div>
              <div className="contentFlex basicFlexAlignEnd">
                <p>△</p>
                <p>Confirmation</p>
              </div>
            </div>
            <div className="basicFlex cartSpaceBetween bottomGap">
              <div className="halfFlex basicWidthTwenty" />
              <div className="halfFlexDark widthEighty" />
            </div>
            <a
              data-test-id="cart-checkout"
              href="/cart/checkout"
              className="basicFlex basicFlexJustifyCenter basicFlexAlignCenter cartButton cartOut"
            >
              Proceed to Checkout
            </a>
          </div>
        </section>
      </main>
    );
  }
}
