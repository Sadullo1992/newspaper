export const AppCategories = [
  'agro',
  'adabiyot',
  'tanqid',
  'jamiyat',
  'iqtisod',
  'huquq',
  'turizm',
  'nashrlar',
] as const;

export type AppCategory = (typeof AppCategories)[number];

export type IModal = { isModal: boolean };

export interface ISettings {
  language: AppLanguage;
}

export const AppLanguages = ['lotin', 'krill'] as const;

export type AppLanguage = (typeof AppLanguages)[number];
