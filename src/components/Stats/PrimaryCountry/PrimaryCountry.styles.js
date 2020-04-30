import styled from 'styled-components/native';

import {Button} from '../../common/Button';

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

export const DDIcon = styled.Image`
  margin-left: 9px;
  position: relative;
  top: 1px;
  width: 10px;
  height: 8px;
`;

export const Actions = styled.View`
  margin-top: 30px;
  flex-direction: row;
`;

export const ShareBtn = styled(Button)`
  flex: 1;
  margin-right: 10px;
`;

export const CountryBtn = styled(Button)`
  flex: 1;
  margin-left: 10px;
`;
