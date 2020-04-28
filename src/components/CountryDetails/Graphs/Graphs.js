import React, {useRef} from 'react';
import {useTheme} from 'styled-components/native';

import {Animated, Dimensions} from 'react-native';

import {range} from '../../../common/utils';

import GraphPage from './GraphPage';

import {deltaConfirmed, totalCases, totalDeaths} from './model';

import {Container, ScrollIndicator, Dot} from './Graphs.styles';

const {width} = Dimensions.get('window');

export default function Graphs({country, history}) {
  const theme = useTheme();
  const scrollX = useRef(new Animated.Value(0));

  if (!history || !history.length) {
    return null;
  }

  const fr = Animated.divide(scrollX.current, width);
  return (
    <Container>
      <Animated.ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX.current}}}],
          {useNativeDriver: true},
        )}>
        <GraphPage
          title="deltaConfirmed"
          getGraph={deltaConfirmed}
          color={theme.activeColor}
          history={history}
        />
        <GraphPage
          title="totalCases"
          getGraph={totalCases}
          color={theme.activeColor}
          history={history}
        />
        <GraphPage
          title="totalDeaths"
          getGraph={totalDeaths}
          color={theme.deathsColor}
          history={history}
        />
      </Animated.ScrollView>
      <ScrollIndicator>
        {range(3).map((i) => (
          <Dot
            key={i}
            style={{
              opacity: fr.interpolate({
                inputRange: [i - 1, i, i + 1],
                outputRange: [0.3, 1, 0.3],
                extrapolate: 'clamp',
              }),
            }}
          />
        ))}
      </ScrollIndicator>
    </Container>
  );
}
