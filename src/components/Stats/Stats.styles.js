import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${(p) => p.theme.primaryBackground};
`;

export const WorldContainer = styled.View`
  padding-top: 30px;
  border-bottom-width: 10px;
  border-bottom-color: ${(p) => p.theme.borderLightColor};
`;

export const PrimaryContainer = styled.View`
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom-width: 10px;
  border-bottom-color: ${(p) => p.theme.borderLightColor};
`;

export const CountriesContainer = styled.View`
  padding-top: 20px;
  padding-bottom: 20px;
`;
