import {StyleSheet} from 'react-native';

import DeviceInfo from 'react-native-device-info';

export default StyleSheet.create({
  scroll: {
    backgroundColor: '#003CBF',
    position: 'relative',
  },
  container: {
    backgroundColor: 'white',
    minHeight: '200%',
  },
  topBlock: {
    backgroundColor: '#003CBF',
    paddingTop: DeviceInfo.hasNotch() ? 60 : 30,
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 12,
  },
  header: {
    paddingLeft: 12,
  },
  title: {
    fontFamily: 'DM Sans',
    fontSize: 24,
    lineHeight: 36,
    fontWeight: '500',
    color: 'white',
  },
});
