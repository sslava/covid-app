import {StyleSheet} from 'react-native';
import {colors} from '../shared/uikit';

export default StyleSheet.create({
  container: {
    paddingVertical: 24,
    paddingHorizontal: 24,
    position: 'relative',
  },
  input: {
    height: 48,
    borderRadius: 24,
    backgroundColor: '#F0F2F3',
    paddingHorizontal: 24,
  },
  search: {
    position: 'absolute',
    right: 24,
    top: 24,
    width: 48,
    height: 48,
    backgroundColor: colors.FillBlue,
    color: colors.DarkBlue,
    borderRadius: 24,
    fontFamily: 'Ubuntu',
    fontSize: 14,
    lineHeight: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 20,
    height: 20,
  },
});
