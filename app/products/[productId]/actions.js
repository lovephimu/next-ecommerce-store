'use server';

import { cookies } from 'next/headers';
import { getCookie } from '../../../util/cookies';
import { parseJson } from '../../../util/json';

// 1. First part of updateProductQuantity
// function that updates the number of products in cart
// accepts an Id and quantity
// loads the existing cookie
// IF cookie does not exist - creates one with empty array
// ELSE transform cookie strings into js objects
// AND look for the product to be updated matching the initial ID

export async function updateProductQuantity(productId, quantity) {
  const productQuantityCookie = getCookie('cart');
  const productQuantity = !productQuantityCookie
    ? []
    : parseJson(productQuantityCookie);
  const productToUpdate = productQuantity.find((product) => {
    return product.id === productId;
  });

  // 2. Second part
  // IF productToUpdate is truthy
  // set product existing quantity to input quantity
  // ELSE if product to update is falsy
  // create new product object with input ID and quantity
  // AWAIT to set the cookie 'productQuantity' to constructed variable

  if (productToUpdate) {
    productToUpdate.totalQuantity += quantity;
  } else {
    productQuantity.push({
      id: productId,
      totalQuantity: quantity,
    });
  }
  await cookies().set('cart', JSON.stringify(productQuantity));
}

// Delete a product from the cart cookie:
// call deleteProduct and input an ID number
// this calls a filter that returns everything except
// the object that matches the input ID

export async function deleteProduct(productId) {
  const productQuantityCookie = getCookie('cart');
  const productQuantity = !productQuantityCookie
    ? []
    : parseJson(productQuantityCookie);

  const newQuantity = productQuantity.filter(
    (product) => product.id !== productId,
  );

  await cookies().set('cart', JSON.stringify(newQuantity));
}

export async function emptyCookie() {
  const emptyArray = [];

  await cookies().set('cart', JSON.stringify(emptyArray));
}
