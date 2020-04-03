import React from 'react';
import {t} from 'i18n-js';
import {View, Text} from 'react-native';

import {formatDate} from '../../../common/utils';
import {legendColor} from '../../shared/uikit';

import LegendItem from '../../shared/Legend/LegendItem';
import StatsBar from '../../shared/StatsBar/StatsBar';
import useRegionStats from '../../shared/useRegionStats';

import Subheader from '../common/Subheader';
import HeroStats from '../common/HeroStats';
import PageLink from '../common/PageLink';

import ruIcon from './ru.png';

import styles from './RussiaStats.styles';

export default function RussiaStats({russia, hasCities}) {
  const stats = useRegionStats(
    russia.total,
    russia.recovered,
    russia.deaths,
    russia.active,
  );

  return (
    <View style={styles.container}>
      <Subheader icon={ruIcon}>{t('stats.russia.title')}</Subheader>
      <HeroStats number={russia.total} today={+russia.total_new} />
      <View style={styles.legend}>
        <LegendItem
          color={legendColor.Active}
          title={t('stats.active')}
          numberStyle={styles.numberStyle}
          number={russia.active}
        />
        <LegendItem
          color={legendColor.Recovered}
          title={t('stats.recovered')}
          numberStyle={styles.numberStyle}
          number={russia.recovered}
        />
        <LegendItem
          color={legendColor.Deaths}
          title={t('stats.deaths')}
          number={russia.deaths}
          numberStyle={styles.numberStyle}
          today={+russia.deaths_new}
        />
      </View>
      <View style={styles.bar}>
        <StatsBar items={stats} />
      </View>
      {!!hasCities && (
        <PageLink route="Cities">{t('stats.russia.regionsButton')}</PageLink>
      )}
      <Text style={styles.updatedText}>
        По состоянию на {formatDate(russia.updated)}
      </Text>
    </View>
  );
}
