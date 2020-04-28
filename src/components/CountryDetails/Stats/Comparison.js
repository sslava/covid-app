import React from 'react';
import {useTheme} from 'styled-components/native';
import {View} from 'react-native';

import {t} from '../../../common/locale';

import worldIcon from '../../../assets/icons/earth.png';
import countryIcons from '../../common/countryIcons';

import {
  Container,
  Headline,
  CountryIcon,
  WorldIcon,
  Metrica,
  Percent,
  MetricaName,
  Vs,
} from './Comparison.styles';

const getPercent = (fraction, total) =>
  `${((100 * fraction) / total).toFixed(2)}%`;

export default function Comparison({country, world}) {
  const theme = useTheme();
  const countryIcon = countryIcons[country.code];
  return (
    <Container>
      <Headline>
        <View>{countryIcon && <CountryIcon source={countryIcon} />}</View>
        <Vs>{t('country.all.vs')}</Vs>
        <WorldIcon source={worldIcon} />
      </Headline>
      <Metrica>
        <Percent color={theme.recoveredColor}>
          {getPercent(country.recovered, country.total)}
        </Percent>
        <MetricaName>{t('country.all.recoveryRate')}</MetricaName>
        <Percent color={theme.recoveredColor} right>
          {getPercent(world.recovered, world.total)}
        </Percent>
      </Metrica>
      <Metrica>
        <Percent color={theme.deathsColor}>
          {getPercent(country.deaths, country.total)}
        </Percent>
        <MetricaName>{t('country.all.deathsRate')}</MetricaName>
        <Percent color={theme.deathsColor} right>
          {getPercent(world.deaths, world.total)}
        </Percent>
      </Metrica>
    </Container>
  );
}
