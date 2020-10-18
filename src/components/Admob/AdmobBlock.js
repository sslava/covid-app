import React from 'react';

import {
  CallToActionView,
  IconView,
  HeadlineView,
  TaglineView,
  AdvertiserView,
  AdBadge,
} from 'react-native-admob-native-ads';

import {AdView, Inner, Content, Left} from './AdmobBlock.styles';

import {adUnitID} from './ad';

export default function AdmobBlock({code, unitId = adUnitID}) {
  return (
    <AdView adUnitID={unitId}>
      <Inner>
        <AdBadge />
        <Content>
          <IconView style={{width: 60, height: 60}} />
          <Left>
            <HeadlineView style={{fontWeight: 'bold', fontSize: 13}} />
            <TaglineView numberOfLines={1} style={{fontSize: 11}} />
            <AdvertiserView style={{fontSize: 10, color: 'gray'}} />
          </Left>
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
        </Content>
      </Inner>
    </AdView>
  );
}
