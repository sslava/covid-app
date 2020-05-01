import {
  lastN,
  composeBarChart,
  composeStackedBarChart,
  sortBy,
  valueField,
  // mergeTodayStats,
  pickRandom,
  hasValue,
} from '../../shared/historyModel';

export const activeDaily = composeBarChart(
  valueField((h) => +h.delta_confirmed),
  lastN(45),
);

export const deathsDaily = composeBarChart(
  valueField((h, y) => {
    if (!y) {
      return 0;
    }
    const diff = h.total_deaths - y.total_deaths;
    return diff >= 0 ? diff : 0;
  }),
  lastN(45),
);

export const totalConfirmed = composeBarChart(
  valueField((h) => +h.total_cases),
  lastN(45),
);

export const totalActive = composeBarChart(
  valueField((h) => +h.total_active),
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
  sortBy(),
  lastN(40),
);
