import {StyleSheet} from 'react-native';
import DeviceInfo from 'react-native-device-info';

const height = DeviceInfo.hasNotch() ? 88 : 60;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  toolbar: {
    height,
  },
  header: {
    height,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 12,
  },
  headline: {
    fontSize: 17,
    lineHeight: 22,
    fontWeight: '500',
    letterSpacing: 0.019,
  },
  title: {
    fontSize: 34,
    lineHeight: 34 * 1.2,
    letterSpacing: 0.011,
    fontWeight: '700',
    marginLeft: 16,
  },
});
