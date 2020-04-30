import React, {useMemo} from 'react';
import {useTheme} from 'styled-components/native';

import {formatNumber, t, formatDate} from '../../../common/locale';
import downIcon from '../../../assets/icons/arrow-down.png';

import BarChart from '../../common/charts/BarChart/BarChart';

import {
  getLatestStats,
  lastN,
  composeBarChart,
  mergeTodayStats,
  valueField,
} from '../historyModel';

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

const deltaConfirmedGraph = composeBarChart(
  valueField((h) => +h.delta_confirmed),
  mergeTodayStats,
  lastN(14),
);

export const plusFormatter = (num) => `${num ? '+' : ''}${formatNumber(num)}`;

const createSetFill = (length, fill) => (_, index) =>
  index === length - 1 ? {fill} : {};

export default function Dynamic({country, history, animated, color}) {
  const theme = useTheme();
  const chart = useMemo(() => deltaConfirmedGraph(history, country), [
    history,
    country,
  ]);

  const setFill = useMemo(
    () => createSetFill(chart.length, theme.activeColor),
    [chart.length, theme.activeColor],
  );

  const [today, yesterday] = getLatestStats(history, country);

  return (
    <Container>
      <Content>
        <Today>
          <TodayCaption color={color}>
            {t('stats.country.todayCases', {date: formatDate(today.label)})}
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
        {chart && chart.length > 0 && (
          <GraphContainer>
            <GraphCaption color={color}>
              {t('stats.country.lastX', {days: chart.length})}
            </GraphCaption>
            <BarChart
              color={color || theme.secondaryTextColor}
              width={90}
              height={50}
              data={chart}
              padding={0.5}
              getItemProps={setFill}
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
