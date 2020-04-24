import {useCallback, useState, useMemo} from 'react';

import {t} from '../../common/locale';

export function sortTotal(arr) {
  return [...arr].sort((a, b) => b.total - a.total);
}

export function sortActive(arr) {
  return [...arr].sort((a, b) => b.active - a.active);
}

export function sortDeaths(arr) {
  return [...arr].sort((a, b) => b.deaths - a.deaths);
}

export function useCountrySort(initialSort = 0) {
  const [sort, setSort] = useState(initialSort);
  const changeSort = useCallback(
    (e) => setSort(e.nativeEvent.selectedSegmentIndex),
    [],
  );

  const values = useMemo(
    () => [
      t('countries.sort.total'),
      t('countries.sort.active'),
      t('countries.sort.deaths'),
    ],
    [],
  );

  return [values, sort, changeSort];
}
