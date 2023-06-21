import Image from 'next/image';
import { IArticle } from '@/types/types';
import Link from 'next/link';
import useTranslation from '@/hooks/useTranslation';
import dateFormetter from '@/utils/dateFormatter';

type ArticleProps = {
  item: IArticle;
};

export default function Article({ item }: ArticleProps) {
  const t = useTranslation();
  const { slug, title, postimage_set: images, views, created_at } = item;
  return (
    <Link href={`/posts/${slug}`} className="article">
      <Image
        src={images[0].image}
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
          <span>{dateFormetter(created_at)}</span>
        </div>
      </div>
    </Link>
  );
}
