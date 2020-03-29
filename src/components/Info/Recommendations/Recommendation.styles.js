import {StyleSheet} from 'react-native';
import {colors} from '../../shared/uikit';

export default StyleSheet.create({
  container: {
    marginBottom: 16,
    paddingVertical: 16,
    paddingRight: 8,
    paddingLeft: 56,
    borderRadius: 10,
    backgroundColor: 'rgba(149, 160, 184, 0.1)',
    position: 'relative',
  },
  icon: {
    position: 'absolute',
    left: 16,
    top: 24,
    width: 24,
    height: 24,
  },
  title: {
    fontFamily: 'Ubuntu',
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '500',
    color: colors.DarkBlue,
  },
  desc: {
    marginTop: 4,
    fontFamily: 'Ubuntu',
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '500',
    color: colors.FillText,
  },
});
