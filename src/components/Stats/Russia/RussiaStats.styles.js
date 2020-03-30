import {StyleSheet} from 'react-native';
import {legendColor, colors} from '../../shared/uikit';

export default StyleSheet.create({
  container: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.BorderGrey,
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
  banner: {
    paddingTop: 8,
    paddingBottom: 24,
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  bannerText: {
    fontFamily: 'Ubuntu',
    fontSize: 14,
    fontWeight: '600',
    textTransform: 'uppercase',
    color: colors.FillText,
  },
  bannerNumber: {
    fontFamily: 'Ubuntu',
    fontSize: 50,
    fontWeight: '300',
    lineHeight: 50 * 1.2,
    color: colors.DarkBlue,
  },
  today: {
    fontSize: 20,
    fontWeight: '300',
    color: legendColor.Deaths,
  },
  bar: {
    paddingTop: 8,
    paddingBottom: 8,
    paddingHorizontal: 24,
  },
  legend: {
    paddingHorizontal: 24,
  },
  updated: {
    paddingHorizontal: 24,
    paddingBottom: 8,
  },
  updatedText: {
    fontFamily: 'Ubuntu',
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '300',
    opacity: 0.7,
    color: colors.FillText,
  },
  action: {
    paddingTop: 12,
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
