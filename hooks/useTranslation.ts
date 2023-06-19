import { krillga, lotinga } from '@/lib/lotintokrill';
import { useAppSelector } from '@/redux/hooks';
import { selectSettings } from '@/redux/settings';

export default function useTranslation() {
  const { language } = useAppSelector(selectSettings);

  return (translationText: string | undefined, type?: string) => {
    if (!translationText) return '';
    let translation;

    if (language === 'krill') {
      translation = krillga(translationText);
    } else {
      translation = lotinga(translationText);
    }

    if (type === 'tag') {
      translation = tranlateHtmlContent(translationText, language);
    }

    return translation;
  };
}

function tranlateHtmlContent(translationText: string, language: string) {
  let lastPos = 0;
  let translatedText = '';
  for (let i = 0; i < translationText.length; i++) {
    if (translationText[i] === '>' && translationText[i + 1] !== '<') {
      translatedText += translationText.slice(lastPos, i + 1);
      lastPos = translationText.indexOf('</', i + 1);
      const text = translationText.slice(i + 1, lastPos);
      const translation = language === 'krill' ? krillga(text) : lotinga(text);
      translatedText += translation;
    }
  }
  return translatedText;
}
