import React, {useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from 'styled-components/native';

import {formatDate, countryName, t} from '../../../common/locale';

import LegendItem from '../../shared/Legend/LegendItem';
import StatsBar from '../../shared/StatsBar/StatsBar';
import useRegionStats from '../../shared/useRegionStats';

import Subheader from '../common/Subheader';
import HeroStats from '../common/HeroStats';
import PageLink from '../common/PageLink';

import changeIcon from './change.png';
import countryIcons from '../../shared/countryIcons';

import {
  Container,
  Legend,
  Bar,
  Icon,
  ChangeIcon,
  UpdatedText,
} from './PrimaryCountry.styles';

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
  const theme = useTheme();

  return (
    <Container>
      <Subheader
        icon={icon && <Icon source={icon} />}
        title={countryName(country)}
        activeOpacity={0.5}
        onPress={changeCountry}>
        <ChangeIcon source={changeIcon} />
      </Subheader>
      <HeroStats number={country.total} today={+country.total_new} />
      <Legend>
        <LegendItem
          large
          color={theme.activeColor}
          title={t('stats.active')}
          number={country.active}
        />
        <LegendItem
          large
          color={theme.recoveredColor}
          title={t('stats.recovered')}
          number={country.recovered}
        />
        <LegendItem
          large
          color={theme.deathsColor}
          title={t('stats.deaths')}
          number={country.deaths}
          today={+country.deaths_new}
        />
      </Legend>
      <Bar>
        <StatsBar items={stats} />
      </Bar>
      {!!country.cities && (
        <PageLink route="Cities" params={{country: country.code}}>
          {t('stats.country.regionsButton')}
        </PageLink>
      )}
      <UpdatedText>
        {t('stats.country.updatedAt', {date: formatDate(country.updated)})}
      </UpdatedText>
    </Container>
  );
}
