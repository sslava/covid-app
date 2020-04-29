import React, {useRef} from 'react';
import {useTheme} from 'styled-components/native';

import {Animated, Dimensions} from 'react-native';

import {range} from '../../../common/utils';

import BarChartSlide from './BarChartSlide';
import TotalsSlide from './TotalsSlide';

import {deltaConfirmed, deltaDeaths} from './model';

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
        <TotalsSlide title="stackedBar" history={history} />
        <BarChartSlide
          title="deltaCases"
          getChartData={deltaConfirmed}
          color={theme.activeColor}
          history={history}
        />
        <BarChartSlide
          title="deltaDeaths"
          getChartData={deltaDeaths}
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
