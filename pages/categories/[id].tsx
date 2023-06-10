import ActualArticle from '@/components/ActualArticle';
import Article from '@/components/Article';
import { APP_CATEGORIES } from '@/constants/categories';
import { AppCategory } from '@/types/types';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Category() {
  const router = useRouter();
  const category = router.query.id as AppCategory;
  const title = APP_CATEGORIES[category];
  if (category === 'nashrlar') {
    return (
      <>
        <Head>
          <title>Gazeta nashrlari</title>
        </Head>
        <section className="category-page">
          <div className="container">
            <p>Gazeta nashrlari</p>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>{title}ga oid maqolalar</title>
      </Head>
      <section className="category-page">
        <div className="container">
          <div className="main-grid">
            <div className="latest-news main-grid__item1">
              <h2 className="latest-news__title">{title}ga oid maqolalar</h2>
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
