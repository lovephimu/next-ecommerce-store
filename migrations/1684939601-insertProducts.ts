import { Sql } from 'postgres';
import { Product } from './1684938667-createTableProducts';

const tentDescriptionA = 'a real nice tent';
const tentDescriptionB = 'a real nice tent';
const tentDescriptionC = 'a real nice tent';
const tentDescriptionD = 'a real nice tent';
const tentDescriptionE = 'a real nice tent';

export const products: Product[] = [
  {
    id: 1,
    name: 'tent_a',
    size: 'verySmall',
    price: 1000,
    description: tentDescriptionA,
  },
  {
    id: 2,
    name: 'tent_b',
    size: 'small',
    price: 2000,
    description: tentDescriptionB,
  },
  {
    id: 3,
    name: 'tent_c',
    size: 'medium',
    price: 3000,
    description: tentDescriptionC,
  },
  {
    id: 4,
    name: 'tent_d',
    size: 'large',
    price: 4000,
    description: tentDescriptionD,
  },
  {
    id: 5,
    name: 'tent_e',
    size: 'veryLarge',
    price: 5000,
    description: tentDescriptionE,
  },
];

export async function up(sql: Sql) {
  for (const product of products) {
    await sql`
    INSERT INTO products
    (name, size, price, description)
    VALUES
    (${product.name}, ${product.size}, ${product.price}, ${product.description})
    `;
  }
}

export async function down(sql: Sql) {
  for (const product of products) {
    await sql`
  DELETE FROM products WHERE id = ${product.id}
  `;
  }
}
