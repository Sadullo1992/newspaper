import ActualList from '@/components/ActualList';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { IArticle } from '@/types/types';
import RealatedNews from '@/components/RelatedNews';
import Post from '@/components/Post';
import useTranslation from '@/hooks/useTranslation';
import { useGetAllPostsQuery, useGetPostByIdQuery } from '@/redux/apiSlice';
import { CarouselLoader } from '@/components/Loader';
import ErrorMessage from '@/components/ErrorMessage';

export default function PostPage() {
  const t = useTranslation();
  const {
    query: { slug },
  } = useRouter();
  const { data: allPosts, isError } = useGetAllPostsQuery();
  const { id, title } = allPosts?.results.find((item: IArticle) => item.slug === slug) ?? {
    id: '',
    title: 'Maqola',
  };
  const { data: post, isFetching } = useGetPostByIdQuery(id, { skip: !id });
  if (isError) return <ErrorMessage />;
  return (
    <>
      <Head>
        <title>{t(title)}</title>
      </Head>
      <section className="posts-page">
        <div className="container">
          <div className="main-grid">
            <div className="main-grid__item1">
              {post && <Post post={post} />}
              {isFetching && (
                <CarouselLoader uniqueKey={'for-carousel'} className="carousel__item__photo" />
              )}
            </div>
            <ActualList />
          </div>
          {post && <RealatedNews postId={post.id} />}
        </div>
      </section>
    </>
  );
}

export { default as getServerSideProps } from '../../lib/deafultServerProps';
