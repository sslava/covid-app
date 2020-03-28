import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    paddingBottom: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#E2E5E7',
  },
  worldStats: {
    marginTop: 10,
    marginLeft: 24,
    marginBottom: 20,
    flex: 1,
    flexDirection: 'row',
  },
  pie: {
    width: (width - 24) / 2,
    height: (width - 24) / 2,
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
    paddingHorizontal: 14,
  },
});
