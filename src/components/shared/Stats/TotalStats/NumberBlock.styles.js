import styled from 'styled-components/native';

import SecondaryNumber from '../../SecondaryNumber';

export const ContainerElem = styled.View`
  align-items: ${(p) => p.align};
`;

export const CaptionElem = styled.Text`
  font-size: 13px;
  font-weight: 500;
  line-height: 15px;
  color: ${(p) => p.color || p.theme.primaryTextColor};
`;

export const NumberElem = styled.Text`
  font-size: ${(p) => (p.large ? 36 : 18)}px;
  line-height: ${(p) => (p.large ? 43 : 21)}px;
  font-weight: 500;
  color: ${(p) => p.color || p.theme.primaryTextColor};
`;

export const TodayElem = styled(SecondaryNumber)`
  font-weight: 500;
  font-size: ${(p) => (p.large ? 21 : 13)}px;
  line-height: 26px;
  color: ${(p) => p.color || p.theme.primaryTextColor};
`;
