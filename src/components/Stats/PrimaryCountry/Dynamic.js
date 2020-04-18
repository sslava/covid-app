import React from 'react';
import {useTheme} from 'styled-components/native';

import {formatNumber, t, formatDate} from '../../../common/locale';

import BarChart from '../../shared/BarChart';

import upIcon from './up.png';
import downIcon from './down.png';

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

export default function Dynamic({country, data}) {
  const theme = useTheme();

  const prev = 3000;
  return (
    <Container>
      <Content>
        <Today>
          <TodayCaption>
            {t('stats.country.todayCases', {date: formatDate(country.updated)})}
          </TodayCaption>
          <TodayContent>
            <TodayNumber>+{formatNumber(country.total_new)}</TodayNumber>
            <UpDown source={+country.total_new > prev ? upIcon : downIcon} />
          </TodayContent>
        </Today>
        {data && (
          <GraphContainer>
            <GraphCaption>
              {t('stats.country.lastX', {days: data.length})}
            </GraphCaption>
            <BarChart
              color={theme.secondaryTextColor}
              width={90}
              height={50}
              data={data}
            />
          </GraphContainer>
        )}
      </Content>
      <Yesterday>
        <YesterdayCaption>{t('stats.country.yesterday')}</YesterdayCaption>
        <YesterdayNumber>+{formatNumber(prev)}</YesterdayNumber>
      </Yesterday>
    </Container>
  );
}
