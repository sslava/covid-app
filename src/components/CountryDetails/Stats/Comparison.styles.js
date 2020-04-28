import styled from 'styled-components/native';

export const Container = styled.View`
  padding-top: 20px;
  border-top-width: 1px;
  border-top-color: ${(p) => p.color || p.theme.borderLightColor};
`;

export const Headline = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
`;

export const Vs = styled.Text`
  font-weight: bold;
  font-size: 13px;
  line-height: 15px;
  text-align: center;
  flex: 1;
  color: ${(p) => p.theme.primaryTextColor};
`;

export const CountryIcon = styled.Image`
  height: 24px;
  width: 24px;
  border-radius: 12px;
`;

export const WorldIcon = styled.Image`
  height: 24px;
  width: 24px;
  border-radius: 12px;
`;

export const Metrica = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

export const MetricaName = styled.Text`
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  text-align: center;
  flex: 1;
  color: ${(p) => p.theme.primaryTextColor};
`;

export const Percent = styled.Text`
  font-weight: bold;
  font-size: 15px;
  line-height: 20px;
  color: ${(p) => p.color};
  text-align: ${(p) => (p.right ? 'right' : 'left')}
  width: 70px;
`;
