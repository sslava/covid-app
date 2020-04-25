import {useCallback, useState, useMemo} from 'react';

import {t} from '../../common/locale';

export default function useSortTabs(initialSort = 0) {
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
