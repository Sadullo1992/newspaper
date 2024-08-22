import { BASE_URL } from '@/constants/constants';
import useTranslation from '@/hooks/useTranslation';
import { IArticle } from '@/types/types';
import Image from 'next/image';
import Link from 'next/link';

type CarouselPostItemProps = {
  post: IArticle;
};

export default function CarouselPostItem({ post }: CarouselPostItemProps) {
  const t = useTranslation();
  const { slug, title, images } = post;
  return (
    <Link href={`/posts/${slug}`} className="carousel__item">
      <Image
        src={`${BASE_URL}/media/images/${images[0].imagename}`}
        height={502}
        width={894}
        alt="slider image"
        className="carousel__item__photo"
        priority
      />
      <div className="carousel__item__bar">
        <h3 className="carousel__item__title">{t(title)}</h3>
      </div>
    </Link>
  );
}
