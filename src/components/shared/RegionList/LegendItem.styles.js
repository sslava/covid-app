import React from 'react';
import styled from 'styled-components/native';

import SecondaryNumber from '../SecondaryNumber';

import {formatNumber} from '../../../common/locale';

const Num = styled.Text`
  line-height: 18px;
  font-size: ${(p) => (p.large ? 18 : 15)}px;
  font-weight: ${(p) => (p.large ? 600 : 'bold')};
  color: ${(p) => p.theme.primaryTextColor};
`;

export function PrimaryNumber({value, ...rest}) {
  return <Num {...rest}>{formatNumber(value)}</Num>;
}

export const Left = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Right = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: 10px;
  width: ${(p) => (p.skipToday ? 80 : 148)}px;
`;

export const Container = styled.View`
  margin-bottom: 12px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Color = styled.View`
  width: 12px;
  height: 12px;
  border-radius: 6px;
  margin-right: 5px;
  background-color: ${(p) => p.color};
`;

export const Title = styled.Text`
  line-height: 18px;
  font-size: 15px;
  font-weight: 500;
  text-transform: capitalize;
  color: ${(p) => p.theme.primaryTextColor};
`;

export const Today = styled(SecondaryNumber)`
  margin-left: 3px;
  font-size: 13px;
  line-height: 24px;
  font-weight: 600;
  color: ${(p) => p.theme.deathsColor};
`;
