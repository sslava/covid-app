import React from 'react';

import {t} from '../../common/locale';

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
  RegionContainer,
} from './Stats.styles';

const hasRegion = (code) => code === 'US' || code === 'RU';

export default function Stats({prefs}) {
  return (
    <Container>
      <LargeHeader title={t('stats.title')} />
      <WorldContainer>
        <WorldStats />
      </WorldContainer>
      <PrimaryContainer>
        <PrimaryCountry code={prefs.primary} />
      </PrimaryContainer>
      {hasRegion(prefs.primary) && (
        <RegionContainer>
          <Region code={prefs.primary} />
        </RegionContainer>
      )}
      <CountriesContainer>
        <Countries />
      </CountriesContainer>
    </Container>
  );
}
