import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    flex: 1,
    justifyContent: 'space-between',
    height: 92,
    margin: 10,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
    paddingBottom: 16,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 3,
    borderColor: '#E2E5E7',
  },
  line: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  color: {
    width: 14,
    height: 14,
    marginRight: 8,
  },
  number: {
    fontFamily: 'DM Sans',
    fontSize: 20,
    lineHeight: 28,
    fontWeight: '500',
    color: '#00133D',
  },
  title: {
    color: '#95A0B8',
    fontFamily: 'DM Sans',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 20,
    textTransform: 'uppercase',
  },
  delta: {
    fontFamily: 'DM Sans',
    fontSize: 14,
    lineHeight: 20,
    color: '#00133D',
  },
  deltaNumber: {
    fontFamily: 'DM Sans',
    fontSize: 14,
    lineHeight: 20,
  },
});
