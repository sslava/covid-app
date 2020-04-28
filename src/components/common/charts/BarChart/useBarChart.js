import {useRef, useMemo} from 'react';
import {Animated} from 'react-native';

import {scaleBand, scaleLinear} from 'd3-scale';

import {range} from '../../../../common/utils';

export function useBarChart(data, width, height, padding) {
  const {x, y} = useRef({x: scaleBand(), y: scaleLinear()}).current;
  const max = useMemo(() => Math.max(...data.map((d) => d.value)), [data]);

  y.domain([0, max]).range([0, height]);
  x.domain(range(data.length)).range([0, width]).padding(padding);

  return [x, y];
}

export function getBar(item, index, x, y, height) {
  return {
    x: x(index),
    width: x.bandwidth(),
    y: height - y(item.value),
    height: y(item.value),
  };
}

export function getAnimatedBar(item, index, x, y, height, anim) {
  return {
    x: x(index),
    width: x.bandwidth(),
    y: Animated.subtract(height, Animated.multiply(anim, y(item.value))),
    height: y(item.value),
  };
}
