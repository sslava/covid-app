import React, {useRef, useEffect} from 'react';
import {View, Text, Animated, Easing, TouchableOpacity} from 'react-native';

import {formatNumber} from '../../../common/utils';

import SecondaryNumber from '../SecondaryNumber';

import openIcon from '../../../assets/icons/open_grey.png';

import styles from './RegionListItem.styles';

export function RegionListToggle({name, total, today, onPress, expanded}) {
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
      <Text style={styles.title}>{name}</Text>
      <View style={styles.numbers}>
        <Text style={styles.number}>
          {formatNumber(total)}
          <SecondaryNumber num={+today} style={styles.today} />
        </Text>
        <Animated.Image
          source={openIcon}
          style={[styles.openIcon, {transform: [{rotate}]}]}
        />
      </View>
    </TouchableOpacity>
  );
}

export function RegionListItem({children, expanded}) {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: expanded ? '#FFF5F3' : '#ffffff',
        },
      ]}>
      {children}
    </View>
  );
}
