import React from 'react';

import {View, StyleSheet} from 'react-native';
import Svg, {Path, Defs, LinearGradient, Stop} from 'react-native-svg';

import {scaleTime, scaleLinear} from 'd3-scale';
import * as shape from 'd3-shape';

const getDomain = (domain: number[]) => [
  Math.min(...domain),
  Math.max(...domain),
];

export default function Graph({data, width, height}) {
  const scaleX = scaleTime()
    .domain(getDomain(data.map((d) => d.date)))
    .range([0, width]);

  const scaleY = scaleLinear()
    .domain(getDomain(data.map((d) => d.value)))
    .range([height - 2, 2]);

  const d = shape
    .line()
    .x((p) => scaleX(p.date))
    .y((p) => scaleY(p.value))
    .curve(shape.curveBasis)(data);

  return (
    <View style={{width, height}}>
      <Svg style={StyleSheet.absoluteFill}>
        <Defs>
          <LinearGradient id="gradient" x1="50%" y1="0%" x2="50%" y2="100%">
            <Stop offset="0%" stopColor="#cee3f9" />
            <Stop offset="80%" stopColor="#ddedfa" />
            <Stop offset="100%" stopColor="#feffff" />
          </LinearGradient>
        </Defs>
        <Path
          d={`${d}L ${width} ${height} L 0 ${height}`}
          fill="url(#gradient)"
        />
        <Path fill="transparent" strokeWidth={4} stroke="#3977e3" d={d} />
      </Svg>
    </View>
  );
}
