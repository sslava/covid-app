// @flow
import {useMemo} from 'react';
import {legendColor} from './uikit';

export default function useCountryStats(country: Object) {
  return useMemo(() => {
    return [
      {
        color: legendColor.Active,
        fraction: country.active / country.total,
      },
      {
        color: legendColor.Recovered,
        fraction: country.recovered / country.total,
      },
      {
        color: legendColor.Deaths,
        fraction: country.deaths / country.total,
      },
    ];
  }, [country.total, country.recovered, country.deaths, country.active]);
}
