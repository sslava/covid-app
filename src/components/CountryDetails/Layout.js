import React from 'react';
import styled from 'styled-components/native';

export const ContentBlock = styled.View`
  background-color: ${(p) => p.theme.primaryBackground};
  margin-top: 12px;
  padding-horizontal: 20px;
  padding-vertical: 20px;
`;

const HeaderContainer = styled.View`
  padding-bottom: 18px;
`;

const HeaderTitle = styled.Text`
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  color: ${(p) => p.theme.primaryTextColor};
`;

const HeaderSubtitle = styled.Text`
  color: ${(p) => p.theme.secondaryTextColor};
`;

export function Header({children, subtitle, style}) {
  return (
    <HeaderContainer style={style}>
      <HeaderTitle>
        {children}
        {subtitle && <HeaderSubtitle> {subtitle}</HeaderSubtitle>}
      </HeaderTitle>
    </HeaderContainer>
  );
}
