import { expect, test } from '@playwright/test';

test('checkout flow test', async ({ page }) => {
  await expect(page.getByTestId('checkout-confirm-order')).toHaveAttribute(
    '{disabled}',
    '{true}',
  );
  await expect(page).not.toHaveURL(
    'http://localhost:3000/cart/checkout/thankyou',
  );

  await page.goto('http://localhost:3000/cart/checkout');

  await page.getByTestId('checkout-first-name').fill('Domenic');

  await page.getByTestId('checkout-last-name').fill('Toretto');

  await page.getByTestId('checkout-email').fill('dom@family.com');

  await page.getByTestId('checkout-address').fill('Picturesque Alley FF/10');

  await page.getByTestId('checkout-city').fill('Los Angeles');

  await page.getByTestId('checkout-postal-code').fill('CA 90026');

  await page.getByTestId('checkout-country').fill('USA');

  await page.getByTestId('checkout-credit-card').fill('1234 4567 8910 1112');

  await page.getByTestId('checkout-expiration-date').fill('12/99');

  await page.getByTestId('checkout-security-code').fill('999');

  await page.getByTestId('checkout-confirm-order').click();
  await expect(page).toHaveURL('http://localhost:3000/cart/checkout/thankyou');
});
