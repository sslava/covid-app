import React from 'react';
import {t} from 'i18n-js';
import {View, Text} from 'react-native';

import {formatDate} from '../../../common/utils';
import {legendColor} from '../../shared/uikit';

import LegendItem from '../../shared/Legend/LegendItem';
import StatsBar from '../../shared/StatsBar/StatsBar';
import useRegionStats from '../../shared/useRegionStats';
import {countryName} from '../../shared/I18n';

import Subheader from '../common/Subheader';
import HeroStats from '../common/HeroStats';
import PageLink from '../common/PageLink';

import ruIcon from './ru.png';

import styles from './PrimaryCountry.styles';

export default function PrimaryCountry({country, hasCities}) {
  const stats = useRegionStats(
    country.total,
    country.recovered,
    country.deaths,
    country.active,
  );
  return (
    <View style={styles.container}>
      <Subheader icon={ruIcon}>{countryName(country)}</Subheader>
      <HeroStats number={country.total} today={+country.total_new} />
      <View style={styles.legend}>
        <LegendItem
          color={legendColor.Active}
          title={t('stats.active')}
          numberStyle={styles.numberStyle}
          number={country.active}
        />
        <LegendItem
          color={legendColor.Recovered}
          title={t('stats.recovered')}
          numberStyle={styles.numberStyle}
          number={country.recovered}
        />
        <LegendItem
          color={legendColor.Deaths}
          title={t('stats.deaths')}
          number={country.deaths}
          numberStyle={styles.numberStyle}
          today={+country.deaths_new}
        />
      </View>
      <View style={styles.bar}>
        <StatsBar items={stats} />
      </View>
      {!!hasCities && (
        <PageLink route="Cities">{t('stats.country.regionsButton')}</PageLink>
      )}
      <Text style={styles.updatedText}>
        {t('stats.country.updatedAt', {date: formatDate(country.updated)})}
      </Text>
    </View>
  );
}
