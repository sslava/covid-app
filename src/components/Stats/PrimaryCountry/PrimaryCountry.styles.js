import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${(p) => p.theme.primaryBackground};
`;

export const Content = styled.View`
  padding-horizontal: 20px;
  padding-top: 23px;
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

export const Actions = styled.View`
  padding-top: 30px;
`;

export const UpdatedText = styled.Text`
  margin-top: 10px;
  padding-left: 18px;
  font-size: 11px;
  font-weight: 500;
  line-height: 18px;
  color: ${(p) => p.theme.secondaryTextColor};
`;
