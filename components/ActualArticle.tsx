import { IPost } from '@/types/types';
import Link from 'next/link';

type ActualArticleProps = {
  item: IPost;
};

export default function ActualArticle({ item }: ActualArticleProps) {
  const { id, title } = item;
  return (
    <Link href={`/posts/${id}`} className="actual-article">
      <h3 className="actual-article__title">{title}</h3>
    </Link>
  );
}
