import React, {useCallback} from 'react';
import {Modal} from 'react-native';

import useToggle from '../../common/useToggle';
import CountrySelect from '../CountrySelect/CountrySelect';

import HeaderTitleCountry from './HeaderTitleCountry';

export default function HeaderCountrySelect({code, name, navigation}) {
  const [modal, toggleModal] = useToggle();
  const selectRight = useCallback(
    (id, countryName) => {
      navigation.navigate('Country', {code: id, name: countryName});
      toggleModal();
    },
    [toggleModal, navigation],
  );

  return (
    <>
      <HeaderTitleCountry onPress={toggleModal} code={code} name={name} />
      <Modal
        visible={modal}
        animationType="slide"
        presentationStyle="formSheet">
        <CountrySelect selected={code} onSelect={selectRight} />
      </Modal>
    </>
  );
}
