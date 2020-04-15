import React from 'react';
import styled from 'styled-components/native';

import backImage from '../../../assets/icons/back_white.png';
import closeImage from '../../../assets/icons/close.png';

const StyledImage = styled.Image`
  margin-left: 24px;
  width: 24px;
  height: 24px;
  tint-color: ${(p) => p.theme.secondaryTextColor};
`;

export function HeaderBack() {
  return <StyledImage source={backImage} width={24} height={24} />;
}

export function HeaderClose() {
  return <StyledImage source={closeImage} width={24} height={24} />;
}
