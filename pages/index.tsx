import Head from 'next/head';
import Article from '@/components/Article';
import { useAppSelector } from '@/redux/hooks';
import { selectPosts } from '@/redux/posts';
import ActualList from '@/components/ActualList';
import MainList from '@/components/MainList';
import Carousel from '@/components/Carousel';

export default function Home() {
  const { posts } = useAppSelector(selectPosts);
  return (
    <>
      <Head>
        <title>Bobotog&#39; tongi gazetasi</title>
      </Head>
      <section className="home">
        <div className="container">
          <div className="intro main-grid">
            <div className="intro__slider main-grid__item1">
              <Carousel posts={posts.slice(0, 4)} />
            </div>
            <div className="intro__articles main-grid__item2">
              {posts.slice(1, 3).map((item) => (
                <Article key={item.id} item={item} />
              ))}
            </div>
          </div>
          <div className="main-grid">
            <div className="latest-news main-grid__item1">
              <h2 className="latest-news__title">Eng so&#39;ngi yangiliklar</h2>
              <MainList posts={posts.slice(3)} />
            </div>
            <ActualList />
          </div>
        </div>
      </section>
    </>
  );
}
