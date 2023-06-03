import { Sql } from 'postgres';

// export the type to make it visible to other migration files

// type Product = {
//   id: number;
//   name: string;
//   size: string;
//   price: number;
//   description: string | null;
// };

export async function up(sql: Sql) {
  await sql`
  CREATE TABLE products (
    id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name varchar(30) NOT NULL,
    size varchar(30) NOT NULL,
    price integer NOT NULL,
    description varchar NOT NULL
  )
  `;
}

export async function down(sql: Sql) {
  await sql`
  DROP TABLE products
  `;
}
