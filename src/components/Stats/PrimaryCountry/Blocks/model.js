import {formatDate, parseDate} from '../../../../common/locale';

const formatStats = (c) => ({
  value: +c.total_new,
  date: formatDate(c.updated),
});

const formatHistory = (h) => ({
  value: +h.delta_confirmed,
  date: formatDate(h.updated_at),
});

export const getGraphData = (history) =>
  history.map((h) => ({label: h.updated_at, value: +h.delta_confirmed}));

const sortbyDate = (a, b) =>
  parseDate(a.updated_at).getTime() - parseDate(b.updated_at).getTime();

export const lastX = (history, x) =>
  [...history].sort(sortbyDate).slice(Math.max(history.length - 14, 0));

export function getLastStats(history, country) {
  let today = formatStats(country);
  const len = history.length;
  let yesterday = null;
  if (len) {
    if (today.value) {
      yesterday = formatHistory(history[len - 1]);
    } else {
      today = formatHistory(history[len - 1]);
      yesterday = formatHistory(history[len - 2]);
    }
  }
  return [today, yesterday];
}
