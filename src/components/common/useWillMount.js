import {useRef} from 'react';

export default function useWillMount(callback) {
  const once = useRef(false);
  if (once.current === false) {
    callback();
    once.current = true;
  }
}
