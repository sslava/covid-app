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

const data = [
  {value: 20, label: '2'},
  {value: 400, label: '3'},
  {value: 500, label: '6'},
  {value: 500, label: '4'},
  {value: 500, label: '4'},
  {value: 500, label: '4'},
  {value: 500, label: '4'},
  {value: 800, label: '6'},
  {value: 50, label: '4'},
  {value: 500, label: '4'},
  {value: 500, label: '4'},
  {value: 500, label: '4'},
  {value: 20, label: '4'},
  {value: 500, label: '4'},
  {value: 750, label: '5'},
];

export default function Dynamic({country}) {
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
        <GraphContainer>
          <GraphCaption>
            {t('stats.country.lastX', {days: data.length})}
          </GraphCaption>
          <BarChart
            color={theme.secondaryTextColor}
            width={100}
            height={50}
            data={data}
          />
        </GraphContainer>
      </Content>
      <Yesterday>
        <YesterdayCaption>{t('stats.country.yesterday')}</YesterdayCaption>
        <YesterdayNumber>+{formatNumber(prev)}</YesterdayNumber>
      </Yesterday>
    </Container>
  );
}
