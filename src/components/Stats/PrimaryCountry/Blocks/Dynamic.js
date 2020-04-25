import React, {useMemo} from 'react';
import {useTheme} from 'styled-components/native';

import {formatNumber, t} from '../../../../common/locale';
import downIcon from '../../../../assets/icons/arrow-down.png';

import {getGraphData, getLastStats, lastX} from './model';

import BarChart from '../../../common/charts/BarChart';

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

export const plusFormatter = (num) => `${num ? '+' : ''}${formatNumber(num)}`;

export default function Dynamic({country, history, animated, color}) {
  const theme = useTheme();

  const graph = useMemo(() => getGraphData(lastX(history, 14)), [history]);
  const [today, yesterday] = getLastStats(history, country);

  return (
    <Container>
      <Content>
        <Today>
          <TodayCaption color={color}>
            {t('stats.country.todayCases', {date: today.date})}
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
