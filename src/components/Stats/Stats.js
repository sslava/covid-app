import React, {useMemo} from 'react';
import {useSelector} from 'react-redux';

import {t} from '../../common/locale';
import {
  topCountriesSelector,
  countriesSelector,
  worldSelector,
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

function findPrimary(countries, code) {
  if (!code) {
    return null;
  }
  const primary = countries.find((c) => c.code === code);
  if (!primary) {
    return countries.find((c) => c.code === 'US');
  }
  return primary;
}

export default function Stats({prefs}) {
  const countries = useSelector(countriesSelector);
  const top = useSelector(topCountriesSelector);
  const world = useSelector(worldSelector);

  const primary = useMemo(() => findPrimary(countries, prefs.primary), [
    countries,
    prefs.primary,
  ]);

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
