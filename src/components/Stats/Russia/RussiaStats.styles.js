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
    fontWeight: '500',
    color: '#00133D',
  },
  banner: {
    paddingTop: 8,
    paddingBottom: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerText: {
    fontFamily: 'Ubuntu',
    fontSize: 14,
    fontWeight: '600',
    textTransform: 'uppercase',
    color: '#95A0B8',
  },
  bannerNumber: {
    fontFamily: 'Ubuntu',
    fontSize: 50,
    fontWeight: '300',
    lineHeight: 50 * 1.2,
    color: '#00133D',
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
});
