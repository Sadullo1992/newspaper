import { krillga, lotinga } from '@/lib/lotintokrill';
import { useAppSelector } from '@/redux/hooks';
import { selectSettings } from '@/redux/settings';

export default function useTranslation() {
  const { language } = useAppSelector(selectSettings);

  return (translationText: string | undefined) => {
    if (!translationText) return translationText;
    let translation;

    if (language === 'krill') {
      translation = krillga(translationText);
    } else {
      translation = lotinga(translationText);
    }

    return translation;
  };
}
