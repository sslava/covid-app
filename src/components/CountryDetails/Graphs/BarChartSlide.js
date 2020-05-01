import React, {useMemo} from 'react';
import {Dimensions} from 'react-native';
import {findLatestPeak} from '../../shared/historyModel';
import {formatNumber, formatDate, t} from '../../../common/locale';
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

const {width} = Dimensions.get('window');

export default function BarChartSlide({
  title,
  color,
  getChartData,
  history,
  hideTotal,
}) {
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
          width={width - 40}
          height={150}
          data={chart}
          peakIndex={peakIndex}
        />
        <Dates>
          {formatDate(first.label)} — {formatDate(last.label)}
        </Dates>
      </ChartContainer>
      {!hideTotal && (
        <Values>
          <Value>
            <ValueTitle>
              {t('country.slides.legend.peak', {date: formatDate(peak.label)})}
            </ValueTitle>
            <ValueNumber>{formatNumber(peak.value)}</ValueNumber>
          </Value>
          <Value>
            <ValueTitle>{t('country.slides.legend.lastday')}</ValueTitle>
            <ValueNumber>{formatNumber(last.value)}</ValueNumber>
          </Value>
        </Values>
      )}
    </Slide>
  );
}
