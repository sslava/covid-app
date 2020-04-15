import React, {useRef, useEffect} from 'react';
import {Animated, Easing} from 'react-native';

import {Left, Right, PrimaryNumber} from '../Legend/controls';

import openIcon from '../../../assets/icons/open_grey.png';

import {Container, Button, Title, Today, Icon} from './RegionListItem.styles';

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
    <Button onPress={onPress} activeOpacity={0.5}>
      <Left>
        <Title>{name}</Title>
      </Left>
      <Right skipToday={skipToday}>
        <PrimaryNumber value={total} />
        {!skipToday && <Today num={+today} />}
      </Right>
      <Icon source={openIcon} style={{transform: [{rotate}]}} />
    </Button>
  );
}

export function RegionListItem({children, expanded}) {
  return <Container expanded={expanded}>{children}</Container>;
}
