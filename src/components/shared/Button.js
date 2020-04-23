import React from 'react';
import styled from 'styled-components/native';

const Btn = styled.TouchableOpacity`
  border-radius: 5px;
  height: 44px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${(p) => p.theme.secondaryBackground};
`;

const Icon = styled.Image`
  tint-color: ${(p) => p.theme.primaryTextColor};
  width: 16px;
  height: 22px;
  top: -2px;
  margin-right: 10px;
`;

const Caption = styled.Text`
  font-size: 16px;
  line-height: 20px;
  font-weight: 500;
  color: ${(p) => p.theme.primaryTextColor};
`;

const PBtn = styled(Btn)`
  background-color: ${(p) => p.theme.actionColor};
`;

const PIcon = styled(Icon)`
  color: white;
`;

const PCaption = styled(Caption)`
  color: white;
`;

export function Button({children, onPress, icon, style}) {
  return (
    <Btn style={style} onPress={onPress} activeOpacity={0.7}>
      {icon && <Icon source={icon} />}
      <Caption>{children}</Caption>
    </Btn>
  );
}

export function PrimaryButton({children, onPress, icon, style}) {
  return (
    <PBtn style={style} onPress={onPress} activeOpacity={0.8}>
      {icon && <PIcon source={icon} />}
      <PCaption>{children}</PCaption>
    </PBtn>
  );
}
