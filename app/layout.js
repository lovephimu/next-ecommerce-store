import './globals.scss';
import { Lato } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import IconCart from '../public/images/Icon_Cart.js';
import Count from './Count';
import styles from './layout.module.scss';

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
      <body className={`${lato.className} bodyWrap`}>
        <header>
          <nav
            className={`${styles.headerBox} ${styles.navFlex} ${styles.navFlexAlignCenter} ${styles.nav}`}
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
          </nav>
          <nav className={`${styles.headerBox} ${styles.navSmall}`}>
            <div className={`${styles.navFlex} ${styles.navFlexAlignCenter}`}>
              <Link className={styles.logo} href="/">
                yesTent
              </Link>
              <div className={styles.navFlexItem}>
                <div className={styles.menu}>
                  <span className={styles.menuButton}>Menu</span>
                  <ul className={styles.navList}>
                    <li>
                      <Link href="/products" data-test-id="products-link">
                        Products
                      </Link>
                    </li>
                    <li>
                      <Link href="/about">About</Link>
                    </li>
                  </ul>
                </div>
                <div className={styles.menuCart}>
                  <Link href="/cart" className={styles.menuCart}>
                    <Image
                      src="/images/Icon_Cart.svg"
                      width={32}
                      height={32}
                      alt="cart svg"
                    />
                    <Count />
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </header>
        <main className="content">{children}</main>
        <footer className={styles.footer}>some footer</footer>
      </body>
    </html>
  );
}
