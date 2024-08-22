import { useGetAllCategoriesQuery } from '@/redux/apiSlice';
import Dropdown from './Dropdown';
import Logo from './Logo';
import Modal from './Modal';
import Nav from './Nav';

export default function Header() {
  const { data: categories } = useGetAllCategoriesQuery();
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <Logo className="logo" />
          <div className="header__wrapper">
            {categories && <Nav categories={categories} />}
            <Dropdown />
          </div>
          {categories && <Modal categories={categories} />}
        </div>
      </div>
    </header>
  );
}
