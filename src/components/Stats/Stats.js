import React, {useMemo} from 'react';
import {useSelector} from 'react-redux';

import NativeAdView, {
  CallToActionView,
  IconView,
  HeadlineView,
  TaglineView,
  AdvertiserView,
  AdBadge,
} from 'react-native-admob-native-ads';

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
      <AdmobBlock unitId="ca-app-pub-7167431573335979/5142058616" />
      {countrySupportsRegions(code) && <Region code={code} country={country} />}
      <WorldContainer>
        <WorldStats />
      </WorldContainer>
      <CountriesContainer>
        <Countries />
      </CountriesContainer>
    </Container>
  );
}
