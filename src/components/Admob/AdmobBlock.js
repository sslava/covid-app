import React, {useCallback} from 'react';
import {useSelector} from 'react-redux';
import {adsSelector} from '../../app/adModule';

import AppMetrica from 'react-native-appmetrica';

import {
  Container,
  AdView,
  Inner,
  Content,
  ADIcon,
  CallToAction,
  Tagline,
  Headline,
  Advertiser,
} from './AdmobBlock.styles';

export default function AdmobBlock({place}) {
  const ads = useSelector(adsSelector);
  const unitId = ads[place];

  const clicked = useCallback(() => {
    if (unitId) {
      AppMetrica.reportEvent('BannerClick', {unitId});
    }
  }, [unitId]);

  if (!unitId) {
    return null;
  }

  return (
    <AdView adUnitID={unitId} enableTestMode={false} onAdClicked={clicked}>
      <Container>
        <ADIcon />
        <Inner>
          <Content>
            <Headline />
            <Tagline numberOfLines={1} />
            <Advertiser />
          </Content>
          <CallToAction
            textStyle={{color: 'white', fontSize: 14}}
            style={{elevation: 100}}
          />
        </Inner>
      </Container>
    </AdView>
  );
}
