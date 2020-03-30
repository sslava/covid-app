import {StyleSheet} from 'react-native';
import {colors} from '../../shared/uikit';

export default StyleSheet.create({
  container: {
    paddingTop: 30,
  },
  title: {
    fontFamily: 'Ubuntu',
    fontSize: 34,
    lineHeight: 34 * 1.2,
    letterSpacing: 0.011,
    fontWeight: '500',
    paddingLeft: 24,
    color: colors.DarkBlue,
    marginBottom: 24,
  },
  action: {
    paddingTop: 24,
    paddingHorizontal: 24,
  },
  all: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 5,
    backgroundColor: 'rgba(149, 160, 184, 0.1)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  allCaption: {
    color: colors.DarkBlue,
    fontFamily: 'Ubuntu',
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '500',
  },
  allIcon: {
    width: 20,
    height: 20,
    marginLeft: 8,
  },
});
