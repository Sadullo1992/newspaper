import Head from 'next/head';
import Image from 'next/image';
import banner from '@/assets/images/banner.png';
import Article from '@/components/Article';
import ActualArticle from '@/components/ActualArticle';

export default function Home() {
  return (
    <>
      <Head>
        <title>Bobotog&#39; tongi gazetasi</title>
      </Head>
      <section className="home">
        <div className="container">
          <div className="intro main-grid">
            <div className="intro__slider main-grid__item1">
              <Image src={banner} alt="slider image" />
            </div>
            <div className="intro__articles main-grid__item2">
              <Article />
              <Article />
            </div>
          </div>
          <div className="main-grid">
            <div className="latest-news main-grid__item1">
              <h2 className="latest-news__title">Eng so&#39;ngi yangiliklar</h2>
              <div className="latest-news__grid">
                <Article />
                <Article />
                <Article />
                <Article />
                <Article />
                <Article />
                <Article />
                <Article />
              </div>
            </div>
            <div className="actual-news main-grid__item2">
              <h3 className="actual-news__title">Dolzarb</h3>
              <div className="actual-news__grid">
                <ActualArticle />
                <ActualArticle />
                <ActualArticle />
                <ActualArticle />
                <ActualArticle />
                <ActualArticle />
                <ActualArticle />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
