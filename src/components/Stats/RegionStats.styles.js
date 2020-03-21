import {StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    paddingRight: 20,
  },
  pieStats: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  pieContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: width - 150,
    height: width - 150,
    position: 'relative',
  },
  total: {
    position: 'absolute',
    flex: 1,
    width: '100%',
  },
  totalNumber: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: '600',
    fontFamily: 'DM Sans',
    color: '#00133D',
  },
  totalCaption: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'DM Sans',
    color: '#95A0B8',
  },
  numberStats: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    paddingLeft: 5,
    paddingRight: 5,
  },
  numberBlock: {
    flexGrow: 1,
    flex: 1,
    justifyContent: 'space-between',
    height: 92,
    margin: 10,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
    paddingBottom: 16,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#E2E5E7',
  },
  numberBlockLine: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  numberBlockColor: {
    width: 14,
    height: 14,
    marginRight: 8,
  },
  numberBlockNumber: {
    fontFamily: 'DM Sans',
    fontSize: 20,
    fontWeight: '500',
    color: '#00133D',
  },
  numberBlockTitle: {
    color: '#95A0B8',
    fontFamily: 'DM Sans',
    fontSize: 14,
  },
});
