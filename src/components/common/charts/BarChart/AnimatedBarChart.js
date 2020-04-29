import React, {useRef, useEffect, useMemo} from 'react';
import {Animated, Easing} from 'react-native';
import Svg from 'react-native-svg';

import {useBarChart, getAnimatedBar} from './barcharts';
import {AnimatedBar} from './Blocks';

export default function AnimatedBarChat({
  style,
  data,
  color,
  width,
  height,
  padding = 0.5,
  animated = false,
}) {
  const {xs, ys} = useBarChart(data, width, height, padding);
  const anim = useRef(new Animated.Value(animated ? 0 : 1));
  useEffect(() => {
    if (animated) {
      Animated.timing(anim.current, {
        toValue: 1,
        duration: 500,
        easing: Easing.inOut(Easing.quad),
        useNativeDriver: false,
      }).start();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Svg style={style} width={width} height={height}>
      {data.map((d, i) => (
        <AnimatedBar
          key={d.label}
          {...getAnimatedBar(d, i, xs, ys, height, anim.current)}
          fill={color}
        />
      ))}
    </Svg>
  );
}
