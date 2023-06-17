import { useGetAllCategoriesQuery } from '@/redux/apiSlice';
import Dropdown from './Dropdown';
import Logo from './Logo';
import Modal from './Modal';
import Nav from './Nav';

export default function Header() {
  const { data } = useGetAllCategoriesQuery();
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <Logo className="logo" />
          <div className="header__wrapper">
            {data && <Nav categories={data.results} />}
            <Dropdown />
          </div>
          {data && <Modal categories={data.results} />}
        </div>
      </div>
    </header>
  );
}
