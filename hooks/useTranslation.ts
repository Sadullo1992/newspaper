import Transliterator from 'lotin-kirill';
import { useAppSelector } from '@/redux/hooks';
import { selectSettings } from '@/redux/settings';

const transliterator = new Transliterator();

export default function useTranslation() {
  const { language } = useAppSelector(selectSettings);

  return (translationText: string | undefined) => {
    if (!translationText) return '';
    let translation;

    if (language === 'krill') {
      translation = transliterator.textToCyrillic(translationText);
    } else {
      translation = transliterator.textToLatin(translationText);
    }

    return translation;
  };
}
