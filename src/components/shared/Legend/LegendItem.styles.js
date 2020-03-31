import {StyleSheet} from 'react-native';
import {legendColor, colors} from '../uikit';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  color: {
    width: 14,
    height: 14,
    marginRight: 8,
  },
  title: {
    fontFamily: 'Ubuntu',
    fontSize: 14,
    lineHeight: 20,
    textTransform: 'uppercase',
    color: colors.DarkBlue,
  },
  number: {
    fontFamily: 'Ubuntu',
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
    color: colors.DarkBlue,
  },
  today: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '300',
  },
  bad: {
    color: legendColor.Deaths,
  },
});
