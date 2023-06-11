import { PropsWithChildren } from 'react';
import Footer from './Footer';

import Header from './Header';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <p className="test">Bobotog&#39; tongi websayti test rejimida ishlayapti!</p>
      <main>{children}</main>
      <Footer />
    </>
  );
}
