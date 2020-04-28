import React from 'react';
import {useTheme} from 'styled-components/native';

import {formatDate} from '../../../common/locale';

import LabeledBarChart from '../../common/charts/BarChart/LabeledBarChart';

import {Container, Dates} from './SimpleGraph.styles';

export default function SimpleGraph({graph, peakIndex}) {
  const theme = useTheme();
  const from = graph[0];
  const to = graph[graph.length - 1];
  return (
    <Container>
      <LabeledBarChart
        color={theme.activeColor}
        width={220}
        height={120}
        data={graph}
        peakIndex={peakIndex}
      />
      <Dates>
        {formatDate(from.label)} — {formatDate(to.label)}
      </Dates>
    </Container>
  );
}
