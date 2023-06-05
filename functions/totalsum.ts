import { ProductWithQuantity } from '../app/cart/page';

export function totalSum(
  productObjectArray: ProductWithQuantity[] | undefined,
) {
  const products = productObjectArray || [];
  return products.reduce(
    (total, item) => total + item.totalQuantity * item.price,
    0,
  );
}
