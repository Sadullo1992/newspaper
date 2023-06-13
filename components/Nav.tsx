import dynamic from 'next/dynamic';
import ArrowIcon from './ArrowIcon';
import Button from './Button';
import { APP_CATEGORIES } from '@/constants/categories';
import { useAppDispatch } from '@/redux/hooks';
import { showModal } from '@/redux/modalSlice';
import NavLink from './NavLink';

const MediaQuery = dynamic(() => import('react-responsive'), {
  ssr: false,
});

export default function Nav() {
  const dispatch = useAppDispatch();
  const appCategories = Object.entries(APP_CATEGORIES);
  return (
    <nav className="nav">
      <NavLink href="/" className="btn--link">
        Asosiy
      </NavLink>
      <MediaQuery minWidth={1281}>
        {appCategories.slice(0, 3).map(([category, desc]) => (
          <NavLink href={`/categories/${category}`} key={category} className="btn--link">
            {desc}
          </NavLink>
        ))}
      </MediaQuery>
      <MediaQuery minWidth={991} maxWidth={1280}>
        {appCategories.slice(0, 2).map(([category, desc]) => (
          <NavLink href={`/categories/${category}`} key={category} className="btn--link">
            {desc}
          </NavLink>
        ))}
      </MediaQuery>
      <MediaQuery maxWidth={991}>
        {appCategories.map(([category, desc]) => (
          <NavLink href={`/categories/${category}`} key={category} className="btn--link">
            {desc}
          </NavLink>
        ))}
      </MediaQuery>
      <Button
        className="btn--link btn--arrow"
        onClick={() => dispatch(showModal({ isModal: true }))}
      >
        <span>Barchasi</span>
        <ArrowIcon />
      </Button>
    </nav>
  );
}
