import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    marginBottom: 8,
  },
  header: {
    paddingHorizontal: 24,
    paddingVertical: 8,
    flexDirection: 'row',
  },
  title: {
    fontFamily: 'DM Sans',
    fontSize: 20,
    lineHeight: 24,
    fontWeight: '800',
    color: '#00133D',
  },
  content: {
    paddingHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: '#E2E5E7',
    borderBottomColor: '#E2E5E7',
  },
  item: {
    paddingVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
    width: '33%',
  },
  central: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderLeftColor: '#E2E5E7',
    borderRightColor: '#E2E5E7',
  },
  number: {
    fontFamily: 'DM Sans',
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '800',
    color: '#00133D',
  },
  caption: {
    marginTop: 4,
    fontFamily: 'DM Sans',
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '400',
    color: '#95A0B8',
    textTransform: 'uppercase',
  },
});
