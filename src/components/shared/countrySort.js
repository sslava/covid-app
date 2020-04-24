import {useCallback, useState, useMemo} from 'react';
import {t} from '../../common/locale';

export function useCountrySort() {
  const [sort, setSort] = useState(0);
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
