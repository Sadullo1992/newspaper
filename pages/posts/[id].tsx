import ActualList from '@/components/ActualList';
import { useAppSelector } from '@/redux/hooks';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { IPost } from '@/types/types';
import Image from 'next/image';

export default function Post() {
  const router = useRouter();
  const postId = router.query.id;
  const post = useAppSelector((state) =>
    state.posts.posts.find((item: IPost) => item.id === postId)
  );
  return (
    <>
      <Head>
        <title>{post?.title}</title>
      </Head>
      <section className="posts-page">
        <div className="container">
          <div className="main-grid">
            <div className="main-grid__item1">
              <div className="post">
                <div className="post__slider">
                  {post && (
                    <Image
                      src={post?.imgUrls[0]}
                      height={502}
                      width={894}
                      alt="slider image"
                      className="post__photo"
                      priority
                    />
                  )}
                </div>
                <h2 className="post__title">{post?.title}</h2>
                <div className="post__content">
                  {post?.description.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
                <h4 className="post__author">{post?.author}</h4>
              </div>
            </div>
            <ActualList />
          </div>
        </div>
      </section>
    </>
  );
}
