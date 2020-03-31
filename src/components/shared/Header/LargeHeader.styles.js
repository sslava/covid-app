import {StyleSheet} from 'react-native';
import {fontStyles} from '../uikit';

export default StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingTop: 10,
  },
  title: {
    ...fontStyles.LargeTitle,
    color: '#252A34',
  },
});
