import Image from 'next/image';
import { IPost } from '@/types/types';

type ArticleProps = {
  item: IPost;
};

export default function Article({ item }: ArticleProps) {
  const { title, imgUrls, views, published } = item;
  return (
    <article className="article">
      <Image
        src={imgUrls[0]}
        height={504}
        width={894}
        alt="article photo"
        className="article__photo"
      />
      <div className="article__body">
        <h3 className="article__title">{title}</h3>
        <div className="article__caption">
          <span>{views} kishi o‘qidi</span>
          <span>/</span>
          <span>{published}</span>
        </div>
      </div>
    </article>
  );
}
