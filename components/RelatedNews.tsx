import { useAppSelector } from '@/redux/hooks';
import { selectPosts } from '@/redux/posts';
import Article from './Article';

export default function RealatedNews() {
  const { posts } = useAppSelector(selectPosts);
  return (
    <div className="related-news">
      <h2 className="related-news__title">Mavzuga oid</h2>
      <div className="related-news__grid">
        {posts.map((item) => (
          <Article key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
