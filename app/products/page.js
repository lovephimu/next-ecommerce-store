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
      <h1 className="bottomGap">Our products</h1>
      <section className="listFlex">
        {products.map((product) => {
          return (
            <div key={`product-div-${product.id}`} className="listFlexItem">
              <div className="contentFlex basicFlexVertical">
                <Link
                  data-test-id={`product-${product.id}`}
                  href={`/products/${product.id}`}
                >
                  <Image
                    src={`/images/${product.name}_product_sm.png`}
                    alt="Product pic"
                    width={300}
                    height={300}
                  />
                </Link>
                <div className="basicFlex basicFlexVertical backProduct basicFlexAlignCenter">
                  <Link
                    data-test-id={`product-${product.id}`}
                    href={`/products/${product.id}`}
                    className="productSite"
                  >
                    <h1 className="bottomGapHalf">{product.name}</h1>
                  </Link>
                </div>
                <p className="basicFlex basicFlexJustifyCenter backProductDark">
                  {product.size}
                </p>
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
}
