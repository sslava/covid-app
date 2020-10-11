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
import {View} from 'react-native';

export default function Stats({code}) {
  const countrySelector = useMemo(makePrimaryCountrySelector, []);
  const country = useSelector((s) => countrySelector(s, code));

  return (
    <Container>
      <LargeHeader title={t('stats.title')} />
      <NativeAdView
        style={{
          width: '95%',
          alignSelf: 'center',
          height: 100,
        }}
        adUnitID="ca-app-pub-3940256099942544/2247696110" // TEST adUnitID
      >
        <View
          style={{
            height: 100,
            width: '100%',
          }}>
          <AdBadge />
          <View
            style={{
              height: 100,
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              paddingHorizontal: 10,
            }}>
            <IconView
              style={{
                width: 60,
                height: 60,
              }}
            />
            <View
              style={{
                width: '65%',
                maxWidth: '65%',
                paddingHorizontal: 6,
              }}>
              <HeadlineView
                style={{
                  fontWeight: 'bold',
                  fontSize: 13,
                }}
              />
              <TaglineView
                numberOfLines={1}
                style={{
                  fontSize: 11,
                }}
              />
              <AdvertiserView
                style={{
                  fontSize: 10,
                  color: 'gray',
                }}
              />
            </View>

            <CallToActionView
              style={{
                height: 45,
                paddingHorizontal: 12,
                backgroundColor: 'purple',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 5,
                elevation: 10,
              }}
              textStyle={{color: 'white', fontSize: 14}}
            />
          </View>
        </View>
      </NativeAdView>
      <PrimaryContainer>
        <PrimaryCountry code={code} country={country} />
      </PrimaryContainer>
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
