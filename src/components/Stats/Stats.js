import React, {useMemo} from 'react';
import {useSelector} from 'react-redux';

import {t} from '../../common/locale';
import {
  topCountriesSelector,
  worldSelector,
  makeCountrySelector,
} from '../../app/statsModule';

import LargeHeader from '../shared/Header/LargeHeader';
import WorldStats from './World/WorldStats';
import PrimaryCountry from './PrimaryCountry/PrimaryCountry';
import Countries from './Countries/Countries';

import {
  Container,
  WorldContainer,
  PrimaryContainer,
  CountriesContainer,
} from './Stats.styles';

export default function Stats({prefs}) {
  const primarySelector = useMemo(makeCountrySelector);
  const primary = useSelector((s) => primarySelector(s, prefs.primary));

  const top = useSelector(topCountriesSelector);
  const world = useSelector(worldSelector);

  return (
    <Container>
      <LargeHeader title={t('stats.title')} />
      <WorldContainer>
        <WorldStats world={world} />
      </WorldContainer>
      {primary && (
        <PrimaryContainer>
          <PrimaryCountry country={primary} />
        </PrimaryContainer>
      )}
      <CountriesContainer>
        <Countries countries={top} />
      </CountriesContainer>
    </Container>
  );
}
