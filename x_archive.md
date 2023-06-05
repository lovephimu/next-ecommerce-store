// -------------------------- old sum method

// export function calculateTotal(
// productObjectArray: ProductWithQuantity[] | undefined,
// ) {
// const products = productObjectArray || [];
// return products.reduce(
// (total, item) => total + item.totalQuantity \* item.price,
// 0,
// );
// }

// -------------------------- old combine method

// map according to items in cookie
// use Promise.all in order resolve all database requests

// const productsInCart = await Promise.all(
// productQuantity.map(async (parsedCookieProduct: ParsedCookie) => {
// const matchingProduct = await getProductById(
// Number(parsedCookieProduct.id),
// );

// return {
// ...matchingProduct,
// totalQuantity: parsedCookieProduct.totalQuantity,
// };
// }),
// );

// function calculateTotal() {
// return productsInCart.reduce(
// (total, item) => total + item.totalQuantity \* item.price,
// 0,
// );
// }
 
---------------- even older method

// export async function combineProductQuantity(
//   parsedProductCookies: ParsedCookie[],
// ): Promise<ProductWithQuantity[] | undefined> {
//   const combinedProducts = await Promise.all(
//     parsedProductCookies.map(async (parsedProductCookie: ParsedCookie) => {
//       const matchingProduct = await getProductById(
//         Number(parsedProductCookie.id),
//       );

//       const productWithQuantity: ProductWithQuantity = {
//         id: matchingProduct?.id || 0,
//         name: matchingProduct?.name || '',
//         size: matchingProduct?.size || '',
//         price: matchingProduct?.price || 0,
//         description: matchingProduct?.description || '',
//         totalQuantity: parsedProductCookie.totalQuantity || 0,
//       };

//       return productWithQuantity;
//     }),
//   );

//   if (combinedProducts.length === 0) {
//     return undefined;
//   }

//   return combinedProducts;
// }
