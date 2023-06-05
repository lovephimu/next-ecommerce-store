import { expect, test } from '@jest/globals';
import { combineData } from '../../functions/combineData';

test('Test function that combines the product data', () => {
  const testProducts = [
    {
      id: 1,
      name: 'yesChillax',
      size: 'verySmall',
      price: 1000,
      description: 'test',
    },
    {
      id: 2,
      name: 'yesHoney',
      size: 'small',
      price: 2000,
      description: 'test',
    },
    {
      id: 3,
      name: 'yesHoney',
      size: 'small',
      price: 2000,
      description: 'test',
    },
  ];

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
  const combinedProducts = combineData(testProducts, testCookieData);

  expect(combinedProducts).toStrictEqual([
    {
      id: 1,
      name: 'yesChillax',
      size: 'verySmall',
      price: 1000,
      description: 'test',
      totalQuantity: 5,
    },
    {
      id: 2,
      name: 'yesHoney',
      size: 'small',
      price: 2000,
      description: 'test',
      totalQuantity: 6,
    },
  ]);
});
