import React, {useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, Image} from 'react-native';

import {formatDate, countryName, t} from '../../../common/locale';
import {legendColor} from '../../shared/uikit';

import LegendItem from '../../shared/Legend/LegendItem';
import StatsBar from '../../shared/StatsBar/StatsBar';
import useRegionStats from '../../shared/useRegionStats';

import Subheader from '../common/Subheader';
import HeroStats from '../common/HeroStats';
import PageLink from '../common/PageLink';

import changeIcon from './change.png';
import countryIcons from '../../shared/countryIcons';

import styles from './PrimaryCountry.styles';

export default function PrimaryCountry({country}) {
  const nav = useNavigation();
  const stats = useRegionStats(
    country.total,
    country.recovered,
    country.deaths,
    country.active,
  );

  const changeCountry = useCallback(() => {
    nav.navigate('CountrySelect');
  }, [nav]);

  const icon = countryIcons[country.code];

  return (
    <View style={styles.container}>
      <Subheader
        icon={icon && <Image style={styles.icon} source={icon} />}
        title={countryName(country)}
        activeOpacity={0.5}
        onPress={changeCountry}>
        <Image source={changeIcon} style={styles.changeIcon} />
      </Subheader>
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
      {!!country.cities && (
        <PageLink route="Cities" params={{country: country.code}}>
          {t('stats.country.regionsButton')}
        </PageLink>
      )}
      <Text style={styles.updatedText}>
        {t('stats.country.updatedAt', {date: formatDate(country.updated)})}
      </Text>
    </View>
  );
}
