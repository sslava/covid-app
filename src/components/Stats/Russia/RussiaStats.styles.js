import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    paddingTop: 24,
    paddingBottom: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#E2E5E7',
  },
  header: {
    paddingHorizontal: 24,
  },
  title: {
    fontFamily: 'Ubuntu',
    fontSize: 34,
    lineHeight: 34 * 1.2,
    letterSpacing: 0.011,
    fontWeight: '700',
    color: '#00133D',
  },
  updateDate: {
    fontFamily: 'Ubuntu',
    fontSize: 15,
    lineHeight: 20,
    fontWeight: '500',
    color: '#95A0B8',
  },
  bar: {
    paddingHorizontal: 24,
    paddingTop: 18,
    paddingBottom: 24,
  },
  legend: {
    paddingHorizontal: 24,
  },
  cities: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 24,
    marginVertical: 16,
    paddingHorizontal: 16,
    paddingVertical: 24,
    backgroundColor: 'rgba(149, 160, 184, 0.1)',
    borderRadius: 5,
  },
  openIcon: {
    width: 20,
    height: 20,
  },
  citiesCaption: {
    fontFamily: 'Ubuntu',
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
    color: '#00133D',
  },
});
