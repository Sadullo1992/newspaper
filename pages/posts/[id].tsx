import ActualList from '@/components/ActualList';
import { useAppSelector } from '@/redux/hooks';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { IPost } from '@/types/types';
import RealatedNews from '@/components/RelatedNews';
import Post from '@/components/Post';
import useTranslation from '@/hooks/useTranslation';

export default function PostPage() {
  const t = useTranslation();
  const router = useRouter();
  const postId = router.query.id;
  const post = useAppSelector((state) =>
    state.posts.posts.find((item: IPost) => item.id === postId)
  );
  return (
    <>
      <Head>
        <title>{t(post?.title)}</title>
      </Head>
      <section className="posts-page">
        <div className="container">
          <div className="main-grid">
            <div className="main-grid__item1">
              <Post post={post} />
            </div>
            <ActualList />
          </div>
          <RealatedNews />
        </div>
      </section>
    </>
  );
}

export { default as getServerSideProps } from '../../lib/deafultServerProps';
