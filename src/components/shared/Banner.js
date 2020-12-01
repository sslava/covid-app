import React, {useCallback} from 'react';
import {useSelector} from 'react-redux';
import AppMetrica from 'react-native-appmetrica';

import {BannerAd, BannerAdSize, TestIds} from '@react-native-firebase/admob';

import styled from 'styled-components/native';
import {adsSelector} from '../../app/adModule';

// import AdmobBlock from '../Admob/AdmobBlock';

const Container = styled.View`
  position: relative;
  margin-top: 25px;
  margin-bottom: 20px;
  padding-vertical: 15px;
  border-radius: 5px;
  min-height: 60px;
  background-color: ${(p) => p.theme.recommendationBackground};
`;

export default function Banner({place}) {
  const ads = useSelector(adsSelector);

  const unitId = ads[place];

  const opened = useCallback(() => {
    if (unitId) {
      AppMetrica.reportEvent('BannerClick', {unitId});
    }
  }, [unitId]);

  if (!unitId) {
    return null;
  }

  return (
    <Container>
      <BannerAd
        unitId={unitId}
        // unitId={TestIds.BANNER}
        size={BannerAdSize.ADAPTIVE_BANNER}
        onAdOpened={opened}
      />
    </Container>
  );
}
