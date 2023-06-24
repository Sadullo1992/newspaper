import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Google Search Console */}
        <meta
          name="google-site-verification"
          content="8Zn36gXl2cC3rmrJUjGMXeNpcgaSFuLC4EuhsURkJaI"
        />
        <meta name="yandex-verification" content="cd7eb66713dc95fb" />
        <meta
          name="description"
          content='"Bobotog&#39; tongi", Surxondaryo viloyati, Uzun tumanining siyosiy va boshqa yangiliklarini bosib chiqaruvchi — ommaviy gazetasining rasmiy sayti.'
        />
        <meta
          name="keywords"
          content="Bobotog&#39; tongi, Боботоғ тонги, Bobotog&#39; tongi gazetasi, Боботоғ тонги газетаси, Uzun tumani gazetasi, Узун тумани газета, Uzun tumani yangiliklari"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
