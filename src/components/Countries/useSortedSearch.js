// @flow
import {useState, useEffect} from 'react';

import useDebounceValue from '../shared/useDebounceValue';

function withIndex(arr: Array<Object>): Array<Object> {
  return arr.map((a, index) => ({index: index + 1, ...a}));
}

function sortTotal(arr: Array<Object>): Array<Object> {
  return withIndex([...arr].sort((a, b) => b.total - a.total));
}

function sortActive(arr: Array<Object>): Array<Object> {
  return withIndex([...arr].sort((a, b) => b.active - a.active));
}

function sortDeaths(arr: Array<Object>): Array<Object> {
  return withIndex([...arr].sort((a, b) => b.deaths - a.deaths));
}

const sortFns = [sortTotal, sortActive, sortDeaths];

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
