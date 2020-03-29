import {StyleSheet} from 'react-native';
import {colors} from '../../shared/uikit';

export default StyleSheet.create({
  container: {},
  list: {
    paddingHorizontal: 24,
  },
  hotline: {
    marginBottom: 16,
    paddingVertical: 16,
    paddingRight: 8,
    paddingLeft: 56,
    borderRadius: 10,
    backgroundColor: 'rgba(38, 90, 210, 0.1)',
    position: 'relative',
  },
  hotlineIcon: {
    position: 'absolute',
    tintColor: colors.FillBlue,
    left: 16,
    top: 24,
    width: 24,
    height: 24,
  },
  hotlineText: {
    fontFamily: 'Ubuntu',
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '500',
    color: colors.FillBlue,
  },
  hotlinePhone: {
    fontFamily: 'Ubuntu',
    fontSize: 24,
    lineHeight: 30,
    fontWeight: '500',
    color: colors.DarkBlue,
  },
});
