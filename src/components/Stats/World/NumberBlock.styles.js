import {StyleSheet} from 'react-native';
import {legendColor} from '../../shared/uikit';

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    flex: 1,
    justifyContent: 'space-between',
    height: 90,
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  line: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  color: {
    width: 14,
    height: 14,
    marginRight: 8,
  },
  number: {
    fontFamily: 'Ubuntu',
    fontSize: 20,
    lineHeight: 28,
    fontWeight: '500',
    color: '#00133D',
  },
  title: {
    color: '#95A0B8',
    fontFamily: 'Ubuntu',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 20,
    textTransform: 'uppercase',
  },
  today: {
    fontFamily: 'Ubuntu',
    fontSize: 14,
    lineHeight: 20,
    color: legendColor.Deaths,
  },
});
