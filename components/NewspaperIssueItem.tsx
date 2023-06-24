import useDownloader from 'react-use-downloader';
import useTranslation from '@/hooks/useTranslation';
import { IMagazine } from '@/types/types';
import dateFormetter from '@/utils/dateFormatter';
import Button from './Button';
import Spinner from './Spinner';
import { useAddMagazineDownloadCountMutation } from '@/redux/magazines';

type NewsPaperIssueProps = {
  magazine: IMagazine;
};

export default function NewspaperIssueItem({ magazine }: NewsPaperIssueProps) {
  const { id, name, created_at, hajmi, downloads_count, file } = magazine;
  const t = useTranslation();

  const { download, isInProgress, error } = useDownloader();
  const [addMagazineDownloadCount] = useAddMagazineDownloadCountMutation();

  const handleDownload = () => {
    download(file, `${name}.pdf`);
    if (!isInProgress && !error) {
      addMagazineDownloadCount(id);
    }
  };
  return (
    <div className="newspaper-issue__item">
      <div className="newspaper-issue__item__content">
        <h4 className="newspaper-issue__item__title">{t(name)}</h4>
        <div className="newspaper-issue__item__content__desc">
          <p>{t(`Qo’shildi: ${dateFormetter(created_at)}`)}</p>
          <p>{t(`Hajmi ${hajmi}`)}</p>
          <p>{t(`Yuklab olishdi: ${downloads_count}`)}</p>
        </div>
      </div>
      <div className="newspaper-issue__item__btn-wrapper">
        <Button className="btn--download" onClick={handleDownload}>
          {isInProgress ? <Spinner /> : <span>{t('Yuklab olish')}</span>}
        </Button>
        <Button className="btn--download btn--download-white" href={file} target="_blank">
          <span>{t('O`qish')}</span>
        </Button>
      </div>
    </div>
  );
}
