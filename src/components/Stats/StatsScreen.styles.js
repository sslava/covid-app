import {StyleSheet} from 'react-native';
import {colors} from '../shared/uikit';

export default StyleSheet.create({
  safeArea: {
    backgroundColor: 'white',
  },
  scrollContent: {
    backgroundColor: 'white',
  },
  header: {
    paddingTop: 12,
    paddingLeft: 24,
  },
  title: {
    fontFamily: 'Ubuntu',
    fontSize: 34,
    lineHeight: 34 * 1.2,
    letterSpacing: 0.011,
    fontWeight: '500',
    color: colors.DarkBlue,
  },
  subtitle: {
    fontFamily: 'Ubuntu',
    fontSize: 14,
    lineHeight: 20,
    color: colors.FillText,
  },
  world: {
    marginTop: 12,
  },
});
