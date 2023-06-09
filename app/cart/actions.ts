'use server';
import { cookies } from 'next/headers';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';

export async function getCurrentProducts() {
  const productQuantityCookie = await getCookie('cart');
  const productQuantity = !productQuantityCookie
    ? []
    : parseJson(productQuantityCookie);
  return productQuantity;
}

export async function getCurrentQuantity(id: number) {
  const productQuantityCookie = await getCookie('cart');
  const productQuantity = !productQuantityCookie
    ? []
    : parseJson(productQuantityCookie);

  const individualProduct = productQuantity?.find(
    (item: { id: number; totalQuantity: number }) => item.id === id,
  );

  return individualProduct;
}

export async function emptyCookie() {
  // @ts-ignore
  await cookies().set('cart', JSON.stringify([]));
}
