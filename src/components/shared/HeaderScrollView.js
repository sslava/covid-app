import React, {Component} from 'react';
import {View, ScrollView, Text, Animated, Dimensions} from 'react-native';

import Fade from './Fade';

import styles from './HeaderScrollView.styles';

const {height} = Dimensions.get('window');

export default class HeaderScrollView extends Component {
  static defaultProps = {
    title: '',
  };

  state = {
    headerHeight: 0,
    headerY: 0,
    isHeaderScrolled: false,
  };

  onLayout = ({nativeEvent}) => {
    this.setState({
      headerHeight: nativeEvent.layout.height,
      headerY: nativeEvent.layout.y,
    });
  };

  scrollVal = new Animated.Value(0);

  handleScroll = ({nativeEvent}) => {
    const {headerHeight, headerY, isHeaderScrolled} = this.state;
    const scrolled = headerHeight + headerY - 8 < nativeEvent.contentOffset.y;

    if ((isHeaderScrolled && !scrolled) || (!isHeaderScrolled && scrolled)) {
      this.setState({isHeaderScrolled: scrolled});
    }
  };

  render() {
    const {children, title} = this.props;
    const {isHeaderScrolled} = this.state;

    const fontSize = this.scrollVal.interpolate({
      inputRange: [-height, 0],
      outputRange: [34 * 1.75, 34],
      extrapolate: 'clamp',
    });

    const scroll = Animated.event(
      [{nativeEvent: {contentOffset: {y: this.scrollVal}}}],
      {listener: this.handleScroll},
    );

    return (
      <View style={styles.container}>
        <View style={styles.toolbar}>
          <Fade visible={isHeaderScrolled}>
            <View style={[styles.header]}>
              <Text style={styles.headline}>{title}</Text>
            </View>
          </Fade>
        </View>
        <ScrollView onScroll={scroll} scrollEventThrottle={8}>
          <View>
            <Animated.Text
              style={[styles.title, {fontSize}]}
              onLayout={this.onLayout}>
              {title}
            </Animated.Text>
          </View>
          {children}
        </ScrollView>
      </View>
    );
  }
}
