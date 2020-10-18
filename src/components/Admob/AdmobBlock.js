import React from 'react';

import {
  HeadlineView,
  AdvertiserView,
  AdBadge,
} from 'react-native-admob-native-ads';

import {
  AdView,
  Inner,
  Content,
  Left,
  ADIcon,
  CallToAction,
  Tagline,
  Headline,
} from './AdmobBlock.styles';

import {adUnitID} from './ad';

export default function AdmobBlock({code, unitId = adUnitID}) {
  return (
    <AdView adUnitID={unitId}>
      <Inner>
        <AdBadge />
        <Content>
          <ADIcon />
          <Left>
            <Headline />
            <Tagline numberOfLines={1} />
            <AdvertiserView />
          </Left>
          <CallToAction textStyle={{color: 'white', fontSize: 14}} />
        </Content>
      </Inner>
    </AdView>
  );
}
