import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    paddingBottom: 22,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E5E7',
  },
  worldStats: {
    marginLeft: 24,
    marginBottom: 40,
    flex: 1,
    flexDirection: 'row',
  },
  pie: {
    width: 220,
    height: 220,
  },
  worldCounters: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 20,
  },
  numberStats: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    paddingLeft: 5,
    paddingRight: 5,
  },
});
