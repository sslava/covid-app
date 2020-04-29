import {useRef, useMemo} from 'react';
import {Animated} from 'react-native';

import {scaleBand, scaleLinear} from 'd3-scale';

import {range} from '../../../../common/utils';

export function useBarChart(data, width, height, delta, pRight, pTop) {
  const max = useMemo(() => Math.max(...data.map((d) => d.value)), [data]);
  const xdomain = useMemo(() => range(data.length), [data.length]);

  return useScales(xdomain, max, width, height, delta, pRight, pTop);
}

export function useScales(
  xdomain,
  max,
  width,
  height,
  delta = 0.5,
  pRight = 0,
  pTop = 0,
) {
  const scales = useRef({xs: scaleBand(), ys: scaleLinear()}).current;
  scales.xs
    .domain(xdomain)
    .range([0, width - pRight])
    .padding(delta);

  scales.ys.domain([0, max]).range([height, pTop]);

  return scales;
}

export function getBar(item, index, xs, ys, height) {
  return {
    x: xs(index),
    width: xs.bandwidth(),
    y: ys(item.value),
    height: height - ys(item.value),
  };
}

export function getAnimatedBar(item, index, xs, ys, height, anim) {
  return {
    x: xs(index),
    width: xs.bandwidth(),
    y: ys(item.value),
    height: Animated.subtract(height, Animated.multiply(anim, ys(item.value))),
  };
}
