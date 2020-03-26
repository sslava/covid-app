// @flow
import {useCallback} from 'react';
import {Platform, Linking} from 'react-native';

const schema = Platform.select({
  ios: 'telprompt:',
  android: 'tel:',
});

export default function usePhoneCall(phoneNumber: string): Function {
  return useCallback(async () => {
    const url = `${schema}${phoneNumber}`;
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      Linking.openURL(url);
    }
  }, [phoneNumber]);
}
