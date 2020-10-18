import NativeAdView from 'react-native-admob-native-ads';

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
