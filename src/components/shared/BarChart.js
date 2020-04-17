import React, {useRef, useEffect, memo} from 'react';

import {Animated, Easing} from 'react-native';
import Svg, {Rect, G} from 'react-native-svg';

import {scaleBand, scaleLinear} from 'd3-scale';

const range = (count) => [...Array(count).keys()];

const R = Animated.createAnimatedComponent(Rect);

function BarChanrt({style, data, color, width, height, padding = 0.5}) {
  const anim = useRef(new Animated.Value(0.0));
  useEffect(() => {
    Animated.timing(anim.current, {
      toValue: 1,
      duration: 500,
      easing: Easing.inOut(Easing.quad),
      useNativeDriver: false,
    }).start();
  }, []);

  const maxValue = Math.max(...data.map((d) => d.value));

  const scales = useRef({x: scaleBand(), y: scaleLinear()});
  const {x, y} = scales.current;

  y.domain([0, maxValue]).range([0, height]);
  x.domain(range(data.length)).range([0, width]).padding(padding);

  return (
    <Svg style={style} width={width} height={height}>
      <G>
        {data.map((d, i) => (
          <R
            key={i}
            x={x(i)}
            y={Animated.subtract(
              height,
              Animated.multiply(anim.current, y(d.value)),
            )}
            width={x.bandwidth()}
            height={y(d.value)}
            fill={color}
          />
        ))}
      </G>
    </Svg>
  );
}

export default memo(BarChanrt);
