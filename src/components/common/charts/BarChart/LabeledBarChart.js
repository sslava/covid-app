import React from 'react';
import Svg from 'react-native-svg';

import {useBarChart, getBar} from './barcharts';
import {formatNumber} from '../../../../common/locale';

import {Bar, BarLabel} from './Blocks';

export default function LabeledBarChart({
  style,
  data,
  color,
  width,
  height,
  peakIndex,
  paddingLeft = 20,
  labelSize = 13,
}) {
  const {xs, ys} = useBarChart(data, width, height, 0.5, 20, labelSize + 8);
  return (
    <Svg style={style} width={width} height={height}>
      {data.map((item, index) => (
        <Bar
          key={item.label}
          {...getBar(item, index, xs, ys, height)}
          fill={color}
        />
      ))}
      {peakIndex !== null && (
        <BarLabel color={color} fontSize={labelSize} x={xs(peakIndex)}>
          {formatNumber(data[peakIndex].value)}
        </BarLabel>
      )}
    </Svg>
  );
}
