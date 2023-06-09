import { AppLanguage } from '@/types/types';

export const LANGUAGE_NAMES: { [key in AppLanguage]: string } = {
  lotin: `O'zbekcha`,
  krill: 'Ўзбекча',
};

export const DEFAULT_LANGUAGE: AppLanguage = 'lotin';
