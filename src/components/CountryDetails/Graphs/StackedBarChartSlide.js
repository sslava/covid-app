import React, {useMemo} from 'react';

import {formatDate} from '../../../common/locale';

import StackedBarChart from '../../common/charts/BarChart/StackedBarChart';

import {Header} from '../Layout';
import {Slide, ChartContainer, Dates} from './Slide';
import {
  composeStackedBarChart,
  sortBy,
  lastN,
} from '../../shared/Stats/historyGraph';

const categories = ['deaths', 'active', 'recovered'];
const colors = {
  active: '#FF9500',
  recovered: '#34C759',
  deaths: '#FF3B30',
};

const dataMax = (data) => Math.max(...data.map((d) => d.total));

const mapper = (data) =>
  data.map((d) => ({
    active: +d.total_active,
    recovered: +d.total_recovered,
    deaths: +d.total_deaths,
    total: +d.total_cases,
    key: d.updated_at,
  }));

const getData = composeStackedBarChart(mapper, sortBy(), lastN(40));

export default function StackedBarChartSlide({title, color, history}) {
  const data = useMemo(() => getData(history), [history]);
  const first = data[0];
  const last = data[data.length - 1];
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
          {formatDate(first.key)} — {formatDate(last.key)}
        </Dates>
      </ChartContainer>
    </Slide>
  );
}
