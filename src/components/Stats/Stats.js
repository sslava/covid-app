import React, {useMemo} from 'react';

import {t} from '../../common/locale';
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

function getTop(countries) {
  return countries.slice(0, 9);
}

export default function Stats({data, prefs}) {
  const primary = useMemo(() => findPrimary(data.countries, prefs.primary), [
    data.countries,
    prefs.primary,
  ]);

  const top = useMemo(() => getTop(data.countries), [data.countries]);
  return (
    <Container>
      <LargeHeader title={t('stats.title')} />
      <WorldContainer>
        <WorldStats world={data.world} />
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
