import { getProductById, Product } from '../../../database/products';
import { getCurrentProducts } from '../actions';
import CheckOutForm from './CheckOutForm';

export default async function CheckOutPage() {
  const productsInCookie = await getCurrentProducts();
  // const productPrices = productsInCookie.map((product: Product) => {});

  return (
    <main>
      <section className="structureFlex basicFlexVertical widthWideMode">
        <h1 className="cartPaddingGlobal bottomGap">Check Out For Real</h1>
        <CheckOutForm />
      </section>
    </main>
  );
}
