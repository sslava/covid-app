import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  left: {
    width: '50%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  color: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 5,
  },
  title: {
    fontFamily: 'Ubuntu',
    fontSize: 13,
    lineHeight: 18,
    fontWeight: '600',
    textTransform: 'uppercase',
    color: '#252A34',
  },
  right: {
    paddingLeft: 15,
    flexDirection: 'row',
  },
  number: {
    fontFamily: 'Ubuntu',
    fontSize: 18,
    lineHeight: 20,
    fontWeight: '600',
    color: '#252A34',
  },
  today: {
    fontSize: 13,
    lineHeight: 20,
    fontWeight: '600',
    color: '#FC624D',
  },
});
