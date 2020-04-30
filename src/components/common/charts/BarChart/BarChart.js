import React from 'react';
import Svg, {G} from 'react-native-svg';

import {useBarChart, getBar} from './barcharts';
import {Bar} from './Blocks';

const emptyProps = () => ({});

export default function BarChart({
  style,
  data,
  color,
  width,
  height,
  getItemProps = emptyProps,
  padding = 0.5,
}) {
  const {xs, ys} = useBarChart(data, width, height, padding);
  return (
    <Svg style={style} width={width} height={height}>
      <G fill={color}>
        {data.map((d, i) => (
          <Bar
            key={d.label}
            {...getBar(d, i, xs, ys, height)}
            {...getItemProps(d, i)}
          />
        ))}
      </G>
    </Svg>
  );
}
