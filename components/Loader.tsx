import { JSX } from 'react';
import ContentLoader, { IContentLoaderProps } from 'react-content-loader';

const CarouselLoader = (props: JSX.IntrinsicAttributes & IContentLoaderProps) => (
  <ContentLoader
    className={'loader'}
    speed={2}
    viewBox="0 0 894 502"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="10" ry="10" width="894" height="502" />
  </ContentLoader>
);

const ArticleLoader = (props: JSX.IntrinsicAttributes & IContentLoaderProps) => (
  <ContentLoader
    className={'loader'}
    speed={2}
    viewBox="0 0 282 213"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="5" ry="5" width="282" height="158" />
    <rect x="0" y="168" rx="5" ry="5" width="282" height="22" />
    <rect x="0" y="195" rx="5" ry="5" width="178" height="18" />
  </ContentLoader>
);

const ActualArticleLoader = (props: JSX.IntrinsicAttributes & IContentLoaderProps) => (
  <ContentLoader
    className={'loader'}
    speed={2}
    viewBox="0 0 282 72"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="5" ry="5" width="282" height="22" />
    <rect x="0" y="27" rx="5" ry="5" width="282" height="22" />
    <rect x="0" y="54" rx="5" ry="5" width="178" height="18" />
  </ContentLoader>
);

const MainListLoader = () => {
  return (
    <div className="latest-news__grid">
      {Array(6)
        .fill(0)
        .map((_, index) => (
          <ArticleLoader key={index} uniqueKey={'for-article'} />
        ))}
    </div>
  );
};

const MagazineLoader = (props: JSX.IntrinsicAttributes & IContentLoaderProps) => (
  <ContentLoader
    speed={2}
    viewBox="0 0 400 120"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="5" ry="5" width="400" height="120" />
  </ContentLoader>
);

export { CarouselLoader, ArticleLoader, ActualArticleLoader, MainListLoader, MagazineLoader };
