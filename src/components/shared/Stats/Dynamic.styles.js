import styled from 'styled-components/native';

export const Container = styled.View`
  padding-bottom: 15px;
`;

export const Content = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Today = styled.View`
  min-height: 80px;
`;

export const TodayCaption = styled.Text`
  font-size: 13px;
  font-weight: 500;
  line-height: 15px;
  color: ${(p) => p.color || p.theme.primaryTextColor};
`;

export const TodayContent = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const TodayNumber = styled.Text`
  margin-top: 7px;
  font-size: 48px;
  min-height: 58px;
  line-height: 58px;
  font-weight: 500;
  color: ${(p) => p.color || p.theme.activeColor};
`;

export const UpDown = styled.View`
  width: 16px;
  height: 16px;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  margin-right: 5px;
  background-color: ${(p) => p.color || p.theme.secondaryBackground};
`;

export const Arrow = styled.Image`
  width: 10px;
  height: 10px;
  transform: rotate(${(p) => (p.up ? 180 : 0)}deg);
`;

export const GraphContainer = styled.View`
  align-items: flex-end;
`;

export const GraphCaption = styled.Text`
  font-size: 13px;
  font-weight: 500;
  line-height: 15px;
  margin-bottom: 7px;
  text-align: right;
  color: ${(p) => p.color || p.theme.primaryTextColor};
`;

export const Yesterday = styled.View`
  margin-top: 5px;
  min-height: 21px;
  opacity: ${(p) => (p.color ? 0.7 : 1)};
`;

export const YesterdayCaption = styled.Text`
  font-size: 15px;
  font-weight: 500;
  line-height: 21px;
  color: ${(p) => p.color || p.theme.secondaryTextColor};
`;

export const YesterdayNumber = styled.Text`
  font-size: 18px;
`;
