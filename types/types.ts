export type IModal = { isModal: boolean };

export interface ISettings {
  language: AppLanguage;
}

export const AppLanguages = ['lotin', 'krill'] as const;

export type AppLanguage = (typeof AppLanguages)[number];

export interface ICategory {
  id: string;
  name: string;
  slug: string;
}

export interface IResponse<T> {
  data: T[];
  meta: {
    total: number;
    lastPage: number;
    currentPage: number;
    perPage: number;
    prev: number | null;
    next: number | null;
  };
}

export type TImage = {
  id: string;
  imagename: string;
  imageSize: string;
  postId: string;
};

export interface IArticle {
  id: string;
  title: string;
  content: string;
  categoryId: string | null;
  category: ICategory;
  slug: string;
  createdAt: number;
  updatedAt: number;
  isActual: boolean;
  isFeatured: boolean;
  views: number;
  images: TImage[];
  author: string | null;
}

export interface IPost extends IArticle {
  content: string;
}

export interface IMagazine {
  id: string;
  name: string;
  createdAt: number;
  filename: string;
  size: number;
  downloadsCount: number;
}
