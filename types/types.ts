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
