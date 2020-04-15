// @flow
import {useState, useEffect} from 'react';

export default function useDebouncedSearch<T>(
  data: Array<T>,
  filterFn: (q: string, i: T) => boolean,
  sortFn: (arr: Array<T>) => Array<T> = (r) => r,
) {
  const [query, setQuery] = useState<string>('');
  const [items, setItems] = useState<Array<any>>(data);

  useEffect(() => {
    const t = setTimeout(() => {
      const q = query.toLowerCase();
      const filtered = q ? data.filter((c) => filterFn(q, c)) : data;
      setItems(sortFn(filtered));
    }, 250);

    return () => clearTimeout(t);
  }, [data, query, filterFn, sortFn]);

  return [items, query, setQuery];
}
