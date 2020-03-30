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
    paddingLeft: 40,
    paddingRight: 24,
    color: colors.DarkBlue,
    fontFamily: 'Ubuntu',
    fontSize: 16,
  },
  icon: {
    position: 'absolute',
    left: 36,
    top: 36,
    tintColor: colors.FillText,
    width: 24,
    height: 24,
  },
});
