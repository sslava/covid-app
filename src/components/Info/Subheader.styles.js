import {StyleSheet} from 'react-native';
import {colors} from '../shared/uikit';

export default StyleSheet.create({
  header: {
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  title: {
    fontFamily: 'Ubuntu',
    fontSize: 20,
    lineHeight: 24 * 1.2,
    letterSpacing: 0.011,
    fontWeight: '600',
    color: colors.DarkBlue,
  },
});
