import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${(p) => p.theme.primaryBackground};
`;

export const WorldContainer = styled.View`
  padding-top: 18px;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: ${(p) => p.theme.borderLightColor};
`;

export const PrimaryContainer = styled.View`
  padding-top: 16px;
  padding-bottom: 30px;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: ${(p) => p.theme.borderLightColor};
`;

export const CountriesContainer = styled.View`
  padding-top: 30px;
  padding-bottom: 20px;
`;
