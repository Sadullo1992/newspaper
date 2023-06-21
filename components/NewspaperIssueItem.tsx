import useTranslation from '@/hooks/useTranslation';
import Button from './Button';

export default function NewspaperIssueItem() {
  const t = useTranslation();
  return (
    <div className="newspaper-issue__item">
      <div className="newspaper-issue__item__content">
        <h4 className="newspaper-issue__item__title">Bobotog’ tongi 2-son</h4>
        <div className="newspaper-issue__item__content__desc">
          <p>Qo’shildi: 27.25.2023</p>
          <p>Hajmi 2,19 MB</p>
          <p>Yuklab olishdi: 175</p>
        </div>
      </div>
      <div className="newspaper-issue__item__btn-wrapper">
        <Button className="btn--download">
          <span>{t('Yuklab olish')}</span>
        </Button>
        <Button className="btn--download btn--download-white">
          <span>{t('O`qish')}</span>
        </Button>
      </div>
    </div>
  );
}
