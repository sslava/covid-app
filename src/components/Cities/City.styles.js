import {StyleSheet} from 'react-native';
import {legendColor, colors} from '../shared/uikit';

export default StyleSheet.create({
  container: {
    borderBottomColor: colors.BorderGrey,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.BorderGrey,
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  button: {
    paddingHorizontal: 24,
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Ubuntu',
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 24,
    color: colors.DarkBlue,
  },
  content: {
    paddingBottom: 24,
    paddingHorizontal: 24,
  },
  legend: {
    paddingBottom: 16,
  },
  numbers: {
    flexDirection: 'row',
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
    color: legendColor.Deaths,
  },
  openIcon: {
    width: 20,
    height: 20,
    marginLeft: 8,
  },
});
