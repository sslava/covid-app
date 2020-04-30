const formatStats = (c) => ({date: c.updated, value: +c.total_new});

const formatHistory = (h) => ({date: h.updated_at, value: +h.delta_confirmed});

export function getLatestStats(history, country) {
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
