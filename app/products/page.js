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
    <main className="structureFlex basicFlexVertical">
      <h1 className="bottomGap">Our products:</h1>
      {products.map((product) => {
        return (
          <section
            key={`product-div-${product.id}`}
            className="basicFlex cartPaddingGlobal bottomGap"
          >
            <div className="basicFlex cartSpaceBetween cartBorder bottomPaddingHalf">
              <Image
                src={`/images/${product.name}.png`}
                width={300}
                height={300}
                alt="Product pic"
              />
              <Link
                data-test-id={`product-${product.id}`}
                href={`/products/${product.id}`}
              >
                <h1>{product.name}</h1>
              </Link>
            </div>
          </section>
        );
      })}
    </main>
  );
}
