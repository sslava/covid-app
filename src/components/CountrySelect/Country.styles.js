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
  title: {
    fontFamily: 'Ubuntu',
    fontWeight: '600',
    fontSize: 15,
    lineHeight: 20,
    color: '#252A34',
  },
});
