import React from 'react';
import {useTheme} from 'styled-components/native';

import {formatNumber} from '../../../common/locale';

import BarChart from '../../shared/BarChart';

import {
  Container,
  Content,
  Today,
  TodayCaption,
  TodayNumber,
  Yesterday,
  YesterdayCaption,
  YesterdayNumber,
  GraphContainer,
  GraphCaption,
} from './Dynamic.styles';

const data = [
  {value: 300, label: '2'},
  {value: 400, label: '3'},
  {value: 800, label: '6'},
  {value: 500, label: '4'},
  {value: 750, label: '5'},
  {value: 900, label: '7'},
  {value: 1000, label: '1'},
];

export default function Dynamic({country}) {
  const theme = useTheme();
  return (
    <Container>
      <Content>
        <Today>
          <TodayCaption>
            Выявлено новых случаев{'\n'}COVID-19 за сутки
          </TodayCaption>
          <TodayNumber>+{formatNumber(country.total_new)}</TodayNumber>
        </Today>
        <GraphContainer>
          <GraphCaption>{data.length} дней</GraphCaption>
          <BarChart
            color={theme.secondaryTextColor}
            width={70}
            height={50}
            data={data}
          />
        </GraphContainer>
      </Content>
      <Yesterday>
        <YesterdayCaption>В предыдущий день</YesterdayCaption>
        <YesterdayNumber>
          +{formatNumber(country.previus || 3000)}
        </YesterdayNumber>
      </Yesterday>
    </Container>
  );
}
