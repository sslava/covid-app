// @flow
import {useState, useEffect} from 'react';

export default function useDebouncedSearch<T>(
  data: Array<T>,
  filterFn: (q: string, i: T) => boolean,
) {
  const [query, setQuery] = useState<string>('');
  const [items, setItems] = useState<Array<any>>(data);

  useEffect(() => {
    const t = setTimeout(() => {
      const q = query.toLowerCase();
      const filtered = q ? data.filter((c) => filterFn(q, c)) : data;
      setItems(filtered);
    }, 250);

    return () => clearTimeout(t);
  }, [data, query, filterFn]);

  return [items, query, setQuery];
}
