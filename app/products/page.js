import Image from 'next/image';
import Link from 'next/link';
import { products } from '../../database/products';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';

export const metadata = {
  title: 'Animals page',
  description: 'My favorite animals',
};

export const dynamic = 'force-dynamic';

export default function ProductsPage() {
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
