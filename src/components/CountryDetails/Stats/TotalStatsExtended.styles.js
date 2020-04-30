import React from 'react';
import styled from 'styled-components/native';

import {formatNumber, t} from '../../../common/locale';
import HorizontalBar from '../../common/charts/HorizontalBar/HorizontalBar';
import globeIcon from '../../../assets/icons/globe-2.png';

import {
  Container,
  Caption,
  Number,
  Today,
} from '../../shared/Stats/TotalStats/StatsElements';

export const StatsContainer = styled.View`
  padding-bottom: 20px;
`;

export const Bar = styled(HorizontalBar)`
  padding-vertical: 7px;
`;

const XlNumber = styled(Number)`
  font-weight: 500;
  font-size: 48px;
  line-height: 58px;
`;

const Position = styled.View`
  margin-top: 3px;
  flex-direction: row;
  align-items: center;
`;

const PositionIcon = styled.Image`
  width: 12px;
  height: 12px;
  margin-right: 2px;
  tint-color: ${(p) => p.theme.secondaryTextColor};
`;

const Place = styled.Text`
  font-weight: 500;
  font-size: 13px;
  line-height: 15px;
  color: ${(p) => p.theme.secondaryTextColor};
`;

export function StatsNum({number, caption, pos, today, align, todayColor}) {
  return (
    <Container align={align}>
      <Caption todayColor={todayColor}>{caption}</Caption>
      <Number>
        {formatNumber(+number)}
        <Today num={+today} color={todayColor} />
      </Number>
      {!!pos && (
        <Position>
          <PositionIcon source={globeIcon} />
          <Place>#{pos}</Place>
        </Position>
      )}
    </Container>
  );
}

const XlContent = styled.View`
  flex-direction: row;
  align-items: flex-start;
`;

const PositionXL = styled(Position)`
  margin-top: 10px;
  margin-left: 8px;
`;

export function StatsNumXl({caption, number, pos}) {
  return (
    <Container>
      <Caption>{caption}</Caption>
      <XlContent>
        <XlNumber>{formatNumber(+number)}</XlNumber>
        {!!pos && (
          <PositionXL>
            <PositionIcon source={globeIcon} />
            <Place>
              #{pos} {t('country.all.rank')}
            </Place>
          </PositionXL>
        )}
      </XlContent>
    </Container>
  );
}
