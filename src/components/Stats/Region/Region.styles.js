import styled from 'styled-components/native';

import {Button, PrimaryButton} from '../../common/Button';

export const Container = styled.View`
  padding-vertical: 20px;
  border-bottom-width: 10px;
  border-bottom-color: ${(p) => p.theme.borderLightColor};
`;

export const DDIcon = styled.Image`
  margin-left: 9px;
  position: relative;
  top: 1px;
  width: 10px;
  height: 8px;
`;

export const Marker = styled.Image`
  width: 19px;
  height: 24px;
  margin-right: 7px;
`;

export const Content = styled.View`
  padding-horizontal: 20px;
  padding-top: 27px;
  min-height: 220px;
`;

export const Actions = styled.View`
  margin-top: 30px;
  flex-direction: row;
`;

export const ShareBtn = styled(Button)`
  flex: 1;
  margin-right: 10px;
`;

export const ListBtn = styled(PrimaryButton)`
  flex: 1;
  /* margin-left: 10px; */
`;
