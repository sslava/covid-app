import {StyleSheet} from 'react-native';
import {fontStyles} from '../shared/uikit';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  text: {
    paddingLeft: 20,
    fontFamily: 'Ubuntu',
    fontSize: 15,
    fontWeight: '600',
    lineHeight: 20,
    color: '#8B8C9C',
  },
  link: {
    color: '#087ED9',
  },
});
