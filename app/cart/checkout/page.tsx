import { getProductById } from '../../../database/products';
import { Product } from '../../../migrations/1684938667-createTableProducts';
import { getCurrentProducts } from '../actions';
import CheckOutForm from './CheckOutForm';

export default async function CheckOutPage() {
  const productsInCookie = await getCurrentProducts();
  // const productPrices = productsInCookie.map((product: Product) => {});

  return (
    <main>
      <h1 className="cartPaddingGlobal bottomGap">Check Out For Real</h1>

      <CheckOutForm />
    </main>
  );
}
