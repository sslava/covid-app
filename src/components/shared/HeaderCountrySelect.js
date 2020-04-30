import React, {useCallback} from 'react';

import useToggle from '../common/useToggle';
import CountrySelectModal from './CountrySelect/CountrySelectModal';

import HeaderTitleCountry from './HeaderTitleCountry';

export default function HeaderCountrySelect({code, name, navigation}) {
  const [modal, toggleModal] = useToggle();
  const select = useCallback(
    (id, countryName) => {
      navigation.navigate('Country', {code: id, name: countryName});
    },
    [navigation],
  );

  return (
    <>
      <HeaderTitleCountry onPress={toggleModal} code={code} name={name} />
      <CountrySelectModal
        visible={modal}
        selected={code}
        onSelect={select}
        onHide={toggleModal}
      />
    </>
  );
}
