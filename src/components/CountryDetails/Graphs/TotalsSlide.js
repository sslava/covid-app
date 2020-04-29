import React, {useMemo} from 'react';
import {useTheme} from 'styled-components';

import {formatDate, t} from '../../../common/locale';

import StackedBarChart from '../../common/charts/BarChart/StackedBarChart';

import {Header} from '../Layout';
import {
  composeStackedBarChart,
  sortBy,
  lastN,
} from '../../shared/Stats/historyGraph';

import {
  Slide,
  ChartContainer,
  Dates,
  Legend,
  LegendItem,
  LegendColor,
  LegendCaption,
} from './Slide';

const categories = ['deaths', 'active', 'recovered'];

const dataMax = (data) => Math.max(...data.map((d) => d.total));

const historyMapper = (data) =>
  data.map((d) => ({
    active: +d.total_active,
    recovered: +d.total_recovered,
    deaths: +d.total_deaths,
    total: +d.total_cases,
    key: d.updated_at,
  }));

const getTotals = composeStackedBarChart(historyMapper, sortBy(), lastN(40));

export default function TotalsSlide({title, color, history}) {
  const theme = useTheme();
  const data = useMemo(() => getTotals(history), [history]);
  const colors = useMemo(
    () => ({
      active: theme.activeColor,
      recovered: theme.recoveredColor,
      deaths: theme.deathsColor,
    }),
    [theme],
  );
  return (
    <Slide>
      <Header>{title}</Header>
      <ChartContainer>
        <StackedBarChart
          data={data}
          colors={colors}
          width={350}
          delta={0.3}
          height={150}
          maxFn={dataMax}
          categories={categories}
        />
        <Dates>
          {formatDate(data[0].key)} — {formatDate(data[data.length - 1].key)}
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
