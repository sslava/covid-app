import React from 'react';

import {formatDate} from '../../../common/locale';

import LabeledBarChart from '../../common/charts/BarChart/LabeledBarChart';

import {Container, Dates} from './SimpleGraph.styles';

export default function SimpleGraph({graph, color, peakIndex}) {
  const from = graph[0];
  const to = graph[graph.length - 1];
  return (
    <Container>
      <LabeledBarChart
        color={color}
        width={350}
        height={150}
        data={graph}
        peakIndex={peakIndex}
      />
      <Dates>
        {formatDate(from.label)} — {formatDate(to.label)}
      </Dates>
    </Container>
  );
}
