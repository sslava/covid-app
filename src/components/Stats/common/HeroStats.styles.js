import styled from 'styled-components/native';

import SecondaryNumber from '../../shared/SecondaryNumber';

export const Container = styled.View`
  padding-left: 20px;
`;

export const Num = styled.Text`
  font-size: 48px;
  line-height: 54px;
  font-weight: 500;
  color: ${(p) => p.theme.primaryTextColor};
`;

export const Cases = styled.Text`
  margin-top: 3px;
  font-size: 13px;
  line-height: 18px;
  font-weight: 500;
  text-transform: uppercase;
  color: ${(p) => p.theme.secondaryTextColor};
`;

export const Today = styled(SecondaryNumber)`
  margin-left: 10px;
  font-size: 18px;
  line-height: 54px;
  font-weight: 500;
  color: ${(p) => p.theme.activeColor};
`;
