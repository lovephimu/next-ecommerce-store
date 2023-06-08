import { getProducts } from '../../../database/products';
import { combineData } from '../../../functions/combineData';
import { totalSum } from '../../../functions/totalsum';
import { getCurrentProducts } from '../actions';
import CheckOutForm from './CheckOutForm';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'yesTent - check out',
  description: 'Check out',
};

export default async function CheckOutPage() {
  const productsInCookie = await getCurrentProducts();

  const allProducts = await getProducts();

  const productsInArray = combineData(allProducts, productsInCookie);

  return (
    <main className="structureFlex">
      <section className="basicFlex basicFlexVertical cartPaddingGlobal">
        <h1>Check Out</h1>
        <div className="basicFlex">
          <CheckOutForm totalSum={totalSum(productsInArray)} />
        </div>
      </section>
    </main>
  );
}
