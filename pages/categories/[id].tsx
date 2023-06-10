import ActualList from '@/components/ActualList';
import MainList from '@/components/MainList';
import { APP_CATEGORIES } from '@/constants/categories';
import { useAppSelector } from '@/redux/hooks';
import { AppCategory } from '@/types/types';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Category() {
  const router = useRouter();
  const category = router.query.id as AppCategory;
  const title = APP_CATEGORIES[category];
  const posts = useAppSelector((state) =>
    state.posts.posts.filter((item) => item.category === category)
  );
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
              <MainList posts={posts} />
            </div>
            <ActualList />
          </div>
        </div>
      </section>
    </>
  );
}
