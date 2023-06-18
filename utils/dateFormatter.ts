export default function dateFormetter(date: string) {
  return date.slice(11, 16) + ' ' + date.slice(0, 10).split('-').reverse().join('.');
}
