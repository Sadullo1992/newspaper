import { AppLanguage } from '@/types/types';

export const LANGUAGE_NAMES: { [key in AppLanguage]: string } = {
  lotin: `O'zbekcha`,
  krill: 'Ўзбекча',
};

export const DEFAULT_LANGUAGE: AppLanguage = 'lotin';

export const LANGUAGE_COOKIE = 'APP_LANGUAGE';

export const COOKIE_MAX_AGE = 7 * 24 * 3600;

export const BASE_URL = 'https://uzunpro.uz/api';
