import {StyleSheet, Dimensions} from 'react-native';

const {height} = Dimensions.get('window');

export default StyleSheet.create({
  safeArea: {
    backgroundColor: 'white',
  },
  scrollContent: {
    backgroundColor: 'white',
  },
  header: {
    paddingTop: 12,
    paddingLeft: 24,
  },
  title: {
    fontFamily: 'DM Sans',
    fontSize: 24,
    lineHeight: 36,
    fontWeight: '500',
    color: '#00133D',
  },
  subtitle: {
    marginTop: 2,
    fontFamily: 'DM Sans',
    fontSize: 14,
    lineHeight: 20,
    color: '#95A0B8',
  },
  world: {
    marginTop: 12,
  },
});
