import useTranslation from '@/hooks/useTranslation';
import { IPost } from '@/types/types';
import Link from 'next/link';

type ActualArticleProps = {
  item: IPost;
};

export default function ActualArticle({ item }: ActualArticleProps) {
  const t = useTranslation();
  const { id, title } = item;
  return (
    <Link href={`/posts/${id}`} className="actual-article">
      <h3 className="actual-article__title">{t(title)}</h3>
    </Link>
  );
}
