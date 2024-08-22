import ActualList from '@/components/ActualList';
import { IArticle } from '@/types/types';
import Head from 'next/head';
import { useRouter } from 'next/router';
import useTranslation from '@/hooks/useTranslation';
import { useGetCategoryBySlugQuery, useGetCategoryPostsQuery } from '@/redux/apiSlice';
import { MainListLoader } from '@/components/Loader';
import NewspaperIssue from '@/components/NewspaperIssue';
import ErrorMessage from '@/components/ErrorMessage';
import { useEffect, useMemo, useState } from 'react';
import Article from '@/components/Article';

export default function Category() {
  const t = useTranslation();
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState<IArticle[]>([]);
  const {
    query: { slug },
  } = useRouter();

  const { data: category, isError } = useGetCategoryBySlugQuery(slug);

  const { data, isFetching } = useGetCategoryPostsQuery({ slug, page }, { skip: !slug });

  useEffect(() => {
    if (data) {
      setPosts((posts) => [...posts, ...data?.data]);
    }
  }, [data]);

  useMemo(() => {
    setPage(1);
    setPosts([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  if (isError) return <ErrorMessage />;

  if (slug === 'gazetamiz-nashrlari') {
    return (
      <>
        <Head>
          <title>{t('Gazeta nashrlari')}</title>
        </Head>
        <section className="category-page">
          <div className="container">
            <NewspaperIssue />
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>{t(`${category?.name}ga oid maqolalar`)}</title>
      </Head>
      <section className="category-page">
        <div className="container">
          <div className="main-grid">
            <div className="latest-news main-grid__item1">
              <h2 className="latest-news__title">{t(`${category?.name}ga oid maqolalar`)}</h2>
              <div className="latest-news__grid">
                {data &&
                  posts &&
                  [...new Set(posts)].map((item, index, arr) => (
                    <Article
                      key={item.id}
                      item={item}
                      isLast={index === arr.length - 1}
                      newLimit={() => setPage(page + 1)}
                      isLastElement={index === data.meta.total - 1}
                    />
                  ))}
                {isFetching && <MainListLoader />}
              </div>
            </div>
            <ActualList />
          </div>
        </div>
      </section>
    </>
  );
}

export { default as getServerSideProps } from '../../lib/deafultServerProps';
