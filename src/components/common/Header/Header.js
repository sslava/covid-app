import React from 'react';
import styled from 'styled-components/native';

import backImage from '../../../assets/icons/back_white.png';
import closeImage from '../../../assets/icons/close.png';

export const Header = styled.View`
  height: 44px;
  flex-direction: row;
  padding-horizontal: 20px;
  justify-content: space-between;
  align-items: center;
  background-color: ${(p) => p.theme.primaryBackground};
`;

export const HeaderSpan = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const HeaderTitle = styled.Text`
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 20px;
  line-height: 24px;
  font-weight: bold;
  color: ${(p) => p.theme.primaryTextColor};
`;

const Img = styled.Image`
  width: 24px;
  height: 24px;
  tint-color: ${(p) => p.theme.secondaryTextColor};
`;

const ImgLeft = styled(Img)`
  margin-left: 24px;
`;

export function HeaderBack() {
  return <ImgLeft source={backImage} width={24} height={24} />;
}

export function HeaderCloseImg() {
  return <ImgLeft source={closeImage} width={24} height={24} />;
}

const CloseBtn = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  padding-horizontal: 2px;
  padding-vertical: 2px;
`;

export function HeaderClose(props) {
  return (
    <CloseBtn {...props}>
      <Img source={closeImage} width={24} height={24} />
    </CloseBtn>
  );
}
