import Link from 'next/link';
import { getProductById } from '../../database/products';
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
  description: string;
  totalQuantity: number;
};

export async function combineProductQuantity(
  parsedProductCookies: ParsedCookie[],
): Promise<ProductWithQuantity[] | undefined> {
  const combinedProducts = await Promise.all(
    parsedProductCookies.map(async (parsedProductCookie: ParsedCookie) => {
      const matchingProduct = await getProductById(
        Number(parsedProductCookie.id),
      );

      const productWithQuantity: ProductWithQuantity = {
        id: matchingProduct?.id || 0,
        name: matchingProduct?.name || '',
        size: matchingProduct?.size || '',
        price: matchingProduct?.price || 0,
        description: matchingProduct?.description || '',
        totalQuantity: parsedProductCookie.totalQuantity || 0,
      };

      return productWithQuantity;
    }),
  );

  if (combinedProducts.length === 0) {
    return undefined;
  }

  return combinedProducts;
}

export function calculateTotal(
  productObjectArray: ProductWithQuantity[] | undefined,
) {
  const products = productObjectArray || [];
  return products.reduce(
    (total, item) => total + item.totalQuantity * item.price,
    0,
  );
}

export default async function CartPage() {
  // load cookie content
  const productQuantity = await getCurrentProducts();

  const productsInCart = await combineProductQuantity(productQuantity);

  // map according to items in cookie
  // use Promise.all in order resolve all database requests

  // const productsInCart = await Promise.all(
  //   productQuantity.map(async (parsedCookieProduct: ParsedCookie) => {
  //     const matchingProduct = await getProductById(
  //       Number(parsedCookieProduct.id),
  //     );

  //     return {
  //       ...matchingProduct,
  //       totalQuantity: parsedCookieProduct.totalQuantity,
  //     };
  //   }),
  // );

  // function calculateTotal() {
  //   return productsInCart.reduce(
  //     (total, item) => total + item.totalQuantity * item.price,
  //     0,
  //   );
  // }

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
        <section className="basicFlex cartPaddingGlobal basicFlexVertical bottomGapHalf">
          {productsInCart!.map((productInCart) => {
            return (
              <div
                key={`product-${productInCart.id}`}
                data-test-id={`cart-product-${productInCart.id}>`}
              >
                <CurrentItem
                  id={productInCart.id || 0}
                  name={productInCart.name || ''}
                  price={productInCart.price || 0}
                  totalQuantity={productInCart.totalQuantity || 0}
                />
              </div>
            );
          })}
        </section>
        <div className="basicFlex cartSpaceBetween cartPaddingGlobal bottomGapHalf">
          <p>Total price:</p>
          <div>
            <span data-test-id="cart-total" className="boldParagraph pTitle">
              {calculateTotal(productsInCart)}
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
