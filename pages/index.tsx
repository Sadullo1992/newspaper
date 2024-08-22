import Head from 'next/head';
import Article from '@/components/Article';
import ActualList from '@/components/ActualList';
import Carousel from '@/components/Carousel';
import useTranslation from '@/hooks/useTranslation';
import { useGetAllPostsQuery, useGetFeaturedPostsQuery } from '@/redux/apiSlice';
import { CarouselLoader, ArticleLoader, MainListLoader } from '@/components/Loader';
import ErrorMessage from '@/components/ErrorMessage';
import { IArticle } from '@/types/types';
import { useState } from 'react';

export default function Home() {
  const t = useTranslation();
  const [page, setPage] = useState(1);
  const {
    data: allPosts,
    isFetching: isAllPostFetching,
    isError,
    isLoading,
  } = useGetAllPostsQuery(page);

  const { data: allFeaturedPosts, isFetching } = useGetFeaturedPostsQuery();

  if (isError) return <ErrorMessage />;
  return (
    <>
      <Head>
        <title>{t('«Bobotog‘ tongi» gazetasi')}</title>
      </Head>
      <section className="home">
        <div className="container">
          <div className="intro main-grid">
            <div className="intro__slider main-grid__item1">
              {allFeaturedPosts && <Carousel posts={allFeaturedPosts.data} />}
              {isFetching && (
                <CarouselLoader uniqueKey={'for-carousel'} className="carousel__item__photo" />
              )}
            </div>
            <div className="intro__articles main-grid__item2">
              {allPosts &&
                allPosts.data
                  ?.slice()
                  .slice(3, 5)
                  .map((item: IArticle) => <Article key={item.id} item={item} />)}
              {isLoading && (
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
              <div className="latest-news__grid">
                {allPosts &&
                  allPosts.data.map((item, index, arr) => (
                    <Article
                      key={item.id}
                      item={item}
                      isLast={index === arr.length - 1}
                      newLimit={() => setPage(page + 1)}
                      isLastElement={index === allPosts.meta.total - 1}
                    />
                  ))}
                {isAllPostFetching && <MainListLoader />}
              </div>
            </div>
            <ActualList />
          </div>
        </div>
      </section>
    </>
  );
}

export { default as getServerSideProps } from '../lib/deafultServerProps';
