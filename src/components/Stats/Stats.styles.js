import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';

export const WorldContainer = styled.View`
  margin-top: 20px;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: ${(p) => p.theme.borderLightColor};
`;

export const PrimaryContainer = styled.View`
  margin-top: 20px;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: ${(p) => p.theme.borderLightColor};
`;

export const CountriesContainer = styled.View`
  margin-top: 30px;
  margin-bottom: 20px;
`;
