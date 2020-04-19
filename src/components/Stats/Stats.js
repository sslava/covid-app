import React from 'react';

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
      <CountriesContainer>
        <Countries />
      </CountriesContainer>
    </Container>
  );
}
