'use server';

// import { cookies } from 'next/headers';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';

export async function getCurrentProducts() {
  const productQuantityCookie = await getCookie('cart');
  const productQuantity = !productQuantityCookie
    ? []
    : parseJson(productQuantityCookie);
  return productQuantity;
}
