import { BASE_URL } from '@/constants/constants';
import { ICategory, IResponse } from '@/types/types';
import { GetServerSideProps } from 'next';
import { getServerSideSitemapLegacy, ISitemapField } from 'next-sitemap';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const response = await fetch(`${BASE_URL}/categories`);
  const { data: categories }: IResponse<ICategory> = await response.json();

  const fields: ISitemapField[] = categories.map((category) => ({
    loc: `https://www.bobotogtongi.uz/categories/${category.slug}`,
    lastmod: new Date().toISOString(),
  }));

  return getServerSideSitemapLegacy(ctx, fields);
};

export default function Sitemap() {}
