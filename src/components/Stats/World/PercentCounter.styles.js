import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  wc: {
    position: 'relative',
    marginBottom: 18,
    paddingLeft: 17,
  },
  circle: {
    position: 'absolute',
    top: 2,
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  title: {
    fontFamily: 'Ubuntu',
    fontSize: 13,
    lineHeight: 18,
    fontWeight: '600',
    color: '#8B8C9C',
    textTransform: 'uppercase',
  },
  number: {
    marginTop: 5,
    fontFamily: 'Ubuntu',
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 20,
    color: '#252A34',
  },
  today: {
    fontSize: 13,
    lineHeight: 20,
    fontWeight: '600',
    color: '#FC624D',
  },
});
