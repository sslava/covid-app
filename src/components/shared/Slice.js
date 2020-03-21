import React, {Component} from 'react';

import {Path} from 'react-native-svg';

import {arc, pie} from 'd3-shape';

export default class Slice extends Component {
  static generator = arc()
    .outerRadius(100)
    .padAngle(0)
    .innerRadius(0);

  render() {
    const {endAngle, index, data} = this.props;
    const arcs = pie()
      .sort(item => item.index)
      .value(item => item.number)
      .startAngle(0)
      .endAngle(endAngle)(data);

    const d = Slice.generator(arcs[index]);
    return <Path d={d} fill={data[index].fill} />;
  }
}
