import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    borderBottomColor: '#F3F3F3',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#F3F3F3',
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  expanded: {
    backgroundColor: '#FFF5F3',
  },
  button: {
    paddingHorizontal: 20,
    height: 44,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
  },
  title: {
    fontFamily: 'Ubuntu',
    fontWeight: '600',
    fontSize: 15,
    lineHeight: 20,
    color: '#252A34',
  },
  today: {
    marginLeft: 3,
    fontSize: 13,
    lineHeight: 24,
    fontWeight: '600',
    color: '#FFB663',
  },
  openIcon: {
    position: 'absolute',
    right: 20,
    top: 14,
    tintColor: '#A0A2AF',
    width: 20,
    height: 20,
    marginLeft: 8,
  },
});
