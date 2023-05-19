type Product = {
  id: number;
  name: string;
  size: string;
  description: string;
  price: number;
};

const tentDescriptionA = 'a real nice tent';
const tentDescriptionB = 'a real nice tent';
const tentDescriptionC = 'a real nice tent';
const tentDescriptionD = 'a real nice tent';
const tentDescriptionE = 'a real nice tent';

export const products: Product[] = [
  { id: 1, name: 'tent_a', size: 'verySmall', description: '', price: 1000 },
  { id: 2, name: 'tent_b', size: 'small', description: '', price: 2000 },
  { id: 3, name: 'tent_c', size: 'medium', description: '', price: 3000 },
  { id: 4, name: 'tent_d', size: 'large', description: '', price: 4000 },
  { id: 5, name: 'tent_e', size: 'veryLarge', description: '', price: 5000 },
];

export function getProductById(id: number) {
  return products.find((product) => product.id === id);
}
