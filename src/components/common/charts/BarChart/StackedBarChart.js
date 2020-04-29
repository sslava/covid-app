import React, {useMemo} from 'react';
import Svg, {Rect, G} from 'react-native-svg';

import * as d3Shape from 'd3-shape';

import {useScales} from './barcharts';

export default function StackedBarChart({
  data,
  categories,
  delta = 0.5,
  width,
  maxFn,
  colors,
  height,
  style,
}) {
  const stack = d3Shape.stack().keys(categories);

  const max = useMemo(() => maxFn(data), [data, maxFn]);
  const xdomain = useMemo(() => data.map((d) => d.key), [data]);
  const {xs, ys} = useScales(xdomain, max, width, height, delta, 20, 20);
  const series = stack(data);

  return (
    <Svg style={style} width={width} height={height}>
      {series.map((category) => (
        <G key={category.key} fill={colors[category.key]}>
          {category.map((item, i) => {
            return (
              <Rect
                key={item.data.key}
                x={xs(item.data.key)}
                y={ys(item[1])}
                width={xs.bandwidth()}
                height={ys(item[0]) - ys(item[1])}
              />
            );
          })}
        </G>
      ))}
    </Svg>
  );
}
