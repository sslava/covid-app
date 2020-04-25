import React, {useMemo} from 'react';
import {useSelector} from 'react-redux';

import {t} from '../../common/locale';

import {makeCountrySelector} from '../../app/statsModule';

import {supportsRegions} from '../shared/Preferences';
import LargeHeader from '../shared/Header/LargeHeader';
import WorldStats from './World/WorldStats';
import PrimaryCountry from './PrimaryCountry/PrimaryCountry';
import Countries from './Countries/Countries';
import Region from './Region/Region';

import {
  Container,
  WorldContainer,
  PrimaryContainer,
  CountriesContainer,
} from './Stats.styles';

export default function Stats({code}) {
  const primarySelector = useMemo(makeCountrySelector);
  const country = useSelector((s) => primarySelector(s, code));

  return (
    <Container>
      <LargeHeader title={t('stats.title')} />
      <WorldContainer>
        <WorldStats />
      </WorldContainer>
      <PrimaryContainer>
        <PrimaryCountry country={country} />
      </PrimaryContainer>
      {supportsRegions(country) && <Region country={country} />}
      <CountriesContainer>
        <Countries />
      </CountriesContainer>
    </Container>
  );
}
