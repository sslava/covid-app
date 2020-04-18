import React, {useCallback} from 'react';
import {useNavigation} from '@react-navigation/core';

import Button from '../../shared/Button';

export default function PageLink({children, style, route, params}) {
  const nav = useNavigation();
  const open = useCallback(() => nav.navigate(route, params), [
    nav,
    params,
    route,
  ]);

  return (
    <Button style={style} onPress={open}>
      {children}
    </Button>
  );
}
