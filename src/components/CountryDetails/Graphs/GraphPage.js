import React, {useMemo} from 'react';
import {findLatestPeak} from '../../shared/Stats/historyGraph';
import {formatNumber, formatDate} from '../../../common/locale';

import {Header} from '../Layout';
import {Page, Value, ValueTitle, ValueNumber, Values} from './GraphPage.styles';

import SimpleGraph from './SimpleGraph';

function graphWithPeak(items, getGraph) {
  if (!items) {
    return {graph: [], peak: null, peakIndex: null};
  }
  const graph = getGraph(items);
  const [peak, peakIndex] = findLatestPeak(graph);
  return {graph, peak, peakIndex};
}

export default function GraphPage({title, color, getGraph, history}) {
  const {graph, peak, peakIndex} = useMemo(
    () => graphWithPeak(history, getGraph),
    [history, getGraph],
  );
  const last = graph[graph.length - 1];
  return (
    <Page>
      <Header>{title}</Header>
      <SimpleGraph color={color} graph={graph} peakIndex={peakIndex} />
      <Values>
        <Value>
          <ValueTitle>Пик – {formatDate(peak.label)}</ValueTitle>
          <ValueNumber>{formatNumber(peak.value)}</ValueNumber>
        </Value>
        <Value>
          <ValueTitle>Последние сутки</ValueTitle>
          <ValueNumber>{formatNumber(last.value)}</ValueNumber>
        </Value>
      </Values>
    </Page>
  );
}
