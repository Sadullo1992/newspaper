import useTranslation from '@/hooks/useTranslation';
import { useGetRelatedPostsQuery } from '@/redux/apiSlice';
import Article from './Article';
import { ArticleLoader } from './Loader';

type RelatedNews = {
  postId: string;
};

export default function RealatedNews({ postId }: RelatedNews) {
  const t = useTranslation();
  const { data, isFetching } = useGetRelatedPostsQuery(postId);
  return (
    <div className="related-news">
      <h2 className="related-news__title">{t('Mavzuga oid')}</h2>
      <div className="related-news__grid">
        {data?.results.map((item) => (
          <Article key={item.id} item={item} />
        ))}
        {isFetching &&
          Array(8)
            .fill(0)
            .map((_, index) => <ArticleLoader key={index} uniqueKey={'for-article'} />)}
      </div>
    </div>
  );
}
