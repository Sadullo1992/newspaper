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

export interface IPost {
  id: string;
  title: string;
  description: string[];
  published: string;
  views: number;
  actual: boolean;
  author: string;
  imgUrls: string[];
  category: string;
  tags?: string[];
}

export type TPosts = {
  posts: IPost[];
};
