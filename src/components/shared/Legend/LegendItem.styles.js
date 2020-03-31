import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  today: {
    marginLeft: 3,
    fontSize: 13,
    lineHeight: 24,
    fontWeight: '600',
    color: '#FC624D',
  },
});
