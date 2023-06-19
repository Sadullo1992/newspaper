export default function dateFormetter(date: string | undefined) {
  if (!date) return;
  return date.slice(11, 16) + ' ' + date.slice(0, 10).split('-').reverse().join('.');
}
