import { Sql } from 'postgres';
import { Product } from '../database/products';

const tentDescriptionAsize = 'Cabin sized tent';
const tentDescriptionA = `Introducing YesChillax - the portable cabin-sized tent that brings the feeling of home wherever you go. This innovative tent is your dream retreat on the move. Designed with utmost comfort in mind, YesChillax offers a spacious interior with all the amenities you need to relax and unwind. \n
With its easy setup and compact size, YesChillax is your ideal travel companion. Take it to the mountains, beaches, or any destination you've always wanted to settle down. \n
Experience the joy of having your cozy sanctuary no matter where your adventures take you. YesChillax is your ticket to ultimate relaxation, allowing you to create cherished memories while feeling right at home. \n
Discover the freedom to settle down wherever your heart desires with YesChillax - the perfect blend of comfort, convenience, and wanderlust.`;
const tentDescriptionBsize = 'Car tent for you and your boo';
const tentDescriptionB = `Introducing the ultimate car tent, perfect for adventure and romance in remote locations. Crafted from durable, weather-resistant materials, this compact tent is built to withstand nature's elements. Its easy setup and lightweight design make it ideal for off-the-beaten-path destinations.\n
Unfold the tent to discover a romantic oasis. The interior features a plush mattress and luxurious bedding for ultimate comfort. Adjustable LED lights create a warm ambiance, enhancing the romantic atmosphere. Large panoramic windows offer breathtaking views, immersing you in the beauty of nature. The innovative ventilation system ensures fresh air and privacy.\n
Whether nestled in a secluded forest or atop a picturesque mountain, this car tent is the epitome of adventure and romance. Embark on an unforgettable journey together, creating cherished memories in remote and breathtaking locations.
`;
const tentDescriptionCsize = 'Super sized car tent';
const tentDescriptionC = `Introducing yesRave - the ultimate mobile party experience!\n
This innovative car tent features a unique spherical design with a spacious dance floor. Crafted for mobility and unforgettable parties on the move, yesRave brings the excitement wherever you go.\n
With premium materials and easy car attachment, YesRave offers versatility and durability. Take the party from beachside bonfires to mountainous retreats, creating vibrant dance parties in any location.\n
Dance to your favorite tunes as synchronized LED lights amplify the energy on the dance floor, making every moment unforgettable. Convenient setup and compact storage make yesRave ideal for spontaneous celebrations.\n
It seamlessly fits in your car trunk, ready to transform any setting into an electrifying party, rain or shine. Let yesRave be your ticket to endless adventures and epic memories.`;
const tentDescriptionDsize = 'Window attachable tent for cats';
const tentDescriptionD = `Introducing yesCat - the ultimate window tent for your feline companion!\n
Give your beloved cat the freedom to enjoy the outdoors without straying too far from home.
The yesCat window tent is a secure and playful alternative that attaches to your window, providing a safe and comfortable space for your cat.\n
Crafted with durable materials, yesCat offers a sturdy design that ensures your cat's safety and enjoyment.\n
With easy installation and mesh windows for ventilation and visibility, yesCat allows your cat to experience the sights, sounds, and fresh air while staying protected.\n
Encourage exercise and mental stimulation for your cat as they lounge, play, and observe the world outside.\n
Give your cat the best of both worlds with yesCat!\n`;

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
