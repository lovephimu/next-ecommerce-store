import { getCurrentProducts } from './cart/actions';

export default function Count() {
  async function showProductAmount() {
    const currentProducts = await getCurrentProducts();

    return currentProducts.reduce(
      (total, item) => total + item.totalQuantity,
      0,
    );
  }

  return <p>{showProductAmount()}</p>;
}
