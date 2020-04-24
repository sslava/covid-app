// @flow
import {useState, useEffect} from 'react';

import useDebounceValue from '../common/useDebounceValue';
import {sortActive, sortTotal, sortDeaths} from '../shared/countrySort';

function withIndex(fn: (arr: Array<Object>) => Array<Object>) {
  return (arr) => fn(arr).map((a, index) => ({index: index + 1, ...a}));
}

const sortFns = [
  withIndex(sortTotal),
  withIndex(sortActive),
  withIndex(sortDeaths),
];

export default function useDebouncedSearch<T>(
  data: Array<T>,
  filterFn: (q: string, i: T) => boolean,
  sort: number,
) {
  const [query, setQuery] = useState<string>('');
  const [items, setItems] = useState<Array<any>>(data);

  const deobouncedQuery = useDebounceValue(query, 200);

  useEffect(() => {
    const sorted = sortFns[sort](data);
    const q = deobouncedQuery.toLowerCase();
    const filtered = q ? sorted.filter((c) => filterFn(q, c)) : sorted;
    setItems(filtered);
  }, [data, deobouncedQuery, filterFn, sort]);

  return [items, query, setQuery];
}
