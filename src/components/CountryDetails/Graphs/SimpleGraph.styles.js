import styled from 'styled-components/native';

export const Container = styled.View`
  padding-top: 15px;
  padding-bottom: 20px;
  justify-content: center;
  align-items: center;
`;

export const Dates = styled.Text`
  padding-right: 10px;
  margin-top: 6px;
  font-size: 13px;
  line-height: 15px;
  text-align: center;
  color: ${(p) => p.theme.secondaryTextColor};
`;
