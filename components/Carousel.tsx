import { IPost } from '@/types/types';
import clsx from 'clsx';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Button from './Button';
import NavIcon from './NavIcon';

type CarouselProps = {
  posts: IPost[];
};

export default function Carousel({ posts }: CarouselProps) {
  const slideLength = posts.length;
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const infinite = () => {
      if (activeSlide === slideLength - 1) {
        setActiveSlide(0);
      } else {
        setActiveSlide(activeSlide + 1);
      }
    };
    const interval = setInterval(infinite, 7000);
    return () => clearInterval(interval);
  }, [activeSlide, slideLength]);

  const gotoPrev = () => {
    if (activeSlide === 0) {
      setActiveSlide(slideLength - 1);
    } else {
      setActiveSlide(activeSlide - 1);
    }
  };

  const gotoNext = () => {
    if (activeSlide === slideLength - 1) {
      setActiveSlide(0);
    } else {
      setActiveSlide(activeSlide + 1);
    }
  };
  return (
    <section className="carousel">
      <div
        className="carousel__inner"
        style={{
          width: `${slideLength * 100}%`,
          transform: `translateX(-${25 * activeSlide}%)`,
        }}
      >
        {posts.map((item) => (
          <div key={item.id} className="carousel__item">
            <Image
              src={item.imgUrls[0]}
              height={502}
              width={894}
              alt="slider image"
              className="carousel__item__photo"
              priority
            />
            <div className="carousel__item__bar">
              <h3 className="carousel__item__title">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
      <div className="carousel__nav">
        <Button className="btn--carousel" onClick={gotoPrev}>
          <NavIcon className="prev" />
        </Button>
        <Button className="btn--carousel" onClick={gotoNext}>
          <NavIcon className="next" />
        </Button>
      </div>
      <div className="carousel__dots">
        {Array(slideLength)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className={clsx(
                'carousel__dots__item',
                activeSlide === index && 'carousel__dots__item--active'
              )}
              onClick={() => setActiveSlide(index)}
            ></div>
          ))}
      </div>
    </section>
  );
}
