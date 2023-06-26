import { Sql } from 'postgres';

export async function up(sql: Sql) {
  await sql`
  CREATE TABLE products (
    id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name varchar(30) NOT NULL,
    size varchar(100) NOT NULL,
    price integer NOT NULL,
    description text
  )
  `;
}

export async function down(sql: Sql) {
  await sql`
  DROP TABLE products
  `;
}
