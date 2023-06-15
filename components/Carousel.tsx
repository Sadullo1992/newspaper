import { IPost } from '@/types/types';
import clsx from 'clsx';
import { TouchEvent, useEffect, useState } from 'react';
import Button from './Button';
import CarouselImageItem from './CarouselImageItem';
import CarouselPostItem from './CarouselPostItem';
import NavIcon from './NavIcon';

type CarouselProps = {
  posts?: IPost[];
  images?: string[];
};

export default function Carousel({ posts, images }: CarouselProps) {
  const slideLength = posts ? posts.length : images ? images.length : 0;
  const isNavVisible = slideLength > 1;
  const [activeSlide, setActiveSlide] = useState(0);
  const [x, setX] = useState(0);
  const [diff, setDiff] = useState(0);

  useEffect(() => {
    if (posts) {
      const infinite = () => {
        if (activeSlide === slideLength - 1) {
          setActiveSlide(0);
        } else {
          setActiveSlide(activeSlide + 1);
        }
      };
      const interval = setInterval(infinite, 7000);
      return () => clearInterval(interval);
    }
  }, [activeSlide, slideLength, posts]);

  useEffect(() => {
    setActiveSlide(0);
  }, [images]);

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

  const handleTouchStart = (e: TouchEvent<HTMLElement>) => {
    setX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: TouchEvent<HTMLElement>) => {
    const x2 = e.touches[0].clientX;
    setDiff(x - x2);
  };

  const handleTouchEnd = () => {
    if (diff > 0) {
      if (diff > 30 && activeSlide !== slideLength - 1) {
        setActiveSlide(activeSlide + 1);
      }
    } else {
      if (Math.abs(diff) > 30 && activeSlide !== 0) {
        setActiveSlide(activeSlide - 1);
      }
    }
    setDiff(0);
    setX(0);
  };

  return (
    <section className={clsx('carousel', images && 'carousel--images')}>
      <div
        className="carousel__inner"
        style={{
          width: `${slideLength * 100}%`,
          transform: `translateX(calc(-${(100 / slideLength) * activeSlide}% - ${diff}px))`,
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {posts?.map((item) => (
          <CarouselPostItem key={item.id} post={item} />
        ))}
        {images?.map((src, index) => (
          <CarouselImageItem key={index} imgSrc={src} />
        ))}
      </div>
      {isNavVisible && (
        <>
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
        </>
      )}
    </section>
  );
}
