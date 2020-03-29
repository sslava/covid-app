import {StyleSheet} from 'react-native';
import {legendColor, colors} from '../../shared/uikit';

export default StyleSheet.create({
  wc: {
    position: 'relative',
    marginVertical: 8,
    paddingLeft: 24 + 8,
  },
  line: {
    position: 'absolute',
    top: 7,
    width: 24,
    height: 8,
    borderRadius: 4,
  },
  title: {
    fontFamily: 'Ubuntu',
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '500',
    color: colors.FillText,
    textTransform: 'uppercase',
  },
  number: {
    marginTop: 2,
    fontFamily: 'Ubuntu',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    color: colors.DarkBlue,
  },
  today: {
    fontSize: 14,
    fontWeight: '300',
    color: legendColor.Deaths,
  },
});
