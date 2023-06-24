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

export interface InterfacePost {
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
  posts: InterfacePost[];
};

export interface ICategory {
  id: string;
  name: string;
  slug: string;
}

export interface IResponse<T> {
  links: {
    next: null;
    previous: null;
  };
  total: number;
  page: number;
  page_size: number;
  results: T;
}

export type TImage = {
  id: number;
  image: string;
  video: string;
};

export interface IArticle {
  id: string;
  title: string;
  category: ICategory;
  created_at: string;
  updated_at: string;
  dolzarb: boolean;
  is_featured: boolean;
  slug: string;
  views: number;
  postimage_set: TImage[];
  author: string;
}

export interface IPost extends IArticle {
  content: string;
}

export interface IMagazine {
  id: number;
  name: string;
  created_at: string;
  file: string;
  hajmi: string;
  downloads_count: number;
}
