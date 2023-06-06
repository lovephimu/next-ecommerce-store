import Image from 'next/image';
import Link from 'next/link';
import { getProducts } from '../../database/products';

export const metadata = {
  title: 'yesTent - products',
  description: 'Our Products',
};

export const dynamic = 'force-dynamic';

export default async function ProductsPage() {
  const products = await getProducts();
  return (
    <main className="structureFlex basicFlexVertical cartPaddingGlobal bottomGap">
      <h1 className="bottomGap">Our products:</h1>
      {/* evtl grid hier */}
      <section className="listFlex">
        {products.map((product) => {
          return (
            <div key={`product-div-${product.id}`} className="listFlexItem">
              <div className="contentFlex basicFlexVertical bottomPaddingHalf">
                <img
                  src={`/images/${product.name}_product_sm.jpg`}
                  alt="Product pic"
                />
                <Link
                  data-test-id={`product-${product.id}`}
                  href={`/products/${product.id}`}
                >
                  <h1 className="bottomPadding">{product.name}</h1>
                </Link>
                <p>{product.description}</p>
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
}
