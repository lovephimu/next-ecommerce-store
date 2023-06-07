import './globals.scss';
import { Lato } from 'next/font/google';
import { PropsWithChildren } from 'react';
import NavBar from './Navbar';

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

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={`${lato.className} bodyWrap`}>
        <NavBar />
        <main className="content">{children}</main>
        <footer>© yesTent</footer>
      </body>
    </html>
  );
}
