import React, {useRef} from 'react';
import {Animated, Dimensions} from 'react-native';

import {range} from '../../../common/utils';

import GraphPage from './GraphPage';

const {width} = Dimensions.get('window');

import {Container, ScrollIndicator, Dot} from './Graphs.styles';

import {
  lastN,
  composeGraph,
  sortBy,
  valueField,
} from '../../shared/Stats/historyGraph';

const deltaConfirmed = composeGraph(
  valueField((h) => +h.delta_confirmed),
  sortBy(),
  lastN(30),
);

const totalCases = composeGraph(
  valueField((h) => +h.total_cases),
  sortBy(),
  lastN(30),
);

const totalDeaths = composeGraph(
  valueField((h) => +h.total_deaths),
  sortBy(),
  lastN(30),
);

export default function Graphs({country, history}) {
  const scrollX = useRef(new Animated.Value(0));
  if (!history || !history.length) {
    return null;
  }
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
          history={history}
        />
        <GraphPage title="totalCases" getGraph={totalCases} history={history} />
        <GraphPage
          title="totalDeaths"
          getGraph={totalDeaths}
          history={history}
        />
      </Animated.ScrollView>
      <ScrollIndicator>
        {range(3).map((i) => (
          <Dot
            key={i}
            style={{
              opacity: Animated.divide(scrollX.current, width).interpolate({
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
