import styled from 'styled-components/native';

export const Container = styled.View`
  padding-bottom: 30px;
`;

export const Stats = styled.View`
  margin-top: 30px;
  padding-left: 20px;
  flex-direction: row;
`;

export const Counters = styled.View`
  margin-left: 20px;
`;

export const WorldIcon = styled.Image`
  width: 24px;
  height: 24px;
  margin-right: 10px;
`;

export const UpdatedText = styled.Text`
  margin-top: 12px;
  padding-left: 20px;
  font-size: 11px;
  font-weight: 500;
  line-height: 18px;
  color: ${(p) => p.theme.secondaryTextColor};
`;
