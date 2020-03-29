import {StyleSheet, Dimensions} from 'react-native';
import {legendColor} from '../../shared/uikit';

const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#E2E5E7',
  },
  worldStats: {
    marginTop: 10,
    marginLeft: 24,
    marginBottom: 20,
    flex: 1,
    flexDirection: 'row',
  },
  pie: {
    width: (width - 24) / 2,
    height: (width - 24) / 2,
  },
  worldCounters: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 20,
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
  numberStats: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
  },
});
