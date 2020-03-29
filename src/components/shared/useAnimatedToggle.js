// @flow
import {useState, useCallback, useRef, useEffect} from 'react';
import {Animated, Easing} from 'react-native';

export default function useAnimatedToggle(duration: number = 100) {
  const [visible, setVisible] = useState(false);
  const toggle = useCallback(() => setVisible(s => !s), []);

  const value = useRef<Animated.Value>(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(value.current, {
      toValue: visible ? 1 : 0,
      duration,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  }, [visible, duration]);
  return [visible, toggle, value];
}
