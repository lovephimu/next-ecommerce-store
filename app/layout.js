import './globals.scss';
import { Lato } from 'next/font/google';
import Link from 'next/link';
import Count from './Count';
import styles from './page.module.scss';

const lato = Lato({
  weight: ['300', '400', '900'],
  // style: ['normal', 'italic'],
  subsets: ['latin'],
  // display: 'swap',
});

export const metadata = {
  title: 'yesTent',
  description: 'Our Products',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <header>
          <div
            className={`${styles.headerBox} ${styles.basicFlex} ${styles.basicFlexAlignCenter}`}
          >
            <Link className={styles.logo} href="/">
              yesTent
            </Link>
            <Link href="/products" data-test-id="products-link">
              Products
            </Link>
            <Link href="/cart">Cart:</Link>
            <span>Count</span>
            <Count />
            <Link href="/cart/checkout">Check Out</Link>
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
