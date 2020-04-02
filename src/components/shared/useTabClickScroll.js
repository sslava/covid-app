import {useEffect, useRef} from 'react';

import {useNavigation} from '@react-navigation/native';

export default function useTabClickScroll() {
  const scrollRef = useRef();
  const nav = useNavigation();

  useEffect(() => {
    const unsubscribe = nav.addListener('tabPress', (e) => {
      if (nav.isFocused()) {
        scrollRef.current.scrollTo({y: 0, animated: true});
      }
    });
    return unsubscribe;
  }, [nav]);

  return scrollRef;
}
