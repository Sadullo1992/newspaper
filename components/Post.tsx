import { IPost } from '@/types/types';
import Carousel from './Carousel';

type PostProps = {
  post?: IPost;
};

export default function Post({ post }: PostProps) {
  return (
    <div className="post">
      <div className="post__slider">
        <Carousel images={post?.imgUrls} />
      </div>
      <h2 className="post__title">{post?.title}</h2>
      <div className="post__content">
        {post?.description.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      <h4 className="post__author">{post?.author}</h4>
    </div>
  );
}
