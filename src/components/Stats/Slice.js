import React, {Component} from 'react';

import {Path} from 'react-native-svg';

import {arc, pie} from 'd3-shape';

export default class Slice extends Component {
  generator = arc()
    .outerRadius(100)
    .padAngle(0)
    .innerRadius(0);

  render() {
    const {endAngle, color, index, data} = this.props;
    // const val = data[index].number;

    const arcs = pie()
      .value(item => item.number)
      .startAngle(0)
      .endAngle(endAngle)(data);

    const d = this.generator(arcs[index]);

    return <Path d={d} fill={color} />;
  }
}
