import React, {useMemo} from 'react';
import {Dimensions} from 'react-native';

import {useTheme} from 'styled-components/native';
import {useSelector} from 'react-redux';

import {formatDate, t} from '../../../common/locale';
import {worldSelector} from '../../../app/statsModule';
import worldIcon from '../../../assets/icons/earth.png';

import Pie from '../../common/charts/PieChart/Pie';
import PercentCounter from './PercentCounter';
import Subheader from '../common/Subheader';
import HeroStats from '../common/HeroStats';

import {
  Container,
  Stats,
  Counters,
  UpdatedText,
  WorldIcon,
  Hero,
} from './WorldStats.styles';

const {width} = Dimensions.get('window');

const getPieData = (total, recovered, deaths, active, theme) => {
  return [
    {index: 0, number: active / total, fill: theme.activeColor},
    {index: 1, number: deaths / total, fill: theme.deathsColor},
    {index: 2, number: recovered / total, fill: theme.recoveredColor},
  ];
};

export default function WorldStats() {
  const theme = useTheme();
  const world = useSelector(worldSelector);

  const data = useMemo(
    () =>
      getPieData(
        world.total,
        world.recovered,
        world.deaths,
        world.active,
        theme,
      ),
    [world.total, world.recovered, world.deaths, world.active, theme],
  );
  return (
    <Container>
      <Subheader
        icon={<WorldIcon source={worldIcon} />}
        title={t('stats.global.title')}
      />
      <Hero>
        <HeroStats number={world.total} today={+world.total_new} />
      </Hero>
      <Stats>
        <Pie
          data={data}
          size={width / 2 - 40}
          innerRadius={67}
          blankColor={theme.secondaryBackground}
          innerColor={theme.primaryBackground}
        />
        <Counters>
          <PercentCounter
            title={t('stats.active')}
            number={world.active}
            color={theme.activeColor}
          />
          <PercentCounter
            title={t('stats.recovered')}
            number={world.recovered}
            color={theme.recoveredColor}
          />
          <PercentCounter
            title={t('stats.deaths')}
            number={world.deaths}
            today={world.deaths_new}
            color={theme.deathsColor}
          />
        </Counters>
      </Stats>
      <UpdatedText>
        {t('stats.global.updatedAt', {date: formatDate(world.updated)})}
      </UpdatedText>
    </Container>
  );
}
