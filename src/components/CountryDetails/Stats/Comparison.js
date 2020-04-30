import React, {useState, useMemo, useCallback} from 'react';

import {t, countryName} from '../../../common/locale';
import {useSelector} from 'react-redux';

import worldIcon from '../../../assets/icons/earth.png';
import countryIcons from '../../common/countryIcons';
import useToggle from '../../common/useToggle';

import CountrySelectModal from '../../shared/CountrySelect/CountrySelectModal';

import {makeCountrySelector} from '../../../app/statsModule';

import {
  Container,
  Headline,
  CountryIcon,
  CountryName,
  Metrica,
  Percent,
  MetricaName,
  Country,
} from './Comparison.styles';

const getPercent = (fraction, total) =>
  `${((100 * fraction) / total).toFixed(2)}%`;

export default function Comparison({left, world}) {
  const [modal, toggleModal] = useToggle(false);

  const [rightId, setRightId] = useState(null);
  const selectRight = useCallback((id) => setRightId(id), []);

  const countrySelector = useMemo(makeCountrySelector, []);
  const right = useSelector((s) => countrySelector(s, rightId)) || world;

  const leftIcon = countryIcons[left.code];
  const rightIcon = rightId ? countryIcons[right.code] : worldIcon;
  return (
    <Container>
      <Headline>
        <Country activeOpacity={1}>
          <CountryIcon source={leftIcon} />
          <CountryName>{countryName(left)}</CountryName>
        </Country>
        <Country align="flex-end" onPress={toggleModal}>
          <CountryIcon source={rightIcon} />
          <CountryName link>
            {rightId ? countryName(right) : t('country.all.world')}
          </CountryName>
        </Country>
      </Headline>
      <Metrica>
        <Percent>{getPercent(left.recovered, left.total)}</Percent>
        <MetricaName>{t('country.all.recoveryRate')}</MetricaName>
        <Percent right>{getPercent(right.recovered, right.total)}</Percent>
      </Metrica>
      <Metrica>
        <Percent>{getPercent(left.deaths, left.total)}</Percent>
        <MetricaName>{t('country.all.deathsRate')}</MetricaName>
        <Percent right>{getPercent(right.deaths, right.total)}</Percent>
      </Metrica>
      <CountrySelectModal
        selected={rightId}
        onSelect={selectRight}
        visible={modal}
        onHide={toggleModal}
      />
    </Container>
  );
}
