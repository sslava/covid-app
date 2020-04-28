import React, {useMemo} from 'react';
import {useTheme} from 'styled-components/native';

import {formatNumber, t, formatDate} from '../../../common/locale';
import downIcon from '../../../assets/icons/arrow-down.png';

import BarChart from '../../common/charts/BarChart';

import {getLatestStats} from './latestStats';
import {lastN, composeGraph, sortBy, valueField} from './historyGraph';

import {
  Container,
  Content,
  Today,
  TodayCaption,
  TodayNumber,
  Yesterday,
  YesterdayCaption,
  TodayContent,
  YesterdayNumber,
  GraphContainer,
  GraphCaption,
  UpDown,
  Arrow,
} from './Dynamic.styles';

const deltaConfirmedGraph = composeGraph(
  valueField((h) => +h.delta_confirmed),
  sortBy(),
  lastN(14),
);

export const plusFormatter = (num) => `${num ? '+' : ''}${formatNumber(num)}`;

export default function Dynamic({country, history, animated, color}) {
  const theme = useTheme();
  const graph = useMemo(() => deltaConfirmedGraph(history), [history]);
  const [today, yesterday] = getLatestStats(history, country);

  return (
    <Container>
      <Content>
        <Today>
          <TodayCaption color={color}>
            {t('stats.country.todayCases', {date: formatDate(today.date)})}
          </TodayCaption>
          <TodayContent>
            <TodayNumber>{plusFormatter(today.value)}</TodayNumber>
            {yesterday && today.value !== yesterday.value && (
              <UpDown color={color}>
                <Arrow up={today.value > yesterday.value} source={downIcon} />
              </UpDown>
            )}
          </TodayContent>
        </Today>
        {graph && graph.length > 0 && (
          <GraphContainer>
            <GraphCaption color={color}>
              {t('stats.country.lastX', {days: graph.length})}
            </GraphCaption>
            <BarChart
              color={color || theme.secondaryTextColor}
              width={90}
              height={50}
              data={graph}
              animated={animated}
            />
          </GraphContainer>
        )}
      </Content>
      {yesterday && (
        <Yesterday color={color}>
          <YesterdayCaption color={color}>
            <YesterdayNumber>{plusFormatter(yesterday.value)}</YesterdayNumber>
            {t('stats.country.yesterday')}
          </YesterdayCaption>
        </Yesterday>
      )}
    </Container>
  );
}
