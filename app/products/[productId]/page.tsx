import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProductById } from '../../../database/products';
import QuantityButton from './QuantityButton';

type Props = {
  params: { productId: string };
};

export const dynamic = 'force-dynamic';

export default function ProductPage(props: Props) {
  const singleProduct = getProductById(Number(props.params.productId));

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
        alt="Product pic"
      />
      <div>{singleProduct.size}</div>
      <div data-test-id="product-price">{singleProduct.price}</div>
      <QuantityButton />
      <p>starting quantity should be 1</p>
      <button data-test-id="product-add-to-cart">Add to cart</button>
    </main>
  );
}
