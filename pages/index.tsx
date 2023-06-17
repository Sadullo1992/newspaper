import Head from 'next/head';
import Article from '@/components/Article';
import { useAppSelector } from '@/redux/hooks';
import { selectPosts } from '@/redux/posts';
import ActualList from '@/components/ActualList';
import MainList from '@/components/MainList';
import Carousel from '@/components/Carousel';
import useTranslation from '@/hooks/useTranslation';
import { useGetAllPostsQuery } from '@/redux/apiSlice';

export default function Home() {
  const t = useTranslation();
  const { posts } = useAppSelector(selectPosts);
  const { data } = useGetAllPostsQuery();
  console.log(data);
  return (
    <>
      <Head>
        <title>{t('«Bobotog‘ tongi» gazetasi')}</title>
      </Head>
      <section className="home">
        <div className="container">
          <div className="intro main-grid">
            <div className="intro__slider main-grid__item1">
              <Carousel posts={posts.slice(0, 4)} />
            </div>
            <div className="intro__articles main-grid__item2">
              {posts.slice(1, 3).map((item) => (
                <Article key={item.id} item={item} />
              ))}
            </div>
          </div>
          <div className="main-grid">
            <div className="latest-news main-grid__item1">
              <h2 className="latest-news__title">{t('Eng so‘ngi yangiliklar')}</h2>
              <MainList posts={posts.slice(3)} />
            </div>
            <ActualList />
          </div>
        </div>
      </section>
    </>
  );
}

export { default as getServerSideProps } from '../lib/deafultServerProps';
