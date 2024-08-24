import useDownloader from 'react-use-downloader';
import useTranslation from '@/hooks/useTranslation';
import { IMagazine } from '@/types/types';
import dateFormatter from '@/utils/dateFormatter';
import Button from './Button';
import Spinner from './Spinner';
import { useAddMagazineDownloadCountMutation } from '@/redux/magazines';
import { useEffect, useRef } from 'react';
import { BASE_URL } from '@/constants/constants';
import { byteToMB } from '@/utils/byteToMB';

type NewsPaperIssueProps = {
  magazine: IMagazine;
  newLimit?: () => void;
  isLast?: boolean;
  isLastElement?: boolean;
};

export default function NewspaperIssueItem({
  magazine,
  newLimit,
  isLast,
  isLastElement,
}: NewsPaperIssueProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!cardRef?.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (isLast && entry.isIntersecting && !isLastElement && newLimit) {
        newLimit();
        observer.unobserve(entry.target);
      }
    });

    observer.observe(cardRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLast]);

  const { id, name, createdAt, size, downloadsCount, filename } = magazine;
  const t = useTranslation();

  const { download, isInProgress, error } = useDownloader();
  const [addMagazineDownloadCount] = useAddMagazineDownloadCountMutation();

  const handleDownload = () => {
    download(`${BASE_URL}/media/magazines/${filename}`, `${filename}.pdf`);
    if (!isInProgress && !error) {
      addMagazineDownloadCount(id);
    }
    addMagazineDownloadCount(id);
  };
  return (
    <div className="newspaper-issue__item" ref={cardRef}>
      <div className="newspaper-issue__item__content">
        <h4 className="newspaper-issue__item__title">{t(name)}</h4>
        <div className="newspaper-issue__item__content__desc">
          <p>{t(`Qo’shildi: ${dateFormatter(createdAt)}`)}</p>
          <p>{t(`Hajmi: ${byteToMB(size)}`)}</p>
          <p>{t(`Yuklab olishdi: ${downloadsCount}`)}</p>
        </div>
      </div>
      <div className="newspaper-issue__item__btn-wrapper">
        <Button className="btn--download" onClick={handleDownload}>
          {isInProgress ? <Spinner /> : <span>{t('Yuklab olish')}</span>}
        </Button>
        <Button
          className="btn--download btn--download-white"
          href={`${BASE_URL}/media/magazines/${filename}`}
          target="_blank"
        >
          <span>{t('O`qish')}</span>
        </Button>
      </div>
    </div>
  );
}
