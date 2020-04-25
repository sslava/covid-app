// @flow
import {useState, useEffect} from 'react';

import useDebounceValue from '../../common/useDebounceValue';

export default function useSortedSearch<T>(
  data: Array<T>,
  filterFn: (q: string, i: T) => boolean,
  sortfns: Array<Function>,
  sort: number,
) {
  const [query, setQuery] = useState<string>('');
  const [items, setItems] = useState<Array<any>>(data);

  const deobouncedQuery = useDebounceValue(query, 200);

  useEffect(() => {
    const sorted = sortfns[sort](data);
    const q = deobouncedQuery.toLowerCase();
    const filtered = q ? sorted.filter((c) => filterFn(q, c)) : sorted;
    setItems(filtered);
  }, [data, deobouncedQuery, sortfns, filterFn, sort]);

  return [items, query, setQuery];
}
