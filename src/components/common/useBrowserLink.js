// @flow
import {useCallback} from 'react';
import {Linking} from 'react-native';

export default function useBrowserLink(url: string): Function {
  return useCallback(async () => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      Linking.openURL(url);
    }
  }, [url]);
}
