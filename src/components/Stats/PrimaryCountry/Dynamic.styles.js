import styled from 'styled-components/native';

export const Container = styled.View`
  padding-top: 23px;
  padding-bottom: 14px;
  padding-horizontal: 20px;
`;

export const Content = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Today = styled.View``;

export const TodayCaption = styled.Text`
  font-size: 13px;
  line-height: 18px;
  color: ${(p) => p.theme.primaryTextColor};
`;

export const TodayNumber = styled.Text`
  margin-top: 1px;
  margin-bottom: 1px;
  font-weight: 500;
  font-size: 54px;
  line-height: 64px;
  color: ${(p) => p.theme.primaryTextColor};
`;

export const GraphContainer = styled.View`
  margin-top: 19px;
`;

export const GraphCaption = styled.Text`
  font-size: 13px;
  line-height: 18px;
  margin-bottom: 19px;
  color: ${(p) => p.theme.primaryTextColor};
`;

export const Yesterday = styled.View``;

export const YesterdayCaption = styled.Text`
  font-size: 13px;
  line-height: 18px;
  color: ${(p) => p.theme.secondaryTextColor};
`;

export const YesterdayNumber = styled.Text`
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  color: ${(p) => p.theme.secondaryTextColor};
`;
