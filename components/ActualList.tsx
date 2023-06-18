import useTranslation from '@/hooks/useTranslation';
import { useGetActualPostsQuery } from '@/redux/apiSlice';
import ActualArticle from './ActualArticle';

export default function ActualList() {
  const t = useTranslation();
  const { data: actualPosts } = useGetActualPostsQuery();
  return (
    <div className="actual-news main-grid__item2">
      <h3 className="actual-news__title">{t('Dolzarb')}</h3>
      <div className="actual-news__grid">
        {actualPosts?.results.map((item) => (
          <ActualArticle key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
