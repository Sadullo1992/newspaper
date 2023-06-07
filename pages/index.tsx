import Head from 'next/head';
import Image from 'next/image';
import banner from '@/assets/images/banner.png';
import Article from '@/components/Article';

export default function Home() {
  return (
    <>
      <Head>
        <title>Bobotog&#39; tongi gazetasi</title>
      </Head>
      <section className="home">
        <div className="container">
          <div className="intro">
            <div className="intro__slider">
              <Image src={banner} alt="slider image" />
            </div>
            <div className="intro__articles">
              <Article />
              <Article />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
