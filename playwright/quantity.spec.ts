import { expect, test } from '@playwright/test';

test('quantity manipulation test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await expect(page.getByRole('link', { name: 'Products' })).toBeVisible();

  await page.getByRole('link', { name: 'Products' }).click();
  await expect(page).toHaveURL('http://localhost:3000/products');

  await page.getByRole('link', { name: 'yesChillax' }).click();
  await expect(page).toHaveURL('http://localhost:3000/products/1');

  const defaultQuantity = await page
    .getByTestId('product-quantity')
    .inputValue();
  await expect(defaultQuantity).toBe('1');

  await page.getByRole('button', { name: '+' }).click();

  const plusQuantity = await page.getByTestId('product-quantity').inputValue();
  await expect(plusQuantity).toBe('2');

  await page.getByRole('button', { name: '-' }).click();

  const minusQuantity = await page.getByTestId('product-quantity').inputValue();
  await expect(minusQuantity).toBe('1');

  await page.getByTestId('product-add-to-cart').click();

  await page.getByRole('link', { name: 'Cart' }).click();
  await expect(page).toHaveURL('http://localhost:3000/cart');

  await expect(page.getByTestId('cart-product-quantity-1')).toBeVisible;
  await expect(page.getByTestId('cart-product-remove-1')).toBeVisible;

  await expect(page.getByRole('button', { name: 'x' })).toBeVisible;
  await page.getByRole('button', { name: 'x' }).click();

  // await page.getByTestId('cart-product-remove-1').click();
});
// await page.waitForTimeout(6000);
// await expect(page.getByTestId('cart-product-quantity-1')).not.toBeVisible;
