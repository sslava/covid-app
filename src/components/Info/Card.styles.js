import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  cards: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    marginTop: 12,
  },
  cardOuter: {
    paddingLeft: 12,
    paddingRight: 12,
    width: '50%',
    marginBottom: 24,
  },
  card: {
    backgroundColor: '#265AD2',
    padding: 16,
    borderRadius: 5,
    height: 160,
    justifyContent: 'space-between',
  },
  cardImage: {
    width: 36,
    height: 36,
  },
  cardTitle: {
    fontFamily: 'DM Sans',
    fontWeight: '500',
    fontSize: 18,
    lineHeight: 24,
    color: 'white',
  },
  cardDesc: {
    marginTop: 4,
    fontFamily: 'DM Sans',
    fontSize: 14,
    lineHeight: 20,
    color: '#5B95EA',
  },
});
