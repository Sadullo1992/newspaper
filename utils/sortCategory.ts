import { ICategory } from '@/types/types';

export default function sortCategories(categories: ICategory[]) {
  const arr = categories.slice();
  const lastItemArr = arr.filter((item) => item.name === 'Gazetamiz nashrlari');
  const restArr = arr.filter((item) => item.name !== 'Gazetamiz nashrlari');
  return restArr.sort((a, b) => sortCallback(a.name.length, b.name.length)).concat(lastItemArr);
}

function sortCallback(x: number, y: number) {
  return x - y;
}
