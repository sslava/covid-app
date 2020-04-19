// @flow
import {useState, useEffect} from 'react';

import useDebounceValue from '../useDebounceValue';

export default function useDebouncedSearch<T>(
  data: Array<T>,
  filterFn: (q: string, i: T) => boolean,
) {
  const [query, setQuery] = useState<string>('');
  const [items, setItems] = useState<Array<any>>(data);

  const deobouncedQuery = useDebounceValue(query, 200);

  useEffect(() => {
    const q = deobouncedQuery.toLowerCase();
    const filtered = q ? data.filter((c) => filterFn(q, c)) : data;
    setItems(filtered);
  }, [data, deobouncedQuery, filterFn]);

  return [items, query, setQuery];
}
