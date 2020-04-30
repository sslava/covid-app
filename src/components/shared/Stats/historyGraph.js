// @flow
import {parseDate} from '../../../common/locale';

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

export type GraphTf = (Array<HistoryItem>) => Array<HistoryItem>;
export type BarChartFn = (Array<HistoryItem>) => Array<BarChartItem>;

export type StackedBarChartFn = (Array<HistoryItem>) => Array<Object>;

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
  return (items) => items.slice(Math.max(items.length - x, 0));
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

function composeGraph(...transforms: Array<GraphTf>): GraphTf {
  return (items) =>
    transforms.reduce((result, nextTransform) => nextTransform(result), items);
}

export function composeBarChart(
  mapper: BarChartFn,
  ...transforms: Array<GraphTf>
): BarChartFn {
  const transformer = composeGraph(...transforms);
  return (items) => mapper(transformer(items));
}

export function composeStackedBarChart(
  mapper: StackedBarChartFn,
  ...transforms: Array<GraphTf>
): BarChartFn {
  const transformer = composeGraph(...transforms);
  return (items) => mapper(transformer(items));
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
