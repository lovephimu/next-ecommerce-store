import { expect, test } from '@jest/globals';
import { updateProductQuantity } from '../../functions/updateProduct';

test('Test to check updating quantity function of cookie', () => {
  // test cookie:
  // [{"id":2,"totalQuantity":3},{"id":3,"totalQuantity":1}]

  const productQuantityCookie = decodeURIComponent(
    '%5B%7B%22id%22%3A2%2C%22totalQuantity%22%3A3%7D%2C%7B%22id%22%3A3%2C%22totalQuantity%22%3A1%7D%5D',
  );

  expect(productQuantityCookie).toStrictEqual(
    `[{"id":2,"totalQuantity":3},{"id":3,"totalQuantity":1}]`,
  );

  expect(updateProductQuantity(2, 2, productQuantityCookie)).toStrictEqual({
    id: 2,
    totalQuantity: 5,
  });
});
