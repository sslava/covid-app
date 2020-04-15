import React, {useCallback} from 'react';
import {useNavigation} from '@react-navigation/core';

import {Container, Btn, Caption} from './PageLink.styles';

export default function PageLink({children, route, params}) {
  const nav = useNavigation();
  const open = useCallback(() => nav.navigate(route, params), [
    nav,
    params,
    route,
  ]);

  return (
    <Container>
      <Btn onPress={open} activeOpacity={0.5}>
        <Caption>{children}</Caption>
      </Btn>
    </Container>
  );
}
