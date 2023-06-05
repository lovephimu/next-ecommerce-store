import { ParsedCookie } from '../app/cart/page';
import { Product } from '../database/products';

export function combineData(
  products: Product[],
  productsInCookie: ParsedCookie[],
) {
  const combinedProducts = products
    .map((product: Product) => {
      const matchingProduct = productsInCookie.find(
        (cookieProduct: ParsedCookie) => product.id === cookieProduct.id,
      );

      return { ...product, totalQuantity: matchingProduct?.totalQuantity };
    })
    .filter((product) => product.totalQuantity !== undefined);

  return combinedProducts;
}
