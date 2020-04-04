import {StyleSheet} from 'react-native';
import {fontStyles} from '../../shared/uikit';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  header: {
    paddingHorizontal: 20,
    paddingBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    ...fontStyles.Subtitle,
    color: '#252A34',
  },
});
