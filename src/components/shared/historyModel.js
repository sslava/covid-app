// @flow
import {parseDate, formatDate} from '../../common/locale';
import {lastX} from '../../common/utils';

export type StatsItem = {
  active: string,
  cases_1m: string,
  code: string,
  country_name: string,
  country_name_en: string,
  deaths: string,
  deaths_new: string,
  lat: string,
  lng: string,
  recovered: string,
  serious: string,
  total: string,
  total_new: string,
  updated: string,
};

export type HistoryItem = {
  country_name: string,
  delta_confirmed: string,
  delta_recovered: string,
  id: string,
  incident_rate: string,
  iso3: string,
  people_hosp: string,
  people_tested: string,
  province_state: string,
  report_date_string: string,
  total_active: string,
  total_cases: string,
  total_deaths: string,
  total_recovered: string,
  uid: string,
  updated_at: string,
};

export type BarChartItem = {
  label: string,
  value: number,
};

export type HistoryComparer = (a: HistoryItem, b: HistoryItem) => number;

export type GraphTf = (Array<HistoryItem>, ...ctx: any) => Array<HistoryItem>;
export type BarChartFn = (
  Array<HistoryItem>,
  ...ctx: any
) => Array<BarChartItem>;

export type StackedBarChartFn = (
  Array<HistoryItem>,
  ...ctx: any
) => Array<Object>;

export const byUpdatedAt: HistoryComparer = (a, b) =>
  parseDate(a.updated_at).getTime() - parseDate(b.updated_at).getTime();

export function sortBy(comparer: HistoryComparer = byUpdatedAt): GraphTf {
  return (items) => {
    if (!comparer) {
      return items;
    }
    return [...items].sort(comparer);
  };
}

export function lastN(x: number): GraphTf {
  return (items) => lastX(items, x);
}

export type LabelSelector = (h: HistoryItem) => string;
export type ValueSelector = (h: HistoryItem, p?: ?HistoryItem) => number;

export const labelUpdatedAt: LabelSelector = (h) => h.updated_at;

export function valueField(
  selectValue: ValueSelector,
  selectLabel: LabelSelector = labelUpdatedAt,
): BarChartFn {
  return (list) =>
    list.map((item, ix) => {
      const prev = ix ? list[ix - 1] : null;
      return {
        label: selectLabel(item),
        value: selectValue(item, prev),
      };
    });
}

function composeTfs(...transforms: Array<GraphTf>): GraphTf {
  return (items, ...ctx) =>
    transforms.reduce(
      (result, nextTransform) => nextTransform(result, ...ctx),
      items,
    );
}

export function composeBarChart(
  mapper: BarChartFn,
  ...transforms: Array<GraphTf>
): BarChartFn {
  const transformer = composeTfs(...transforms);
  return (...args) => mapper(transformer(...args));
}

export function composeStackedBarChart(
  mapper: StackedBarChartFn,
  ...transforms: Array<GraphTf>
): BarChartFn {
  const transformer = composeTfs(...transforms);
  return (...args) => mapper(transformer(...args));
}

export function findLatestPeak(
  items: Array<BarChartItem>,
): [BarChartItem | null, number] {
  if (!items || !items.length) {
    return [null, -1];
  }

  let peak: BarChartItem = items[0];
  let peakIndex: number = 0;

  items.forEach((item, index) => {
    if (peak.value <= item.value) {
      peak = item;
      peakIndex = index;
    }
  });

  return [peak, peakIndex];
}

export function statsToHistoryItem(statsItem: StatsItem): HistoryItem {
  return {
    country_name: statsItem.country_name,
    delta_confirmed: statsItem.total_new,
    delta_recovered: '',
    id: statsItem.code,
    incident_rate: statsItem.cases_1m,
    people_hosp: statsItem.serious,
    total_active: statsItem.active,
    total_cases: statsItem.total,
    total_deaths: statsItem.deaths,
    total_recovered: statsItem.recovered,
    updated_at: statsItem.updated,
    iso3: statsItem.code,
    people_tested: '',
    province_state: '',
    report_date_string: '',
    uid: statsItem.code,
  };
}

const statsToBarchart = (c: StatsItem): BarChartItem => ({
  label: c.updated,
  value: +c.total_new,
});

const historyToBarhart = (h: HistoryItem): BarChartItem => ({
  label: h.updated_at,
  value: +h.delta_confirmed,
});

export function getLatestStats(
  history: Array<HistoryItem>,
  country: StatsItem,
): Array<?BarChartItem> {
  let today = statsToBarchart(country);
  const len = history.length;
  let yesterday = null;
  if (len) {
    if (today.value) {
      yesterday = historyToBarhart(history[len - 1]);
    } else {
      today = historyToBarhart(history[len - 1]);
      yesterday = historyToBarhart(history[len - 2]);
    }
  }
  return [today, yesterday];
}

export const mergeTodayStats: GraphTf = (
  history: Array<HistoryItem>,
  today: StatsItem,
) => {
  if (!history || !history.length || !today) {
    return history;
  }
  const last = history[history.length - 1];

  if (formatDate(today.updated) === formatDate(last.updated_at)) {
    return history;
  }
  return history.concat(statsToHistoryItem(today));
};

export function hasValue(value: any, field: string): boolean {
  return (
    value !== null &&
    value !== undefined &&
    value !== '' &&
    value !== '0' &&
    value !== 0
  );
}

export function pickRandom(history: Array<HistoryItem>): Array<HistoryItem> {
  if (!history || !history.length) {
    return [];
  }
  return [
    history[0],
    history[Math.ceil(history.length / 2)],
    history[history.length - 1],
  ];
}
