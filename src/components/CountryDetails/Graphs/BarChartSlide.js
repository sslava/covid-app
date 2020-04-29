import React, {useMemo} from 'react';
import {findLatestPeak} from '../../shared/Stats/historyGraph';
import {formatNumber, formatDate} from '../../../common/locale';
import LabeledBarChart from '../../common/charts/BarChart/LabeledBarChart';

import {Header} from '../Layout';

import {
  Slide,
  Values,
  Value,
  ValueTitle,
  ValueNumber,
  ChartContainer,
  Dates,
} from './Slide';

export default function BarChartSlide({title, color, getChartData, history}) {
  const {chart, peak, peakIndex} = useMemo(() => {
    const data = getChartData(history);
    const [p, i] = findLatestPeak(data);
    return {chart: data, peak: p, peakIndex: i};
  }, [history, getChartData]);

  const first = chart[0];
  const last = chart[chart.length - 1];

  return (
    <Slide>
      <Header>{title}</Header>
      <ChartContainer>
        <LabeledBarChart
          color={color}
          width={350}
          height={150}
          data={chart}
          peakIndex={peakIndex}
        />
        <Dates>
          {formatDate(first.label)} — {formatDate(last.label)}
        </Dates>
      </ChartContainer>
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
    </Slide>
  );
}
