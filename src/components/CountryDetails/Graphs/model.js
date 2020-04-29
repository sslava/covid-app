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
  valueField((t) => +t.total_cases),
  sortBy(),
  lastN(50),
);

export const totalDeaths = composeGraph(
  valueField((h) => +h.total_deaths),
  sortBy(),
  lastN(50),
);

export const deltaDeaths = composeGraph(
  valueField((h, y) => (y ? h.total_deaths - y.total_deaths : 0)),
  sortBy(),
  lastN(50),
);

// const a = {
//   country_name: 'US',
//   delta_confirmed: '22412',
//   delta_recovered: '0',
//   fips: '',
//   id: '17835',
//   incident_rate: '299.939',
//   iso3: 'USA',
//   people_hosp: '0',
//   people_tested: '0',
//   province_state: '',
//   report_date_string: '2020/04/27',
//   total_active: '0',
//   total_cases: '988197',
//   total_deaths: '56259',
//   total_recovered: '0',
//   uid: '840',
//   updated_at: '2020-04-27 00:00:00',
// };
