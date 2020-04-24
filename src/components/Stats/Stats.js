import React, {useMemo} from 'react';
import {useSelector} from 'react-redux';

import {t} from '../../common/locale';

import {makeCountrySelector} from '../../app/statsModule';

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

const hasRegions = (country) =>
  country && (country.code === 'US' || country.code === 'RU');

export default function Stats({prefs}) {
  const primarySelector = useMemo(makeCountrySelector);
  const country = useSelector((s) => primarySelector(s, prefs.primary));

  return (
    <Container>
      <LargeHeader title={t('stats.title')} />
      <WorldContainer>
        <WorldStats />
      </WorldContainer>
      <PrimaryContainer>
        <PrimaryCountry country={country} />
      </PrimaryContainer>
      {hasRegions(country) && <Region country={country} />}
      <CountriesContainer>
        <Countries />
      </CountriesContainer>
    </Container>
  );
}
