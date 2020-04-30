import React, {useMemo} from 'react';
import Svg, {Rect, G} from 'react-native-svg';

import * as d3Shape from 'd3-shape';

import {useScales} from './barcharts';
import {BarLabel} from './Blocks';

export default function StackedBarChart({
  data,
  categories,
  delta = 0.5,
  width,
  maxFn,
  colors,
  height,
  style,
  label,
  labelColor,
}) {
  const [xdomain, series, max] = useMemo(() => {
    const stack = d3Shape.stack().keys(categories);
    const domain = data.map((d) => d.key);
    return [domain, stack(data), maxFn(data)];
  }, [data, maxFn, categories]);
  const {xs, ys} = useScales(xdomain, max, width, height, delta, 20, 20);

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
      <BarLabel
        fontSize={13}
        color={labelColor}
        x={xs(data[data.length - 1].key)}>
        {label}
      </BarLabel>
    </Svg>
  );
}
