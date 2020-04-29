import {
  lastN,
  composeBarChart,
  sortBy,
  valueField,
} from '../../shared/Stats/historyGraph';

export const deltaConfirmed = composeBarChart(
  valueField((h) => +h.delta_confirmed),
  sortBy(),
  lastN(50),
);

export const deltaDeaths = composeBarChart(
  valueField((h, y) => (y ? h.total_deaths - y.total_deaths : 0)),
  sortBy(),
  lastN(50),
);
