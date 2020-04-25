import React, {useCallback, useMemo} from 'react';

import {useDispatch, useSelector} from 'react-redux';
import {RefreshControl} from 'react-native';

import {Safe, Scroll} from './DeatilsScreen.styles';

export default function DeatilsScreen({navigation}) {
  const dispatch = useDispatch();

  return (
    <Safe>
      <Scroll
        refreshControl={
          <RefreshControl refreshing={false} onRefresh={() => {}} />
        }
      />
    </Safe>
  );
}
