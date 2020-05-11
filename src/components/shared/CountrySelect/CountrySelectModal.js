import React, {useCallback} from 'react';

import {t} from '../../../common/locale';
import FullscreenModal from '../../common/FullscreenModal';

import CountrySelect from './CountrySelect';

export default function CountrySelectModal({
  visible,
  selected,
  onHide,
  onSelect,
  world = false,
}) {
  const select = useCallback(
    (id, countryName) => {
      onSelect(id, countryName);
      onHide();
    },
    [onSelect, onHide],
  );

  if (!visible) {
    return null;
  }
  return (
    <FullscreenModal title={t('countryselect.title')} visible onHide={onHide}>
      <CountrySelect world={world} selected={selected} onSelect={select} />
    </FullscreenModal>
  );
}
