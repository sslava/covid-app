import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {},
  list: {
    paddingHorizontal: 20,
    marginBottom: 20,
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
  buttonSubtitle: {
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
  link: {
    backgroundColor: '#F3F3F3',
  },
  linkTitle: {
    fontFamily: 'Ubuntu',
    fontSize: 15,
    lineHeight: 20,
    fontWeight: 'bold',
    color: '#252A34',
  },
  linkUrlText: {
    fontFamily: 'Ubuntu',
    fontSize: 13,
    lineHeight: 18,
    fontWeight: 'bold',
    color: '#087ED9',
  },
  linkUrlIcon: {
    tintColor: '#087ED9',
    marginLeft: 8,
    width: 12,
    height: 12,
  },
});
