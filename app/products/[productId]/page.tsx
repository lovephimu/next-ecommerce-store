import Image from 'next/image';
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
      <div className="listFlex cartPaddingGlobal listStructureWidth">
        <div className="basicFlex basicFlexVertical">
          {/* <p className="productNav">
            <Link href={{ pathname: '/products' }}>⬅ Return to Products</Link>
          </p> */}
          <h1 className="bottomGap">{singleProduct.name}</h1>
        </div>
        <div className="listItemFlex listWidthBig listMaxHeight">
          <Image
            data-test-id="product-image"
            src={`/images/${singleProduct.name}_product.png`}
            width={400}
            height={400}
            alt="Product pic"
          />
          <div>{singleProduct.size}</div>
        </div>
        <p className="listFlexItem listWidthBig listMaxHeight bottomGap">
          {singleProduct.description}
        </p>

        <QuantityAddButton
          productId={Number(singleProduct.id)}
          productPrice={singleProduct.price}
        />
      </div>
    </main>
  );
}
