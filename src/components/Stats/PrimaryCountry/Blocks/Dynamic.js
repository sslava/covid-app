import React from 'react';
import {useTheme} from 'styled-components/native';

import {formatNumber, t, formatDate} from '../../../../common/locale';

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

export default function Dynamic({country, data, animated, color}) {
  const theme = useTheme();

  const prev = 3000;
  return (
    <Container>
      <Content>
        <Today>
          <TodayCaption color={color}>
            {t('stats.country.todayCases', {date: formatDate(country.updated)})}
          </TodayCaption>
          <TodayContent>
            <TodayNumber color={color}>
              +{formatNumber(country.total_new)}
            </TodayNumber>
            <UpDown source={+country.total_new > prev ? upIcon : downIcon} />
          </TodayContent>
        </Today>
        {data && (
          <GraphContainer>
            <GraphCaption color={color}>
              {t('stats.country.lastX', {days: data.length})}
            </GraphCaption>
            <BarChart
              color={color || theme.secondaryTextColor}
              width={90}
              height={50}
              data={data}
              animated={animated}
            />
          </GraphContainer>
        )}
      </Content>
      <Yesterday color={color}>
        <YesterdayCaption color={color}>
          {t('stats.country.yesterday')}
        </YesterdayCaption>
        <YesterdayNumber color={color}>+{formatNumber(prev)}</YesterdayNumber>
      </Yesterday>
    </Container>
  );
}
