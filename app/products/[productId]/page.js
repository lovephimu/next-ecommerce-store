import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProductByName } from '../../../database/products';

export const dynamic = 'force-dynamic';

export default function ProductPage({ params }) {
  const singleProduct = getProductByName(params.productId);

  console.log(singleProduct);

  if (!singleProduct) {
    notFound();
  }

  return (
    <main>
      <h1>{singleProduct.name}</h1>
      <Image
        src={`/images/${singleProduct.name}.png`}
        width={200}
        height={200}
      />
      this is a {singleProduct.size} carrying a {singleProduct.object}
    </main>
  );
}
