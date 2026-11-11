const MONTHS_SHORT = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const MONTHS_LONG = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

const ordinal = (day: number) => {
  if (day > 3 && day < 21) return 'th';
  switch (day % 10) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
};

const parse = (iso: string) => {
  const [year, month, day] = iso.split('-').map(Number);
  return { year, month: month - 1, day };
};

export function formatDate(iso: string): string {
  const { year, month, day } = parse(iso);
  return `${MONTHS_SHORT[month]} ${day}, ${year}`;
}

export function formatLongDate(iso: string): string {
  const { year, month, day } = parse(iso);
  return `${day}${ordinal(day)} ${MONTHS_LONG[month]} ${year}`;
}
