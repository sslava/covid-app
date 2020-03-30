import React, {useEffect, useRef, useState} from 'react';
import {Animated, Easing} from 'react-native';

export default function Fade({style, children, visible}) {
  const [isReady, setIsReady] = useState(false);

  const opacityValue = useRef(new Animated.Value(0));
  const translationValue = useRef(new Animated.Value(0));

  useEffect(() => {
    opacityValue.current.setValue(visible ? 1 : 0);
    setIsReady(true);
  }, [visible]);

  useEffect(() => {
    if (!isReady) {
      return;
    }
    const animationConfig = {
      duration: 200,
      easing: Easing.linear,
    };
    const opacityConfig = {
      ...animationConfig,
      toValue: visible ? 1 : 0,
    };
    const translationConfig = {
      ...animationConfig,
      toValue: visible ? 0 : 5,
    };

    Animated.timing(opacityValue.current, opacityConfig).start();
    Animated.timing(translationValue.current, translationConfig).start();
  }, [visible, isReady]);

  return (
    <Animated.View
      style={{
        opacity: opacityValue.current,
        transform: [{translateY: translationValue.current}],
        ...style,
      }}>
      {children}
    </Animated.View>
  );
}
