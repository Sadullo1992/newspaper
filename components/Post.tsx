import useTranslation from '@/hooks/useTranslation';
import { IPost } from '@/types/types';
import { useRef } from 'react';
import Carousel from './Carousel';

type PostProps = {
  post: IPost;
};

export default function Post({ post }: PostProps) {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const t = useTranslation();
  const { title, postimage_set, content } = post;
  const imageUrls = postimage_set.map((item) => item.image);
  return (
    <div className="post">
      <div className="post__slider">
        <Carousel images={imageUrls} />
      </div>
      <h2 className="post__title">{t(title)}</h2>
      <div
        className="post__content"
        ref={contentRef}
        dangerouslySetInnerHTML={createMarkup(t(content, 'tag'))}
      ></div>
      {/* <h4 className="post__author">{t(post?.author)}</h4> */}
    </div>
  );
}

function createMarkup(c: string) {
  return { __html: c };
}
