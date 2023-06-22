import useTranslation from '@/hooks/useTranslation';
import { useGetAllMagazinesQuery } from '@/redux/apiSlice';
import NewspaperIssueItem from './NewspaperIssueItem';

export default function NewspaperIssue() {
  const t = useTranslation();
  const { data: allMagazines } = useGetAllMagazinesQuery();

  return (
    <div className="newspaper-issue">
      <h2 className="newspaper-issue__title">{t('Gazetamizning nashrlari')}</h2>
      <p className="newspaper-issue__text">
        {t(
          'Bu yerda Bobotog‘ gazetasining barcha sonlarini yuklab olishingiz va elekron holatda o’qishingiz mumkin'
        )}
      </p>
      <div className="newspaper-issue__grid">
        {allMagazines &&
          allMagazines.results.map((item) => <NewspaperIssueItem key={item.id} magazine={item} />)}
      </div>
    </div>
  );
}
