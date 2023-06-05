import { ParsedCookie } from '../app/cart/page';
import { parseJson } from '../util/json';

export function updateProductQuantity(
  productId: number,
  quantity: number,
  cookie: string,
) {
  const productQuantity = !cookie ? [] : parseJson(cookie);
  const productToUpdate = productQuantity.find((product: ParsedCookie) => {
    return product.id === productId;
  });

  if (productToUpdate) {
    productToUpdate.totalQuantity += quantity;
  } else {
    productQuantity.push({
      id: productId,
      totalQuantity: quantity,
    });
  }
  return productToUpdate;
}
