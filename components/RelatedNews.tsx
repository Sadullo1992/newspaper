import useTranslation from '@/hooks/useTranslation';
import { useGetRelatedPostsQuery } from '@/redux/apiSlice';
import { IArticle } from '@/types/types';
import { useEffect, useMemo, useState } from 'react';
import Article from './Article';
import { MainListLoader } from './Loader';

type RelatedNews = {
  slug: string;
};

export default function RelatedNews({ slug }: RelatedNews) {
  const t = useTranslation();
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState<IArticle[]>([]);

  const { data, isFetching, isError } = useGetRelatedPostsQuery({ slug, page });

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

  if ((data && data?.meta.total < 3) || isError) return null;
  return (
    <div className="related-news">
      <h2 className="related-news__title">{t('Mavzuga oid')}</h2>
      <div className="related-news__grid">
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
  );
}
