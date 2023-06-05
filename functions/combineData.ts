import { ParsedCookie, ProductWithQuantity } from '../app/cart/page';
import { Product } from '../database/products';

export function combineData(
  products: Product[],
  productsInCookie: ParsedCookie[],
): ProductWithQuantity[] {
  const combinedProducts: ProductWithQuantity[] = productsInCookie.map(
    (productInCookie: ParsedCookie): ProductWithQuantity => {
      const matchingProduct = products.find(
        (product: Product) => product.id === productInCookie.id,
      );

      return {
        ...matchingProduct!,
        totalQuantity: productInCookie.totalQuantity,
      };
    },
  );

  return combinedProducts;
}
