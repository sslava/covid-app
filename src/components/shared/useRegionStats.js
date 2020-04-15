import {useMemo} from 'react';
import {useTheme} from 'styled-components/native';

export default function useRegionStats(total, recovered, deaths, active) {
  const theme = useTheme();
  return useMemo(() => {
    return [
      {
        color: theme.activeColor,
        fraction: active / total,
      },
      {
        color: theme.recoveredColor,
        fraction: recovered / total,
      },
      {
        color: theme.deathsColor,
        fraction: deaths / total,
      },
    ];
  }, [total, recovered, deaths, active, theme]);
}
