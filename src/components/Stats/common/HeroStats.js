import React from 'react';
import styled from 'styled-components/native';

import {formatNumber, t} from '../../../common/locale';

import SecondaryNumber from '../../shared/SecondaryNumber';

const Container = styled.View`
  padding-left: 20px;
`;

const Num = styled.Text`
  font-size: 48px;
  line-height: 54px;
  font-weight: 500;
  color: ${(p) => p.theme.primaryTextColor};
`;

const Cases = styled.Text`
  margin-top: 3px;
  font-size: 13px;
  line-height: 18px;
  font-weight: 500;
  text-transform: uppercase;
  color: ${(p) => p.theme.secondaryTextColor};
`;

const Today = styled(SecondaryNumber)`
  margin-left: 10px;
  font-size: 18px;
  line-height: 54px;
  font-weight: 500;
  color: ${(p) => p.theme.activeColor};
`;

export default function HeroStats({number, today}) {
  return (
    <Container>
      <Num>
        {formatNumber(number)}
        <Today num={today} />
      </Num>
      <Cases>{t('stats.cases')}</Cases>
    </Container>
  );
}
