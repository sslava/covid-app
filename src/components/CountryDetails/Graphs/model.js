import {
  lastN,
  composeBarChart,
  composeStackedBarChart,
  sortBy,
  valueField,
  mergeTodayStats,
  pickRandom,
  hasValue,
} from '../../shared/historyModel';

export const activeDaily = composeBarChart(
  valueField((h) => +h.delta_confirmed),
  mergeTodayStats,
  lastN(45),
);

export const deathsDaily = composeBarChart(
  valueField((h, y) => (y ? h.total_deaths - y.total_deaths : 0)),
  mergeTodayStats,
  lastN(45),
);

export const totalActive = composeBarChart(
  valueField((h) => +h.total_active),
  mergeTodayStats,
  lastN(45),
);

export const hasTotalActive = (history: Array<HistoryItem>): boolean => {
  return pickRandom(history).some((item) => hasValue(item.total_active));
};

const historyMapper = (items) => {
  return items.map((d) => ({
    active: +d.total_active,
    recovered: +d.total_recovered,
    deaths: +d.total_deaths,
    total: +d.total_cases,
    key: d.updated_at,
  }));
};

export const totalCases = composeStackedBarChart(
  historyMapper,
  mergeTodayStats,
  sortBy(),
  lastN(40),
);
