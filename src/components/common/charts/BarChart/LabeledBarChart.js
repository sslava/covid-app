import React from 'react';
import Svg, {Text} from 'react-native-svg';

import {useBarChart, getBar} from './useBarChart';
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
  const [x, y] = useBarChart(
    data,
    width - paddingLeft,
    height - labelSize - 8,
    0.5,
  );

  return (
    <Svg style={style} width={width} height={height}>
      {data.map((item, index) => (
        <Bar
          key={item.label}
          {...getBar(item, index, x, y, height)}
          fill={color}
        />
      ))}
      {peakIndex !== null && (
        <BarLabel color={color} fontSize={labelSize} x={x(peakIndex)}>
          {formatNumber(data[peakIndex].value)}
        </BarLabel>
      )}
    </Svg>
  );
}
