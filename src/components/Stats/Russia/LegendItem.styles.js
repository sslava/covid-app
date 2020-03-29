import {StyleSheet} from 'react-native';
import {legendColor} from '../../shared/uikit';

export default StyleSheet.create({
  container: {
    marginBottom: 8,
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
    color: '#00133D',
  },
  number: {
    fontFamily: 'Ubuntu',
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 'bold',
    color: '#00133D',
  },
  today: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '500',
  },
  bad: {
    color: legendColor.Deaths,
  },
});
