import React, {useMemo} from 'react';
import {useTheme} from 'styled-components/native';
import {useSelector} from 'react-redux';

import {t} from '../../../common/locale';
import useStatsBar from '../../shared/useStatsBar';

import {makeCountryRatingSelector} from '../../../app/statsModule';

import SlidingBlocks from '../../shared/Stats/TotalStats/SlidingBlocks';

import {
  StatsContainer,
  Bar,
  StatsNum,
  StatsNumXl,
} from './TotalStatsExtended.styles';

const aligns = ['flex-start', 'center', 'flex-end'];

export default function TotalStatsExtended({country}) {
  const theme = useTheme();
  const stats = useStatsBar(
    +country.total,
    +country.recovered,
    +country.deaths,
    +country.active,
  );

  const ratingSelector = useMemo(makeCountryRatingSelector, []);
  const rating = useSelector((s) => ratingSelector(s, country.code));

  const elements = [];

  if (+country.recovered) {
    elements.push(
      <StatsNum
        caption={t('stats.recovered')}
        number={country.recovered}
        todayColor={theme.recoveredColor}
        pos={rating.recovered}
        align={aligns[elements.length]}
      />,
    );
  }
  if (+country.active) {
    elements.push(
      <StatsNum
        caption={t('stats.active')}
        number={country.active}
        todayColor={theme.activeColor}
        align={aligns[elements.length]}
        pos={rating.active}
      />,
    );
  }

  if (+country.deaths) {
    elements.push(
      <StatsNum
        caption={t('stats.deaths')}
        number={country.deaths}
        today={country.deaths_new}
        todayColor={theme.deathsColor}
        align={aligns[elements.length]}
        pos={rating.deaths}
      />,
    );
  }

  const fr = stats[0].fraction;
  return (
    <StatsContainer>
      <StatsNumXl
        caption={t('stats.total')}
        number={country.total}
        pos={rating.total}
      />
      <Bar items={stats} height={10} />
      <SlidingBlocks
        fraction={fr}
        left={elements[0] || null}
        center={elements[1] || null}
        right={elements[2] || null}
      />
    </StatsContainer>
  );
}
