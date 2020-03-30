import {StyleSheet} from 'react-native';
import {fontStyles} from '../shared/uikit';

export default StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    paddingBottom: 15,
  },
  title: {
    ...fontStyles.Subtitle,
    color: '#252A34',
  },
});
