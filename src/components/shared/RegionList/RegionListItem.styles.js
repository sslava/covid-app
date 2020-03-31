import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    borderBottomColor: '#F3F3F3',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#F3F3F3',
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  button: {
    paddingHorizontal: 20,
    height: 64,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Ubuntu',
    fontWeight: '600',
    fontSize: 15,
    lineHeight: 20,
    color: '#252A34',
  },
  numbers: {
    flexDirection: 'row',
  },
  number: {
    fontFamily: 'Ubuntu',
    fontSize: 15,
    lineHeight: 20,
    fontWeight: 'bold',
    color: '#252A34',
  },
  today: {
    fontSize: 13,
    lineHeight: 20,
    fontWeight: '600',
    color: '#FFB663',
  },
  openIcon: {
    tintColor: '#A0A2AF',
    width: 20,
    height: 20,
    marginLeft: 8,
  },
});
