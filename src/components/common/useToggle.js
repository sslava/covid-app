// @flow
import {useState, useCallback} from 'react';

export default function useToggle(initial: boolean = false) {
  const [value, setValue] = useState<boolean>(initial);
  const toggle = useCallback(() => setValue((v) => !v), []);
  return [value, toggle, setValue];
}
