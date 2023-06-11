import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content='"Bobotogʻ tongi", Surxondaryo viloyati, uzun tumanining siyosiy va boshqa yangiliklarini bosib chiqaruvchi — ommaviy gazetasining rasmiy sayti.'
        />
        <meta
          name="google-site-verification"
          content="8Zn36gXl2cC3rmrJUjGMXeNpcgaSFuLC4EuhsURkJaI"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
