import {StyleSheet} from 'react-native';

import DeviceInfo from 'react-native-device-info';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export default StyleSheet.create({
  scroll: {
    flex: 1,
  },
  container: {
    paddingLeft: 20,
    paddingRight: 20,
    minHeight: '100%',
  },
  header: {
    paddingTop: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 34,
  },
  stats: {},
  block: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
  },
  all: {
    fontSize: 80,
    fontWeight: '600',
    color: 'olive',
  },
  deaths: {
    fontSize: 60,
    fontWeight: '600',
    color: 'tomato',
  },
  recovered: {
    fontSize: 60,
    fontWeight: '600',
    color: 'grey',
  },
  info: {
    fontSize: 20,
    fontWeight: '600',
  },
});
