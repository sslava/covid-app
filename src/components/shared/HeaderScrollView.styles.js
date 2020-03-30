import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  toolbar: {
    height: 88,
  },
  header: {
    height: 88,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 12,
  },
  headline: {
    fontFamily: 'Ubuntu',
    fontSize: 17,
    lineHeight: 22,
    fontWeight: '500',
    letterSpacing: 0.019,
  },
  title: {
    fontFamily: 'Ubuntu',
    fontSize: 34,
    lineHeight: 34 * 1.2,
    letterSpacing: 0.011,
    fontWeight: '700',
    marginLeft: 16,
  },
});
