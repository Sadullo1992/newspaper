import ArrowIcon from './ArrowIcon';
import Button from './Button';
import Dropdown from './Dropdown';
import Logo from './Logo';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <Logo width="262" height="25" />
          <div className="header__wrapper">
            <nav className="nav">
              <Button className="btn--link">Jamiyat</Button>
              <Button className="btn--link">Adabiyot</Button>
              <Button className="btn--link">Tanqid va tahlil</Button>
              <Button className="btn--link btn--arrow">
                <span>Barchasi</span>
                <ArrowIcon />
              </Button>
            </nav>
            <Dropdown />
          </div>
        </div>
      </div>
    </header>
  );
}
