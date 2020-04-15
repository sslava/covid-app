import styled from 'styled-components/native';

import SecondaryNumber from '../../shared/SecondaryNumber';

export const WC = styled.View`
  position: relative;
  margin-bottom: 18px;
  padding-left: 17px;
`;

export const Circle = styled.View`
  position: absolute;
  top: 2px;
  width: 12px;
  height: 12px;
  border-radius: 6px;
  background-color: ${(p) => p.color};
`;

export const Title = styled.Text`
  font-size: 13px;
  line-height: 18px;
  font-weight: 600;
  color: ${(p) => p.theme.secondaryTextColor};
  text-transform: uppercase;
`;

export const Num = styled.Text`
  margin-top: 5px;
  font-weight: 600;
  font-size: 18px;
  line-height: 20px;
  color: ${(p) => p.theme.primaryTextColor};
`;

export const Today = styled(SecondaryNumber)`
  font-size: 13px;
  line-height: 20px;
  font-weight: 600;
  color: ${(p) => p.theme.deathsColor};
`;
