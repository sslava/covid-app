import styled from 'styled-components/native';

export const Container = styled.View`
  position: relative;
  margin-bottom: 10px;
  padding-vertical: 15px;
  padding-right: 15px;
  padding-left: 70px;
  border-radius: 5px;
  background-color: ${(p) => p.theme.recommendationBackground};
`;

export const Icon = styled.Image`
  position: absolute;
  left: 15px;
  top: 15px;
  width: 40px;
  height: 40px;
`;

export const Title = styled.Text`
  font-size: 15px;
  line-height: 20px;
  font-weight: bold;
  color: ${(p) => p.theme.primaryTextColor};
`;

export const Desc = styled.Text`
  margin-top: 4px;
  font-size: 13px;
  line-height: 18px;
  color: ${(p) => p.theme.secondaryTextColor};
`;
