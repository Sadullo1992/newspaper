import parse, { Text } from 'html-react-parser';
import useTranslation from '@/hooks/useTranslation';
import { IPost } from '@/types/types';
import Carousel from './Carousel';

type PostProps = {
  post: IPost;
};

export default function Post({ post }: PostProps) {
  const t = useTranslation();
  const { title, postimage_set, content, author } = post;
  const imageUrls = postimage_set.map((item) => item.image);
  return (
    <div className="post">
      <div className="post__slider">
        <Carousel images={imageUrls} />
      </div>
      <h2 className="post__title">{t(title)}</h2>
      <div className="post__content">
        {parse(content, {
          replace: (domNode) => {
            if (domNode instanceof Text) {
              const thisNode = { ...domNode };
              domNode.data = t(thisNode.data);
            }
          },
        })}
      </div>
      <h4 className="post__author">{t(author)}</h4>
    </div>
  );
}
