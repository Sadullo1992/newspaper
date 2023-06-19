import Head from 'next/head';
import Article from '@/components/Article';
import ActualList from '@/components/ActualList';
import MainList from '@/components/MainList';
import Carousel from '@/components/Carousel';
import useTranslation from '@/hooks/useTranslation';
import { useGetAllPostsQuery, useGetFeaturedPostsQuery } from '@/redux/apiSlice';
import { CarouselLoader, ArticleLoader, MainListLoader } from '@/components/Loader';

export default function Home() {
  const t = useTranslation();
  const { data: allPosts, isFetching: isAllPostFetching } = useGetAllPostsQuery();
  const { data: allFeaturedPosts, isFetching } = useGetFeaturedPostsQuery();
  return (
    <>
      <Head>
        <title>{t('«Bobotog‘ tongi» gazetasi')}</title>
      </Head>
      <section className="home">
        <div className="container">
          <div className="intro main-grid">
            <div className="intro__slider main-grid__item1">
              {allFeaturedPosts && <Carousel posts={allFeaturedPosts.results} />}
              {isFetching && (
                <CarouselLoader uniqueKey={'for-carousel'} className="carousel__item__photo" />
              )}
            </div>
            <div className="intro__articles main-grid__item2">
              {allPosts &&
                allPosts.results
                  ?.slice()
                  .slice(1, 3)
                  .map((item) => <Article key={item.id} item={item} />)}
              {isAllPostFetching && (
                <>
                  <ArticleLoader uniqueKey={'for-article'} />
                  <ArticleLoader uniqueKey={'for-article'} />
                </>
              )}
            </div>
          </div>
          <div className="main-grid">
            <div className="latest-news main-grid__item1">
              <h2 className="latest-news__title">{t('Eng so‘ngi yangiliklar')}</h2>
              {allPosts && <MainList posts={allPosts.results} />}
              {isAllPostFetching && <MainListLoader />}
            </div>
            <ActualList />
          </div>
        </div>
      </section>
    </>
  );
}

export { default as getServerSideProps } from '../lib/deafultServerProps';
