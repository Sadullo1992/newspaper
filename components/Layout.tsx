import { PropsWithChildren } from 'react';
import Footer from './Footer';

import Header from './Header';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <div className="test__wrapper">
        <p className="test">«Bobotogʻ tongi» gazetasi veb sayti test rejimida ishlayapti!</p>
      </div>
      <main>{children}</main>
      <Footer />
    </>
  );
}
