import ArrowIcon from './ArrowIcon';
import Button from './Button';

export default function Dropdown() {
  return (
    <div className="dropdown">
      <Button className="btn--dropdown">
        <span>O&#39;zbekcha</span>
        <ArrowIcon />
      </Button>
      <ul className="dropdown__select">
        <li className="dropdown__select__item">Ўзбекча</li>
        <li className="dropdown__select__item">Русский</li>
      </ul>
    </div>
  );
}
