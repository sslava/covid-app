import React from 'react';
import styled from 'styled-components/native';

import {formatNumber} from '../../../common/locale';

const Num = styled.Text`
  line-height: 20px;
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
  width: ${(p) => (p.skipToday ? 75 : 140)}px;
`;
