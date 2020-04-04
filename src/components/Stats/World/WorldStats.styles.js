import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    paddingBottom: 30,
  },
  stats: {
    marginTop: 30,
    paddingLeft: 20,
    flexDirection: 'row',
  },
  pie: {
    width: width / 2 - 40,
    height: width / 2 - 40,
  },
  counters: {
    marginLeft: 20,
  },
  worldIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  numberStats: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
  },
  updatedText: {
    marginTop: 12,
    paddingLeft: 20,
    fontFamily: 'Ubuntu',
    fontSize: 11,
    fontWeight: '500',
    lineHeight: 18,
    color: '#8B8C9C',
  },
});
