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
    width: width - 120,
    height: width - 120,
    position: 'relative',
  },
  total: {
    position: 'absolute',
    flex: 1,
    width: '100%',
  },
  totalNumber: {
    textAlign: 'center',
    fontSize: 50,
  },
  totalCaption: {
    fontSize: 20,
    textAlign: 'center',
    color: '#707492',
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
    height: 100,
    margin: 10,
    padding: 15,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#e1eafc',
  },
});
