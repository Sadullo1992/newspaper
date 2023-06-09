import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { selectSettings, setAppLanguage } from '@/redux/settings';
import clsx from 'clsx';
import { useState } from 'react';
import ArrowIcon from './ArrowIcon';
import Button from './Button';
import { LANGUAGE_NAMES } from '@/constants/constants';
import { AppLanguage } from '@/types/types';

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useAppSelector(selectSettings);
  const dispatch = useAppDispatch();
  return (
    <div className={clsx('dropdown', isOpen && 'dropdown--active')}>
      <Button className="btn--dropdown" onClick={() => setIsOpen(!isOpen)}>
        <span>{LANGUAGE_NAMES[language]}</span>
        <ArrowIcon />
      </Button>
      <ul className="dropdown__select">
        {Object.entries(LANGUAGE_NAMES).map(([lang, name]) => (
          <li
            key={lang}
            className="dropdown__select__item"
            onClick={() => {
              dispatch(setAppLanguage(lang as AppLanguage));
              setIsOpen(false);
            }}
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}
