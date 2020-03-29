import {StyleSheet} from 'react-native';
import {legendColor} from '../../shared/uikit';

export default StyleSheet.create({
  container: {
    borderBottomColor: '#E2E5E7',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#E2E5E7',
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
    fontWeight: '500',
    fontSize: 18,
    lineHeight: 24,
    color: '#00133D',
  },
  legend: {
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  numbers: {
    flexDirection: 'row',
  },
  number: {
    fontFamily: 'Ubuntu',
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
    color: '#00133D',
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
