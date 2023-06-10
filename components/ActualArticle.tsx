import { IPost } from '@/types/types';

type ActualArticleProps = {
  item: IPost;
};

export default function ActualArticle({ item }: ActualArticleProps) {
  return (
    <article className="actual-article">
      <h3 className="actual-article__title">{item.title}</h3>
    </article>
  );
}
