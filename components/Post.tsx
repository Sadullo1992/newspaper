import useTranslation from '@/hooks/useTranslation';
import { InterfacePost } from '@/types/types';
import Carousel from './Carousel';

type PostProps = {
  post?: InterfacePost;
};

export default function Post({ post }: PostProps) {
  const t = useTranslation();
  return (
    <div className="post">
      <div className="post__slider">
        <Carousel images={post?.imgUrls} />
      </div>
      <h2 className="post__title">{t(post?.title)}</h2>
      <div className="post__content">
        {post?.description.map((paragraph, index) => (
          <p key={index}>{t(paragraph)}</p>
        ))}
      </div>
      <h4 className="post__author">{t(post?.author)}</h4>
    </div>
  );
}
