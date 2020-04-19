import React, {useMemo} from 'react';
import {useTheme} from 'styled-components/native';

import {formatNumber, t} from '../../../../common/locale';
import {getDynamicStats} from './model';

import BarChart from '../../../shared/BarChart';
import upIcon from '../assets/up.png';
import downIcon from '../assets/down.png';

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
} from './Dynamic.styles';

export const plusFormatter = (num) => `${num ? '+' : ''}${formatNumber(num)}`;

export default function Dynamic({country, history, animated, color}) {
  const theme = useTheme();

  const {today, yesterday, graph} = useMemo(
    () => getDynamicStats(history, country),
    [history, country],
  );

  return (
    <Container>
      <Content>
        <Today>
          <TodayCaption color={color}>
            {t('stats.country.todayCases', {date: today.date})}
          </TodayCaption>
          <TodayContent>
            <TodayNumber color={color}>
              {plusFormatter(today.value)}
            </TodayNumber>
            {yesterday && today.value !== yesterday.value && (
              <UpDown
                source={today.value > yesterday.value ? upIcon : downIcon}
              />
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
            {t('stats.country.yesterday', {date: yesterday.date})}
          </YesterdayCaption>
          <YesterdayNumber color={color}>
            {plusFormatter(yesterday.value)}
          </YesterdayNumber>
        </Yesterday>
      )}
    </Container>
  );
}
