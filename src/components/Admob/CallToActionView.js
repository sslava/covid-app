import React, {useCallback, useContext, useEffect, useRef} from 'react';
import {findNodeHandle, Text} from 'react-native';

import {RawButton, GestureHandlerRootView} from 'react-native-gesture-handler';

import {NativeAdContext} from 'react-native-admob-native-ads/src/context';

export default function CallToActionView(props) {
  const {nativeAd, nativeAdView} = useContext(NativeAdContext);
  const callToActionRef = useRef();

  const _onLayout = useCallback(() => {
    if (!nativeAdView) {
      return;
    }
    nativeAdView.setNativeProps({
      callToAction: findNodeHandle(callToActionRef.current),
    });
  }, [nativeAdView]);

  useEffect(() => {
    _onLayout();
  }, [_onLayout]);

  return (
    <GestureHandlerRootView>
      <RawButton
        ref={callToActionRef}
        onLayout={_onLayout}
        style={[props.style]}>
        <Text
          allowFontScaling={
            props.allowFontScaling ? props.allowFontScaling : false
          }
          style={[props.textStyle]}>
          {nativeAd
            ? props.allCaps
              ? nativeAd.callToAction?.toUpperCase()
              : nativeAd.callToAction
            : null}
        </Text>
      </RawButton>
    </GestureHandlerRootView>
  );
}
