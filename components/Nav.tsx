import dynamic from 'next/dynamic';
import ArrowIcon from './ArrowIcon';
import Button from './Button';
import { APP_CATEGORIES } from '@/constants/categories';
const MediaQuery = dynamic(() => import('react-responsive'), {
  ssr: false,
});
export default function Nav() {
  const appCategories = Object.entries(APP_CATEGORIES);
  return (
    <nav className="nav">
      <Button href="/" className="btn--link btn--link--active">
        Asosiy
      </Button>
      <MediaQuery minWidth={1280}>
        {appCategories.slice(0, 3).map(([category, desc]) => (
          <Button href={category} key={category} className="btn--link">
            {desc}
          </Button>
        ))}
      </MediaQuery>
      <MediaQuery minWidth={991} maxWidth={1280}>
        {appCategories.slice(0, 2).map(([category, desc]) => (
          <Button href={category} key={category} className="btn--link">
            {desc}
          </Button>
        ))}
      </MediaQuery>
      <MediaQuery maxWidth={991}>
        {appCategories.map(([category, desc]) => (
          <Button href={category} key={category} className="btn--link">
            {desc}
          </Button>
        ))}
      </MediaQuery>
      <Button className="btn--link btn--arrow">
        <span>Barchasi</span>
        <ArrowIcon />
      </Button>
    </nav>
  );
}
