import React, {useRef, useEffect} from 'react';
import {View, Text, Animated, Easing, TouchableOpacity} from 'react-native';

import SecondaryNumber from '../SecondaryNumber';

import openIcon from '../../../assets/icons/open_grey.png';
import {Left, Right, PrimaryNumber} from '../Legend/controls';

import styles from './RegionListItem.styles';

export function RegionListToggle({
  name,
  total,
  today,
  onPress,
  expanded,
  skipToday,
}) {
  const value = useRef(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(value.current, {
      toValue: expanded ? 1 : 0,
      duration: 100,
      easing: Easing.inOut(Easing.quad),
      useNativeDriver: true,
    }).start();
  }, [expanded]);

  const rotate = value.current.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '90deg'],
  });

  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.button}
      activeOpacity={0.5}>
      <Left>
        <Text style={styles.title}>{name}</Text>
      </Left>
      <Right skipToday={skipToday}>
        <PrimaryNumber value={total} style={styles.number} />
        {!skipToday && <SecondaryNumber num={+today} style={styles.today} />}
      </Right>
      <Animated.Image
        source={openIcon}
        style={[styles.openIcon, {transform: [{rotate}]}]}
      />
    </TouchableOpacity>
  );
}

export function RegionListItem({children, expanded}) {
  return (
    <View style={[styles.container, expanded && styles.expanded]}>
      {children}
    </View>
  );
}
