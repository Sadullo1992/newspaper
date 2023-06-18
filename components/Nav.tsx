import dynamic from 'next/dynamic';
import ArrowIcon from './ArrowIcon';
import Button from './Button';
import { useAppDispatch } from '@/redux/hooks';
import { showModal } from '@/redux/modalSlice';
import NavLink from './NavLink';
import useTranslation from '@/hooks/useTranslation';
import { ICategory } from '@/types/types';
import sortCategories from '@/utils/sortCategory';

const MediaQuery = dynamic(() => import('react-responsive'), {
  ssr: false,
});

type NavProps = {
  categories: ICategory[];
};

export default function Nav({ categories }: NavProps) {
  const t = useTranslation();
  const dispatch = useAppDispatch();
  const appCategories = sortCategories(categories);
  return (
    <nav className="nav">
      <NavLink href="/" className="btn--link">
        Asosiy
      </NavLink>
      <MediaQuery minWidth={1281}>
        {appCategories.slice(0, 3).map((item: ICategory) => (
          <NavLink href={`/categories/${item.slug}`} key={item.id} className="btn--link">
            {t(item.name)}
          </NavLink>
        ))}
      </MediaQuery>
      <MediaQuery minWidth={991} maxWidth={1280}>
        {appCategories.slice(0, 2).map((item: ICategory) => (
          <NavLink href={`/categories/${item.slug}`} key={item.id} className="btn--link">
            {t(item.name)}
          </NavLink>
        ))}
      </MediaQuery>
      <MediaQuery maxWidth={991}>
        {appCategories.map((item: ICategory) => (
          <NavLink href={`/categories/${item.slug}`} key={item.id} className="btn--link">
            {t(item.name)}
          </NavLink>
        ))}
      </MediaQuery>
      <Button
        className="btn--link btn--arrow"
        onClick={() => dispatch(showModal({ isModal: true }))}
      >
        <span>{t('Barchasi')}</span>
        <ArrowIcon />
      </Button>
    </nav>
  );
}
