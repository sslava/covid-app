import {StyleSheet} from 'react-native';

import {colors} from '../../shared/uikit';

export default StyleSheet.create({
  container: {
    paddingVertical: 24,
  },
  header: {
    paddingHorizontal: 24,
  },
  title: {
    fontFamily: 'Ubuntu',
    fontSize: 34,
    lineHeight: 34 * 1.2,
    letterSpacing: 0.011,
    fontWeight: '500',
    color: colors.DarkBlue,
  },
  list: {
    paddingHorizontal: 8,
  },
});
