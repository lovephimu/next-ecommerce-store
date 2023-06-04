import { expect, test } from '@jest/globals';
import { calculateTotal, ProductWithQuantity } from '../../app/cart/page';

test('Test cart sum function', () => {
  const testObjectArray: ProductWithQuantity[] = [
    {
      id: 1,
      name: 'yesHouse',
      size: 'car tent',
      price: 1000,
      description: 'real nice tent',
      totalQuantity: 2,
    },
    {
      id: 1,
      name: 'yesChillax',
      size: 'medium',
      price: 2000,
      description: 'real nice house tent',
      totalQuantity: 3,
    },
  ];
  const sum = calculateTotal(testObjectArray);
  expect(sum).toBe(8000);
});
