import React, {useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {
  preferredCountrySelector,
  updatePrimaryCountry,
} from '../../app/preferencesModule';

import CountrySelect from '../shared/CountrySelect/CountrySelect';

export default function PrimarySelectScreen({navigation}) {
  const dispatch = useDispatch();
  const primary = useSelector(preferredCountrySelector);

  const select = useCallback(
    (id) => {
      dispatch(updatePrimaryCountry(id));
      navigation.goBack();
    },
    [navigation, dispatch],
  );

  return <CountrySelect selected={primary} onSelect={select} />;
}
