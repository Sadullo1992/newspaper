import { useDownloadFile } from '@/hooks/useDownloadFile';
import useTranslation from '@/hooks/useTranslation';
import { IMagazine } from '@/types/types';
import dateFormetter from '@/utils/dateFormatter';
import axios from 'axios';
import Button from './Button';

type NewsPaperIssueProps = {
  magazine: IMagazine;
};

export default function NewspaperIssueItem({ magazine }: NewsPaperIssueProps) {
  const { name, created_at, hajmi, downloads_count, file } = magazine;
  const t = useTranslation();

  const downloadMagazineFile = () => {
    return axios.get(file, {
      responseType: 'blob',
    });
  };

  const { ref, url, download } = useDownloadFile({ apiDefinition: downloadMagazineFile });
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
        <a href={url} download={name} className="hidden" ref={ref} />
        <Button className="btn--download" onClick={download}>
          <span>{t('Yuklab olish')}</span>
        </Button>
        <Button className="btn--download btn--download-white" target="_blank" href={file}>
          <span>{t('O`qish')}</span>
        </Button>
      </div>
    </div>
  );
}
