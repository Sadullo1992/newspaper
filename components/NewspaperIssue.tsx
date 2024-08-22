import useTranslation from '@/hooks/useTranslation';
import { useGetAllMagazinesQuery } from '@/redux/magazines';
import { useState } from 'react';
import { MagazineLoader } from './Loader';
import NewspaperIssueItem from './NewspaperIssueItem';

export default function NewspaperIssue() {
  const t = useTranslation();
  const [page, setPage] = useState(1);

  const { data: allMagazines, isFetching } = useGetAllMagazinesQuery(page);

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
          allMagazines.data.map((item, index, arr) => (
            <NewspaperIssueItem
              key={item.id}
              magazine={item}
              isLast={index === arr.length - 1}
              newLimit={() => setPage(page + 1)}
              isLastElement={index === allMagazines.meta.total - 1}
            />
          ))}
        {isFetching && (
          <>
            <MagazineLoader uniqueKey={'for-magazine'} />
            <MagazineLoader uniqueKey={'for-magazine'} />
          </>
        )}
      </div>
    </div>
  );
}
