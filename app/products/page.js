import Image from 'next/image';
import Link from 'next/link';
import { getProducts } from '../../database/products';

export const metadata = {
  title: 'yesTent',
  description: 'Our Products',
};

export const dynamic = 'force-dynamic';

export default async function ProductsPage() {
  const products = await getProducts();
  return (
    <main>
      Our products:
      {products.map((product) => {
        return (
          <div key={`product-div-${product.id}`}>
            <Link
              data-test-id={`product-${product.id}`}
              href={`/products/${product.id}`}
            >
              {product.name}
            </Link>
            <br />
            <Image
              src={`/images/${product.name}.png`}
              width={100}
              height={100}
              alt="Product pic"
            />
          </div>
        );
      })}
    </main>
  );
}
