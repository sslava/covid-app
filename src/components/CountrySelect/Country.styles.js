import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    height: 44,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
    borderBottomColor: '#F3F3F3',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#F3F3F3',
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Ubuntu',
    fontWeight: '600',
    fontSize: 15,
    lineHeight: 20,
    color: '#252A34',
  },
  flag: {
    height: 24,
    width: 24,
    borderRadius: 12,
    marginRight: 10,
    resizeMode: 'cover',
  },
  selected: {
    marginRight: 10,
    tintColor: '#087ED9',
    width: 16,
    height: 16,
  },
});
