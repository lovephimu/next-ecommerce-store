import { expect, test } from '@jest/globals';
import { combineProductQuantity } from '../../app/cart/page';

test('Test function that combines the product data', async () => {
  const testCookieData = [
    {
      id: 1,
      totalQuantity: 5,
    },
    {
      id: 2,
      totalQuantity: 6,
    },
  ];
  const combinedProducts = await combineProductQuantity(testCookieData);

  expect(combinedProducts).toStrictEqual([
    {
      id: combinedProducts?.[0]?.id ?? 0,
      name: combinedProducts?.[0]?.name ?? '',
      size: combinedProducts?.[0]?.size ?? '',
      price: combinedProducts?.[0]?.price ?? 0,
      description: combinedProducts?.[0]?.description ?? '',
      totalQuantity: combinedProducts?.[0]?.totalQuantity ?? 0,
    },
    {
      id: combinedProducts?.[1]?.id,
      name: combinedProducts?.[1]?.name ?? '',
      size: combinedProducts?.[1]?.size ?? '',
      price: combinedProducts?.[1]?.price ?? 0,
      description: combinedProducts?.[1]?.description ?? '',
      totalQuantity: combinedProducts?.[1]?.totalQuantity ?? 0,
    },
  ]);
});
