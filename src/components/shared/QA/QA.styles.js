import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#003CBF',
    paddingTop: 24,
    paddingLeft: 24,
    paddingRight: 24,
  },
  block: {
    marginBottom: 16,
    backgroundColor: '#265AD2',
    borderRadius: 5,
  },
  button: {
    position: 'relative',
    flexDirection: 'row',
    paddingLeft: 16,
    paddingRight: 32,
    paddingTop: 16,
    paddingBottom: 16,
  },
  questionIcon: {
    width: 24,
    height: 24,
    marginRight: 12,
  },
  arrowDown: {
    position: 'absolute',
    right: 16,
    top: 20,
    width: 18,
    height: 18,
  },
  question: {
    fontFamily: 'Ubuntu',
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '500',
    color: 'white',
  },
  answer: {
    paddingTop: 8,
    paddingBottom: 24,
    paddingLeft: 16,
    paddingRight: 16,
  },
  subTitle: {
    fontFamily: 'Ubuntu',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 24,
    color: '#BFD6F6',
  },
  subAnswer: {
    marginTop: 10,
  },
  answerText: {
    fontFamily: 'Ubuntu',
    color: '#BFD6F6',
    fontSize: 14,
    lineHeight: 24,
  },
  ul: {
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 10,
  },
  li: {
    marginTop: 10,
  },
});
