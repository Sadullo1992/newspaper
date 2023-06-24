import ActualList from '@/components/ActualList';
import MainList from '@/components/MainList';
import { ICategory } from '@/types/types';
import Head from 'next/head';
import { useRouter } from 'next/router';
import useTranslation from '@/hooks/useTranslation';
import { useGetAllCategoriesQuery, useGetCategoryPostsQuery } from '@/redux/apiSlice';
import { MainListLoader } from '@/components/Loader';
import NewspaperIssue from '@/components/NewspaperIssue';
import ErrorMessage from '@/components/ErrorMessage';

export default function Category() {
  const t = useTranslation();
  const {
    query: { slug },
  } = useRouter();
  const { data: allCategories, isError } = useGetAllCategoriesQuery();
  const { id, name } = allCategories?.results.find((item: ICategory) => item.slug === slug) ?? {
    id: '',
    name: 'Gazeta bo`limlari',
  };
  const { data, isFetching } = useGetCategoryPostsQuery(id, { skip: !id });

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
        <title>{t(`${name}ga oid maqolalar`)}</title>
      </Head>
      <section className="category-page">
        <div className="container">
          <div className="main-grid">
            <div className="latest-news main-grid__item1">
              <h2 className="latest-news__title">{t(`${name}ga oid maqolalar`)}</h2>
              {data && <MainList posts={data?.results} />}
              {isFetching && <MainListLoader />}
            </div>
            <ActualList />
          </div>
        </div>
      </section>
    </>
  );
}

export { default as getServerSideProps } from '../../lib/deafultServerProps';
