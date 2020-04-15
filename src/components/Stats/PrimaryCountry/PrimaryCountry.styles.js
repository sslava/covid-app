import styled from 'styled-components/native';

export const Container = styled.View`
  padding-bottom: 30px;
  background-color: ${(p) => p.theme.primaryBackground};
`;

export const Legend = styled.View`
  margin-top: 30px;
  padding-horizontal: 20px;
`;

export const Bar = styled.View`
  padding-horizontal: 20px;
`;

export const UpdatedText = styled.Text`
  margin-top: 20px;
  padding-left: 20px;
  font-family: 'Ubuntu';
  font-size: 11px;
  font-weight: 500;
  line-height: 18px;
  color: ${(p) => p.theme.secondaryTextColor};
`;

export const Icon = styled.Image`
  height: 26px;
  width: 26px;
  border-radius: 12px;
  margin-right: 10px;
  resize-mode: cover;
  border-color: ${(p) => p.theme.secondaryBackground};
  border-width: 1px;
`;

export const ChangeIcon = styled.Image`
  margin-left: 9px;
  position: relative;
  top: 1px;
  width: 10px;
  height: 8px;
`;
