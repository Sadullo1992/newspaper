import Dropdown from './Dropdown';
import Logo from './Logo';
import Modal from './Modal';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <Logo className="logo" />
          <div className="header__wrapper">
            <Dropdown />
          </div>
          <Modal />
        </div>
      </div>
    </header>
  );
}
