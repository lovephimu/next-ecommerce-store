import { getNamePriceById } from '../../../database/products';
import { getCurrentProducts } from '../actions';
import CheckOutForm from './CheckOutForm';

export default async function CheckOutPage() {
  type ParsedCookie = {
    id: number;
    totalQuantity: number;
  };

  const productsInCookie = await getCurrentProducts();

  const productNamePrices = await Promise.all(
    productsInCookie.map(async (product: ParsedCookie) => {
      const matchingProduct = await getNamePriceById(Number(product.id));

      return {
        ...matchingProduct,
        totalQuantity: product.totalQuantity,
      };
    }),
  );

  function calculateTotal() {
    return productNamePrices.reduce(
      (total, item) => total + item.totalQuantity * item.price,
      0,
    );
  }

  return (
    <main className="structureFlex">
      <section className="basicFlex basicFlexVertical  cartPaddingGlobal">
        <h1 className="bottomGap">Check Out For Real</h1>
        <p className="bottomGapHalf">Order summary: {calculateTotal()}€</p>
        <CheckOutForm />
      </section>
    </main>
  );
}
