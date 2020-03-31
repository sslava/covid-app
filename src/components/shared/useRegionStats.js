import {useMemo} from 'react';
import {legendColor} from './uikit';

export default function useRegionStats(total, recovered, deaths, active) {
  return useMemo(() => {
    return [
      {
        color: legendColor.Active,
        fraction: active / total,
      },
      {
        color: legendColor.Recovered,
        fraction: recovered / total,
      },
      {
        color: legendColor.Deaths,
        fraction: deaths / total,
      },
    ];
  }, [total, recovered, deaths, active]);
}
