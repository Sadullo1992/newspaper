import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { selectModalState } from '@/redux/modalSlice';
import { showModal } from '@/redux/modalSlice';
import clsx from 'clsx';
import Button from './Button';
import GetMenuIcon from '@/utils/GetMenuIcon';
import Link from 'next/link';
import useTranslation from '@/hooks/useTranslation';
import { ICategory } from '@/types/types';
import sortCategories from '@/utils/sortCategory';

type ModalProps = {
  categories: ICategory[];
};

export default function Modal({ categories }: ModalProps) {
  const t = useTranslation();
  const appCategories = sortCategories(categories);
  const { isModal } = useAppSelector(selectModalState);
  const dispatch = useAppDispatch();
  const closeModal = () => {
    dispatch(showModal({ isModal: false }));
  };
  return (
    <>
      <div className={clsx('modal', isModal && 'modal--active')}>
        <div className="modal__content">
          <Button className="btn--modal-close" onClick={closeModal}>
            {closeIcon()}
          </Button>
          {appCategories.map((item: ICategory) => (
            <Link
              href={`/categories/${item.slug}`}
              key={item.id}
              className="modal__menu-item"
              onClick={closeModal}
            >
              <div className="modal__menu-item__img-wrap">
                <GetMenuIcon type={item.slug} />
              </div>
              <h3 className="modal__menu-item__title">{t(item.name)}</h3>
            </Link>
          ))}
        </div>
      </div>
      <div className="dark-layer" onClick={closeModal}></div>
    </>
  );
}

function closeIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16.0009 14.1153L22.6005 7.51562L24.4861 9.40124L17.8865 16.0009L24.4861 22.6005L22.6005 24.4861L16.0009 17.8865L9.40124 24.4861L7.51562 22.6005L14.1153 16.0009L7.51562 9.40124L9.40124 7.51562L16.0009 14.1153Z"
        fill="#A2A2A2"
      />
    </svg>
  );
}
