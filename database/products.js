export const products = [
  { id: '1', name: 'tent_a', size: 'verySmall', price: 1000 },
  { id: '2', name: 'tent_b', size: 'small', price: 2000 },
  { id: '3', name: 'tent_c', size: 'medium', price: 3000 },
  { id: '4', name: 'tent_d', size: 'large', price: 4000 },
  { id: '5', name: 'tent_e', size: 'veryLarge', price: 5000 },
];

export function getProductByName(id) {
  return products.find((product) => product.id === id);
}
