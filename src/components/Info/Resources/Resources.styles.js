import {StyleSheet} from 'react-native';
import {colors} from '../../shared/uikit';

export default StyleSheet.create({
  container: {},
  list: {
    paddingHorizontal: 20,
  },
  button: {
    marginBottom: 10,
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 5,
    backgroundColor: '#EFF1FF',
  },

  buttonTitle: {
    fontFamily: 'Ubuntu',
    fontSize: 15,
    lineHeight: 20,
    fontWeight: 'bold',
    color: '#087ED9',
  },
  buttonPhone: {
    paddingTop: 5,
    flexDirection: 'row',
  },
  buttonPhoneText: {
    fontFamily: 'Ubuntu',
    fontSize: 30,
    lineHeight: 30,
    fontWeight: '500',
    color: '#252A34',
  },
  buttonPhoneIcon: {
    tintColor: '#087ED9',
    marginLeft: 10,
    width: 24,
    height: 24,
  },
});
