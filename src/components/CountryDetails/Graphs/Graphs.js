import React, {useRef} from 'react';
import {useTheme} from 'styled-components/native';

import {Animated, Dimensions} from 'react-native';

import {range} from '../../../common/utils';
import {t} from '../../../common/locale';

import BarChartSlide from './BarChartSlide';
import TotalsSlide from './TotalsSlide';

import {activeDaily, deathsDaily, totalActive, hasTotalActive} from './model';

import {Container, ScrollIndicator, Dot} from './Graphs.styles';

const {width} = Dimensions.get('window');

export default function Graphs({country, history}) {
  const theme = useTheme();
  const scrollX = useRef(new Animated.Value(0));

  if (!history || !history.length) {
    return null;
  }
  const fr = Animated.divide(scrollX.current, width);

  const hasActive = hasTotalActive(history);

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
        {hasActive && (
          <TotalsSlide
            title={t('country.slides.totals')}
            country={country}
            history={history}
          />
        )}
        <BarChartSlide
          title={t('country.slides.dailyActive')}
          getChartData={activeDaily}
          color={theme.activeColor}
          country={country}
          history={history}
        />
        <BarChartSlide
          title={t('country.slides.dailyDeaths')}
          getChartData={deathsDaily}
          color={theme.deathsColor}
          country={country}
          history={history}
        />
        {hasActive && (
          <BarChartSlide
            title={t('country.slides.totalActive')}
            getChartData={totalActive}
            color={theme.activeColor}
            country={country}
            history={history}
          />
        )}
      </Animated.ScrollView>
      <ScrollIndicator>
        {range(hasActive ? 4 : 2).map((i) => (
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
