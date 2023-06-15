import useTranslation from '@/hooks/useTranslation';
import { useAppSelector } from '@/redux/hooks';
import { selectPosts } from '@/redux/posts';
import Article from './Article';

export default function RealatedNews() {
  const t = useTranslation();
  const { posts } = useAppSelector(selectPosts);
  return (
    <div className="related-news">
      <h2 className="related-news__title">{t('Mavzuga oid')}</h2>
      <div className="related-news__grid">
        {posts.map((item) => (
          <Article key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
