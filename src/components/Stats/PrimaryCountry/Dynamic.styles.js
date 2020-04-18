import styled from 'styled-components/native';

export const Container = styled.View`
  padding-top: 23px;
  padding-bottom: 14px;
  padding-horizontal: 20px;
`;

export const Content = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Today = styled.View``;

export const TodayCaption = styled.Text`
  font-size: 13px;
  line-height: 18px;
  color: ${(p) => p.theme.primaryTextColor};
`;
export const TodayContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TodayNumber = styled.Text`
  margin-top: 1px;
  margin-bottom: 1px;
  font-weight: 500;
  font-size: 54px;
  line-height: 64px;
  color: ${(p) => p.theme.primaryTextColor};
`;

export const UpDown = styled.Image`
  width: 16px;
  height: 16px;
  margin-left: 10px;
  margin-right: 5px;
`;

export const GraphContainer = styled.View``;

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
