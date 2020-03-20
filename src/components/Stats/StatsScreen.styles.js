import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  stats: {},
  block: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
  },
  all: {
    fontSize: 80,
    fontWeight: '600',
    color: 'olive',
  },
  deaths: {
    fontSize: 60,
    fontWeight: '600',
    color: 'tomato',
  },
  recovered: {
    fontSize: 60,
    fontWeight: '600',
    color: 'grey',
  },
  info: {
    fontSize: 20,
    fontWeight: '600',
  },
  buttons: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    paddingLeft: 5,
    paddingRight: 5,
  },
  button: {
    borderRadius: 10,
    flexGrow: 1,
    flex: 1,
    height: 100,
    margin: 10,
    padding: 15,
    flexDirection: 'column-reverse',
  },
  buttonText: {
    color: 'rgb(242,242, 247)',
    fontSize: 18,
    fontWeight: '800',
  },
  orange: {
    backgroundColor: 'rgb(255, 140, 0)',
  },
  green: {
    backgroundColor: 'rgb(52, 199, 89)',
  },
  indigo: {
    backgroundColor: 'rgb(88, 86, 214)',
  },
  purple: {
    backgroundColor: 'rgb(175, 82, 222)',
  },
});
