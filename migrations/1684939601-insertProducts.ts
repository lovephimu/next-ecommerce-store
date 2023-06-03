import { Sql } from 'postgres';
import { Product } from '../database/products';

const tentDescriptionA = 'a real nice tent';
const tentDescriptionB = 'a real nice tent';
const tentDescriptionC = 'a real nice tent';
const tentDescriptionD = 'a real nice tent';

export const products: Product[] = [
  {
    id: 1,
    name: 'yesChillax',
    size: 'verySmall',
    price: 1000,
    description: tentDescriptionA,
  },
  {
    id: 2,
    name: 'yesHoney',
    size: 'small',
    price: 2000,
    description: tentDescriptionB,
  },
  {
    id: 3,
    name: 'yesRave',
    size: 'medium',
    price: 3000,
    description: tentDescriptionC,
  },
  {
    id: 4,
    name: 'yesCat',
    size: 'large',
    price: 500,
    description: tentDescriptionD,
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
