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

export type GraphItem = {
  label: string,
  value: number,
};

export type HistoryComparer = (a: HistoryItem, b: HistoryItem) => number;

export const byUpdatedAt: HistoryComparer = (a, b) =>
  parseDate(a.updated_at).getTime() - parseDate(b.updated_at).getTime();

export type GraphTf = (Array<HistoryItem>) => Array<HistoryItem>;
export type GraphFn = (Array<HistoryItem>) => Array<GraphItem>;

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
): GraphFn {
  return (list) =>
    list.map((item, ix) => {
      const prev = ix ? list[ix - 1] : null;
      return {
        label: selectLabel(item),
        value: selectValue(item, prev),
      };
    });
}

export function composeGraph(
  mapper: GraphFn,
  ...transforms: Array<GraphTf>
): GraphFn {
  return (items) => {
    const prepared = transforms.reduce(
      (result, nextTransform) => nextTransform(result),
      items,
    );
    return mapper(prepared);
  };
}

export function findLatestPeak(
  items: Array<GraphItem>,
): [GraphItem | null, number] {
  if (!items || !items.length) {
    return [null, -1];
  }

  let peak: GraphItem = items[0];
  let peakIndex: number = 0;

  items.forEach((item, index) => {
    if (peak.value <= item.value) {
      peak = item;
      peakIndex = index;
    }
  });

  return [peak, peakIndex];
}
