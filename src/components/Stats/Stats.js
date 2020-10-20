import React, {useMemo} from 'react';
import {useSelector} from 'react-redux';

import {t} from '../../common/locale';

import {makePrimaryCountrySelector} from '../../app/statsModule';

import {countrySupportsRegions} from '../../app/preferencesModule';
import LargeHeader from '../common/Header/LargeHeader';
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

import AdmobBlock from '../Admob/AdmobBlock';

export default function Stats({code}) {
  const countrySelector = useMemo(makePrimaryCountrySelector, []);
  const country = useSelector((s) => countrySelector(s, code));

  return (
    <Container>
      <LargeHeader title={t('stats.title')} />
      <PrimaryContainer>
        <PrimaryCountry code={code} country={country} />
      </PrimaryContainer>
      <AdmobBlock place="statsTop" />
      {countrySupportsRegions(code) && <Region code={code} country={country} />}
      <WorldContainer>
        <WorldStats />
      </WorldContainer>
      <AdmobBlock place="statsMiddle" />
      <CountriesContainer>
        <Countries />
      </CountriesContainer>
    </Container>
  );
}
