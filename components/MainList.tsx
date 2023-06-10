import { IPost } from '@/types/types';
import Article from './Article';

type MainListProps = {
  posts: IPost[];
};

export default function MainList({ posts }: MainListProps) {
  return (
    <div className="latest-news__grid">
      {posts.map((item) => (
        <Article key={item.id} item={item} />
      ))}
    </div>
  );
}
