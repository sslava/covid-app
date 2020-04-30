import React, {useMemo} from 'react';
import {Dimensions} from 'react-native';

import {useTheme} from 'styled-components';

import {formatDate, t, formatNumber} from '../../../common/locale';

import StackedBarChart from '../../common/charts/BarChart/StackedBarChart';

import {Header} from '../Layout';
import {totalCases} from './model';

import {
  Slide,
  ChartContainer,
  Dates,
  Legend,
  LegendItem,
  LegendColor,
  LegendCaption,
} from './Slide';

const {width} = Dimensions.get('window');

const categories = ['deaths', 'active', 'recovered'];
const dataMax = (data) => Math.max(...data.map((d) => d.total));

export default function TotalsSlide({title, color, history}) {
  const theme = useTheme();
  const data = useMemo(() => totalCases(history), [history]);
  const colors = useMemo(
    () => ({
      active: theme.activeColor,
      recovered: theme.recoveredColor,
      deaths: theme.deathsColor,
    }),
    [theme],
  );
  const last = data[data.length - 1];
  return (
    <Slide>
      <Header>{title}</Header>
      <ChartContainer>
        <StackedBarChart
          data={data}
          colors={colors}
          width={width - 40}
          delta={0.4}
          height={150}
          maxFn={dataMax}
          categories={categories}
          label={formatNumber(last.total)}
          labelColor={theme.primaryTextColor}
        />
        <Dates>
          {formatDate(data[0].key)} — {formatDate(last.key)}
        </Dates>
      </ChartContainer>
      <Legend>
        <LegendItem>
          <LegendColor color={theme.recoveredColor} />
          <LegendCaption>{t('stats.recovered')}</LegendCaption>
        </LegendItem>
        <LegendItem>
          <LegendColor color={theme.activeColor} />
          <LegendCaption>{t('stats.active')}</LegendCaption>
        </LegendItem>
        <LegendItem>
          <LegendColor color={theme.deathsColor} />
          <LegendCaption>{t('stats.deaths')}</LegendCaption>
        </LegendItem>
      </Legend>
    </Slide>
  );
}
