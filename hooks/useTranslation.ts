import { krillga } from '@/lib/lotintokrill';
import { useAppSelector } from '@/redux/hooks';
import { selectSettings } from '@/redux/settings';

export default function useTranslation() {
  const { language } = useAppSelector(selectSettings);

  return (translationText: string | undefined) => {
    if (language === 'krill' && !!translationText) {
      const translation = krillga(translationText);
      return translation;
    }

    return translationText;
  };
}
