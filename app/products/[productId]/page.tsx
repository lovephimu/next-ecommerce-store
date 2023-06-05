import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProductById } from '../../../database/products';
import QuantityAddButton from './QuantityAddButton';

type Props = {
  params: { productId: string };
};

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'yesTent - product',
  description: 'Our Products',
};

export default async function ProductPage(props: Props) {
  // getProductById gathers basic product info

  const singleProduct = await getProductById(Number(props.params.productId));

  if (!singleProduct) {
    notFound();
  }

  // layout for individual product

  return (
    <main className="structureFlex ">
      <div className="contentFlex cartPaddingGlobal productFlexDirection widthWideMode">
        <p className="productNav bottomGap">
          <Link href={{ pathname: '/products' }}>⬅ Return to Products</Link>
        </p>
        <h1 className="productTitle bottomGap">{singleProduct.name}</h1>
        <Image
          data-test-id="product-image"
          className="productImage"
          src={`/images/${singleProduct.name}_product.png`}
          width={200}
          height={200}
          alt="Product pic"
        />
        <div>{singleProduct.size}</div>
        <p className="bottomGap">{singleProduct.description}</p>

        <QuantityAddButton
          productId={Number(singleProduct.id)}
          productPrice={singleProduct.price}
        />
      </div>
    </main>
  );
}
