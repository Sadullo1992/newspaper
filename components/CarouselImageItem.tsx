import Image from 'next/image';

type CarouselPostItemProps = {
  imgSrc: string;
};

export default function CarouselImageItem({ imgSrc }: CarouselPostItemProps) {
  return (
    <article className="carousel__item">
      <Image
        src={imgSrc}
        height={502}
        width={894}
        alt="slider image"
        className="carousel__item__photo"
        priority
      />
    </article>
  );
}
