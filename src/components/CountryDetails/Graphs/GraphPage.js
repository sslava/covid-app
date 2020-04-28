import React, {useMemo} from 'react';
import {useTheme} from 'styled-components/native';

import BarChart from '../../common/charts/BarChart';
import {findLatestPeak} from '../../shared/Stats/historyGraph';
import {formatNumber, formatDate} from '../../../common/locale';

import {Header} from '../Layout';
import {
  Page,
  Value,
  ValueTitle,
  ValueNumber,
  Values,
  Graph,
} from './GraphPage.styles';

function graphWithPeak(items, getGraph) {
  if (!items) {
    return {graph: [], peak: null, peakIndex: null};
  }
  const graph = getGraph(items);
  const [peak, peakIndex] = findLatestPeak(graph);
  return {graph, peak, peakIndex};
}

export default function GraphPage({title, getGraph, history}) {
  const theme = useTheme();
  const {graph, peak, peakIndex} = useMemo(
    () => graphWithPeak(history, getGraph),
    [history, getGraph],
  );
  return (
    <Page>
      <Header>{title}</Header>
      <Graph>
        <BarChart
          color={theme.activeColor}
          width={200}
          height={100}
          data={graph}
        />
      </Graph>
      <Values>
        <Value>
          <ValueTitle>Пик – {formatDate(peak.label)}</ValueTitle>
          <ValueNumber>{formatNumber(peak.value)}</ValueNumber>
        </Value>
        <Value>
          <ValueTitle>Последние сутки</ValueTitle>
          <ValueNumber>5 236</ValueNumber>
        </Value>
      </Values>
    </Page>
  );
}
