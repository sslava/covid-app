import React from 'react';

import styled from 'styled-components/native';
import {Text} from 'react-native';

import SecondaryNumber from '../../SecondaryNumber';

export const Container = styled.View`
  align-items: ${(p) => p.align || 'flex-start'};
`;

function SingleLineText({style, children}) {
  return (
    <Text style={style} numberOfLines={1}>
      {children}
    </Text>
  );
}

export const Caption = styled(SingleLineText)`
  font-size: 13px;
  font-weight: 500;
  line-height: 15px;
  color: ${(p) => p.color || p.todayColor || p.theme.primaryTextColor};
`;

export const Number = styled(SingleLineText)`
  font-size: 18px;
  line-height: 21px;
  font-weight: 500;
  color: ${(p) => p.color || p.theme.primaryTextColor};
`;

export const Today = styled(SecondaryNumber)`
  font-weight: 500;
  font-size: 13px;
  line-height: 26px;
  color: ${(p) => p.color || p.theme.primaryTextColor};
`;

export const LargeNumber = styled(Number)`
  font-size: 36px;
  line-height: 43px;
`;

export const LargeToday = styled(Today)`
  font-size: 21px;
`;
