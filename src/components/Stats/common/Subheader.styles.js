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
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  title: {
    ...fontStyles.Subtitle,
    color: '#252A34',
  },
});
