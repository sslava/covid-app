import NativeAdView, {
  AdvertiserView,
  CallToActionView,
  HeadlineView,
  IconView,
  TaglineView,
} from 'react-native-admob-native-ads';

import styled from 'styled-components/native';

export const AdView = styled(NativeAdView)`
  width: 95%;
  align-self: center;
  height: 100px;
`;

export const Inner = styled.View`
  height: 100px;
  width: 100%;
`;

export const Content = styled.View`
  height: 100px;
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-horizontal: 10px;
`;

export const Left = styled.View`
  width: 65%;
  max-width: 65%;
  padding-horizontal: 6px;
`;

export const ADIcon = styled(IconView)`
  width: 60px;
  height: 60px;
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
  padding-horizontal: 12px;
  background-color: ${(p) => p.theme.actionColor};
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  elevation: 10;
`;
