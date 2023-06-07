import Image from 'next/image';
import Link from 'next/link';
import Count from './Count';
import styles from './layout.module.scss';

export default function NavBar() {
  return (
    <header>
      <nav
        className={`${styles.headerBox} ${styles.navFlex} ${styles.navFlexAlignCenter} ${styles.nav}`}
      >
        <div className="contentFlex">
          <Link className={styles.logo} href="/">
            yesTent
          </Link>
        </div>
        <div className="contentFlex">
          <Link href={{ pathname: '/products' }} data-test-id="products-link">
            Products
          </Link>
          <div className={styles.menuCart}>
            <Link
              href={{ pathname: '/cart' }}
              className={styles.menuCart}
              data-test-id="cart-link"
            >
              <Image
                src="/images/Icon_Cart.svg"
                width={40}
                height={40}
                alt="cart svg"
                className="filterCartIcon"
              />
              <Count />
            </Link>
          </div>
        </div>
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
                  <Link
                    href={{ pathname: '/products' }}
                    data-test-id="products-link"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link href={{ pathname: '/about' }}>About</Link>
                </li>
              </ul>
            </div>
            <div className={styles.menuCart}>
              <Link href={{ pathname: '/cart' }} className={styles.menuCart}>
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
  );
}
