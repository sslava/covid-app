import styled from 'styled-components/native';

import SecondaryNumber from '../SecondaryNumber';

export const Container = styled.View`
  margin-bottom: 20px;
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
  font-family: 'Ubuntu';
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  color: ${(p) => p.theme.primaryTextColor};
`;

export const Today = styled(SecondaryNumber)`
  margin-left: 3px;
  font-size: 13px;
  line-height: 24px;
  font-weight: 600;
  color: ${(p) => p.theme.deathsColor};
`;
