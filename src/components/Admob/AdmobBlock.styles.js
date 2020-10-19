import {Dimensions} from 'react-native';
import NativeAdView, {
  AdvertiserView,
  CallToActionView,
  HeadlineView,
  IconView,
  TaglineView,
} from 'react-native-admob-native-ads';

import styled from 'styled-components/native';

const {width} = Dimensions.get('window');

export const AdView = styled(NativeAdView)`
  height: 100px;
  width: 100%;
  background-color: ${(p) => p.theme.primaryBackground};
`;

export const Container = styled.View`
  height: 100px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-horizontal: 10px;
`;

export const ADIcon = styled(IconView)`
  width: 60px;
  height: 60px;
`;

export const Inner = styled.View`
  width: ${width - 90}px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Content = styled.View`
  width: 75%
  padding-horizontal: 6px;
`;

export const Headline = styled(HeadlineView)`
  font-weight: bold;
  color: ${(p) => p.theme.primaryTextColor};
  font-size: 13px;
`;

export const Tagline = styled(TaglineView)`
  font-size: 11px;
  color: ${(p) => p.theme.primaryTextColor};
`;

export const Advertiser = styled(AdvertiserView)`
  font-size: 10px;
  color: ${(p) => p.theme.secondaryTextColor};
`;

export const CallToAction = styled(CallToActionView)`
  height: 45px;
  max-width: 80px;
  padding-horizontal: 12px;
  background-color: ${(p) => p.theme.actionColor};
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  elevation: 10;
`;
