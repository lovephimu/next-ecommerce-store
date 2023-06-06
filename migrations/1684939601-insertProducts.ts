import { Sql } from 'postgres';
import { Product } from '../database/products';

const tentDescriptionAsize = 'Cabin sized tent';
const tentDescriptionA = 'Cabin sized tent';
const tentDescriptionBsize = 'Car tent for two';
const tentDescriptionB = `<p>Introducing the ultimate car tent, perfect for adventure and romance in remote locations.</p>
<p>Crafted from durable, weather-resistant materials, this compact tent is built to withstand nature's elements. Its easy setup and lightweight design make it ideal for off-the-beaten-path destinations.</p>
<p>Unfold the tent to discover a romantic oasis. The interior features a plush mattress and luxurious bedding for ultimate comfort. Adjustable LED lights create a warm ambiance, enhancing the romantic atmosphere.</p>
<p>Large panoramic windows offer breathtaking views, immersing you in the beauty of nature. The innovative ventilation system ensures fresh air and privacy.</p>
<p>For convenience, the tent includes storage pockets to keep your essentials organized. Stay connected with the portable charging system.</p>
<p>Whether nestled in a secluded forest or atop a picturesque mountain, this car tent is the epitome of adventure and romance. Embark on an unforgettable journey together, creating cherished memories in remote and breathtaking locations.</p>`;
const tentDescriptionCsize = 'Super sized car tent';
const tentDescriptionC = 'Super sized car tent';
const tentDescriptionDsize = 'Window attachable tent for cats';
const tentDescriptionD = 'Window attachable tent for cats';

export const products: Product[] = [
  {
    id: 1,
    name: 'yesChillax',
    size: tentDescriptionAsize,
    price: 1000,
    description: tentDescriptionA,
  },
  {
    id: 2,
    name: 'yesHoney',
    size: tentDescriptionBsize,
    price: 2000,
    description: tentDescriptionB,
  },
  {
    id: 3,
    name: 'yesRave',
    size: tentDescriptionCsize,
    price: 3000,
    description: tentDescriptionC,
  },
  {
    id: 4,
    name: 'yesCat',
    size: tentDescriptionDsize,
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
