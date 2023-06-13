import { IPost } from '@/types/types';
import Image from 'next/image';
import Link from 'next/link';

type CarouselPostItemProps = {
  post: IPost;
};

export default function CarouselPostItem({ post }: CarouselPostItemProps) {
  const { id, title, imgUrls } = post;
  return (
    <Link href={`/posts/${id}`} className="carousel__item">
      <Image
        src={imgUrls[0]}
        height={502}
        width={894}
        alt="slider image"
        className="carousel__item__photo"
        priority
      />
      <div className="carousel__item__bar">
        <h3 className="carousel__item__title">{title}</h3>
      </div>
    </Link>
  );
}
