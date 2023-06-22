import useDownloader from 'react-use-downloader';
import useTranslation from '@/hooks/useTranslation';
import { IMagazine } from '@/types/types';
import dateFormetter from '@/utils/dateFormatter';
import Button from './Button';

type NewsPaperIssueProps = {
  magazine: IMagazine;
};

export default function NewspaperIssueItem({ magazine }: NewsPaperIssueProps) {
  const { name, created_at, hajmi, downloads_count, file } = magazine;
  const t = useTranslation();

  const { download, isInProgress } = useDownloader();
  return (
    <div className="newspaper-issue__item">
      <div className="newspaper-issue__item__content">
        <h4 className="newspaper-issue__item__title">{t(name)}</h4>
        <div className="newspaper-issue__item__content__desc">
          <p>{t(`Qo’shildi: ${dateFormetter(created_at)}`)}</p>
          <p>{t(`Hajmi ${hajmi}`)}</p>
          <p>{t(`Yuklab olishdi: ${downloads_count}`)}</p>
          <p>Download is in {isInProgress ? 'in progress' : 'stopped'}</p>
        </div>
      </div>
      <div className="newspaper-issue__item__btn-wrapper">
        <Button className="btn--download" onClick={() => download(file, `${name}.pdf`)}>
          <span>{t('Yuklab olish')}</span>
        </Button>
        <Button className="btn--download btn--download-white" target="_blank" href={file}>
          <span>{t('O`qish')}</span>
        </Button>
      </div>
    </div>
  );
}
