import {StyleSheet} from 'react-native';
import {legendColor} from '../../shared/uikit';

export default StyleSheet.create({
  container: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#E2E5E7',
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
    fontWeight: '700',
    color: '#00133D',
  },
  banner: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 16,
    paddingBottom: 24,
  },
  bannerText: {
    fontFamily: 'Ubuntu',
    fontSize: 16,
    fontWeight: '300',
    textTransform: 'uppercase',
    color: '#95A0B8',
  },
  bannerNumber: {
    fontFamily: 'Ubuntu',
    fontSize: 56,
    fontWeight: '300',
    color: '#00133D',
  },
  bar: {
    paddingHorizontal: 24,
  },
  today: {
    fontSize: 24,
    fontWeight: '300',
    color: legendColor.Deaths,
  },
  legend: {
    paddingHorizontal: 24,
  },
});
