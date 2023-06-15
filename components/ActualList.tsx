import useTranslation from '@/hooks/useTranslation';
import { useAppSelector } from '@/redux/hooks';
import ActualArticle from './ActualArticle';

export default function ActualList() {
  const t = useTranslation();
  const actualPosts = useAppSelector((state) => state.posts.posts.filter((item) => item.actual));
  return (
    <div className="actual-news main-grid__item2">
      <h3 className="actual-news__title">{t('Dolzarb')}</h3>
      <div className="actual-news__grid">
        {actualPosts.map((item) => (
          <ActualArticle key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
