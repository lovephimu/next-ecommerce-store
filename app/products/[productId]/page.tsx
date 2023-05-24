import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProductById } from '../../../database/products';
import QuantityAddButton from './QuantityAddButton';

type Props = {
  params: { productId: string };
};

export const dynamic = 'force-dynamic';

export default async function ProductPage(props: Props) {
  // getProductById gathers basic product info

  const singleProduct = await getProductById(Number(props.params.productId));

  if (!singleProduct) {
    notFound();
  }

  // layout for individual product

  return (
    <main>
      <p>
        Return to <Link href={{ pathname: '/products' }}>Products</Link>
      </p>
      <h1>{singleProduct.name}</h1>
      <Image
        data-test-id="product-image"
        src={`/images/${singleProduct.name}.png`}
        width={200}
        height={200}
        alt="Product pic"
      />
      <div>{singleProduct.size}</div>
      <div data-test-id="product-price">{singleProduct.price}</div>
      <QuantityAddButton productId={singleProduct.id} />
      <p>{singleProduct.description}</p>
    </main>
  );
}
