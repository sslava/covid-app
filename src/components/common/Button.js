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

const Caption = styled.Text`
  font-size: 16px;
  line-height: 20px;
  font-weight: 500;
  color: ${(p) => p.theme.primaryTextColor};
`;

const PBtn = styled(Btn)`
  background-color: ${(p) => p.theme.actionColor};
`;

const PCaption = styled(Caption)`
  color: white;
`;

export function Button({children, onPress, icon, style}) {
  return (
    <Btn style={style} onPress={onPress} activeOpacity={0.7}>
      {icon}
      <Caption>{children}</Caption>
    </Btn>
  );
}

export function PrimaryButton({children, onPress, icon, style}) {
  return (
    <PBtn style={style} onPress={onPress} activeOpacity={0.8}>
      {icon}
      <PCaption>{children}</PCaption>
    </PBtn>
  );
}
