import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProductByName } from '../../../database/products';
import QuantityButton from './QuantityButton';

export const dynamic = 'force-dynamic';

export default function ProductPage({ params }) {
  const singleProduct = getProductByName(Number(params.productId));

  console.log(singleProduct);

  if (!singleProduct) {
    notFound();
  }

  return (
    <main>
      <h1>{singleProduct.name}</h1>
      <Image
        data-test-id="product-image"
        src={`/images/${singleProduct.name}.png`}
        width={200}
        height={200}
      />
      <div>{singleProduct.size}</div>
      <div data-test-id="product-price">{singleProduct.price}</div>
      <QuantityButton />
      <p>starting quantity should be 1</p>
      <button data-test-id="product-add-to-cart">Add to cart</button>
    </main>
  );
}
