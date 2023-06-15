import Image from 'next/image';
import { IPost } from '@/types/types';
import Link from 'next/link';
import useTranslation from '@/hooks/useTranslation';

type ArticleProps = {
  item: IPost;
};

export default function Article({ item }: ArticleProps) {
  const t = useTranslation();
  const { id, title, imgUrls, views, published } = item;
  return (
    <Link href={`/posts/${id}`} className="article">
      <Image
        src={imgUrls[0]}
        height={504}
        width={894}
        alt="article photo"
        className="article__photo"
        priority
      />
      <div className="article__body">
        <h3 className="article__title">{t(title)}</h3>
        <div className="article__caption">
          <span>
            {views} {t('kishi o‘qidi')}
          </span>
          <span>/</span>
          <span>{t(published)}</span>
        </div>
      </div>
    </Link>
  );
}
