import React from 'react';
import {Modal} from 'react-native';
import styled from 'styled-components/native';

import {Header, HeaderSpan, HeaderClose, HeaderTitle} from './Header/Header';

const Safe = styled.SafeAreaView`
  flex: 1;
  background-color: ${(p) => p.theme.primaryBackground};
`;

export default function FullscreenModal({children, visible, onHide, title}) {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="fullScreen"
      onDismiss={onHide}>
      <Safe>
        <Header>
          <HeaderSpan>
            <HeaderClose onPress={onHide} />
          </HeaderSpan>
          <HeaderTitle>{title}</HeaderTitle>
          <HeaderSpan />
        </Header>
        {children}
      </Safe>
    </Modal>
  );
}
