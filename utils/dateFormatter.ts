import { format } from 'date-fns';

export default function dateFormatter(date: number | string | undefined) {
  if (!date) return;
  return format(new Date(date), 'dd.MM.yyyy');
}
