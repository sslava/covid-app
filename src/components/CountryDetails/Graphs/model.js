import {
  lastN,
  composeBarChart,
  composeStackedBarChart,
  sortBy,
  valueField,
} from '../../shared/Stats/historyGraph';

export const activeDaily = composeBarChart(
  valueField((h) => +h.delta_confirmed),
  sortBy(),
  lastN(50),
);

export const deathsDaily = composeBarChart(
  valueField((h, y) => (y ? h.total_deaths - y.total_deaths : 0)),
  sortBy(),
  lastN(50),
);

export const totalActive = composeBarChart(
  valueField((h) => +h.total_active),
  sortBy(),
  lastN(50),
);

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
