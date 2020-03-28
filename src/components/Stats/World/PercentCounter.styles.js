import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  wc: {
    position: 'relative',
    marginVertical: 8,
    paddingLeft: 24 + 8,
  },
  wcLine: {
    position: 'absolute',
    top: 8,
    width: 24,
    height: 8,
    borderRadius: 4,
  },
  wcTitle: {
    fontFamily: 'DM Sans',
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '500',
    color: '#95A0B8',
    textTransform: 'uppercase',
  },
  wcNumber: {
    marginTop: 2,
    fontFamily: 'DM Sans',
    fontSize: 16,
    lineHeight: 24,
    color: '#00133D',
  },
});
