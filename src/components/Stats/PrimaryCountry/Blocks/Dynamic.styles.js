import styled from 'styled-components/native';

export const Container = styled.View`
  padding-bottom: 14px;
`;

export const Content = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Today = styled.View``;

export const TodayCaption = styled.Text`
  font-size: 13px;
  font-weight: 500;
  line-height: 18px;
  color: ${(p) => p.color || p.theme.primaryTextColor};
`;

export const TodayContent = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const TodayNumber = styled.Text`
  margin-top: 1px;
  margin-bottom: 1px;
  font-weight: 500;
  font-size: 54px;
  line-height: 64px;
  color: ${(p) => p.color || p.theme.activeColor};
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
  font-weight: 500;
  line-height: 18px;
  margin-bottom: 19px;
  text-align: right;
  color: ${(p) => p.color || p.theme.primaryTextColor};
`;

export const Yesterday = styled.View`
  opacity: ${(p) => (p.color ? 0.7 : 1)};
`;

export const YesterdayCaption = styled.Text`
  font-size: 13px;
  font-weight: 500;
  line-height: 15px;
  color: ${(p) => p.color || p.theme.secondaryTextColor};
`;

export const YesterdayNumber = styled.Text`
  font-size: 18px;
  font-weight: 500;
  line-height: 26px;
  color: ${(p) => p.color || p.theme.secondaryTextColor};
`;
