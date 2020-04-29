import React, {useMemo} from 'react';
import {useTheme} from 'styled-components/native';
import {useSelector} from 'react-redux';

import {t} from '../../../common/locale';
import useStatsBar from '../../shared/useStatsBar';

import SlidingBlocks from '../../shared/Stats/TotalStats/SlidingBlocks';

import {
  StatsContainer,
  Bar,
  StatsNum,
  StatsNumXl,
} from './TotalStatsExtended.stykes';
import {makeCountryRatingSelector} from '../../../app/statsModule';

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
        left={
          <StatsNum
            caption={t('stats.recovered')}
            number={country.recovered}
            todayColor={theme.recoveredColor}
            pos={rating.recovered}
          />
        }
        center={
          <StatsNum
            caption={t('stats.active')}
            number={country.active}
            todayColor={theme.activeColor}
            align="center"
            pos={rating.active}
          />
        }
        right={
          <StatsNum
            caption={t('stats.deaths')}
            number={country.deaths}
            today={country.deaths_new}
            todayColor={theme.deathsColor}
            align="flex-end"
            pos={rating.deaths}
          />
        }
      />
    </StatsContainer>
  );
}
