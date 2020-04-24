import React, {useCallback} from 'react';
import {useNavigation} from '@react-navigation/core';

import {PrimaryButton} from '../../common/Button';

export default function PageLink({children, route, params, ...rest}) {
  const nav = useNavigation();
  const open = useCallback(() => nav.navigate(route, params), [
    nav,
    params,
    route,
  ]);

  return (
    <PrimaryButton {...rest} onPress={open}>
      {children}
    </PrimaryButton>
  );
}
