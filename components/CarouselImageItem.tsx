import { BASE_URL } from '@/constants/constants';
import Image from 'next/image';

type CarouselPostItemProps = {
  imgSrc: string;
};

export default function CarouselImageItem({ imgSrc }: CarouselPostItemProps) {
  return (
    <article className="carousel__item">
      <Image
        src={`${BASE_URL}/media/images/${imgSrc}`}
        height={502}
        width={894}
        alt="slider image"
        className="carousel__item__photo"
        priority
      />
    </article>
  );
}
