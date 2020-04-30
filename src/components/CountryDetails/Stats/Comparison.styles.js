import styled from 'styled-components/native';

export const Container = styled.View`
  padding-top: 15px;
  border-top-width: 1px;
  border-top-color: ${(p) => p.theme.borderLightColor};
`;

export const Headline = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;
`;

export const Country = styled.TouchableOpacity`
  align-items: ${(p) => p.align || 'flex-start'};
`;

export const CountryIcon = styled.Image`
  height: 24px;
  width: 24px;
  border-radius: 12px;
`;

export const CountryName = styled.Text`
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  color: ${(p) => (p.link ? p.theme.actionColor : p.theme.primaryTextColor)};
  margin-top: 5px;
`;

export const Metrica = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

export const MetricaName = styled.Text`
  font-weight: 500;
  font-size: 13px;
  line-height: 15px;
  text-align: center;
  flex: 1;
  color: ${(p) => p.theme.primaryTextColor};
`;

export const Percent = styled.Text`
  font-weight: bold;
  width: 75px;
  font-size: 15px;
  line-height: 18px;
  text-align: ${(p) => (p.right ? 'right' : 'left')};
  color: ${(p) => p.theme.primaryTextColor};
`;
