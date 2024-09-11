export function today(hours = 0, minutes = 0, seconds = 0) {
  const now = new Date();

  const year = now.getFullYear();
  const month = now.getMonth();
  const day = now.getDate();

  const date = Date.UTC(year, month, day, hours, minutes, seconds, 0);

  return new Date(date);
}
