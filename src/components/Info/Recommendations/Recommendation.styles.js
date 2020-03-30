import {StyleSheet} from 'react-native';
import {colors} from '../../shared/uikit';

export default StyleSheet.create({
  container: {
    marginBottom: 10,
    paddingVertical: 15,
    paddingRight: 15,
    paddingLeft: 70,
    borderRadius: 5,
    backgroundColor: '#FFF5F3',
    position: 'relative',
  },
  icon: {
    position: 'absolute',
    left: 15,
    top: 15,
    width: 40,
    height: 40,
  },
  title: {
    fontFamily: 'Ubuntu',
    fontSize: 15,
    lineHeight: 20,
    fontWeight: 'bold',
    color: '#252A34',
  },
  desc: {
    marginTop: 4,
    fontFamily: 'Ubuntu',
    fontSize: 13,
    lineHeight: 18,
    color: '#A0A2AF',
  },
});
