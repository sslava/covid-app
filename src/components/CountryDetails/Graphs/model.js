import {
  lastN,
  composeGraph,
  sortBy,
  valueField,
} from '../../shared/Stats/historyGraph';

export const deltaConfirmed = composeGraph(
  valueField((h) => +h.delta_confirmed),
  sortBy(),
  lastN(50),
);

export const totalCases = composeGraph(
  valueField((h) => +h.total_cases),
  sortBy(),
  lastN(50),
);

export const totalDeaths = composeGraph(
  valueField((h) => +h.total_deaths),
  sortBy(),
  lastN(50),
);
