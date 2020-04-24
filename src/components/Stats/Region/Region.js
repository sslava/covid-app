import React from 'react';

import {t} from '../../../common/locale';

import Subheader from '../common/Subheader';

import ddIcon from '../../../assets/icons/dropdown.png';
import markerIcon from '../../../assets/icons/marker.png';

import TotalStats from '../common/TotalStats';
import {ShareIcon, ListIcon} from '../../common/buttonIcons';

import {
  Container,
  Content,
  Marker,
  DDIcon,
  Actions,
  ShareBtn,
  CountryBtn,
} from './Region.styles';

export default function Region({code}) {
  const name = 'Ханты-Мансийский АО';
  return (
    <Container>
      <Subheader
        title={name}
        icon={<Marker source={markerIcon} />}
        // onPress={changeCountry}
        activeOpacity={0.7}>
        <DDIcon source={ddIcon} />
      </Subheader>
      <Content>
        <TotalStats
          total={1000}
          recovered={300}
          deaths={200}
          active={500}
          deaths_new={30}
        />
        <Actions>
          <ShareBtn icon={<ShareIcon />}>{t('stats.country.share')}</ShareBtn>
          <CountryBtn icon={<ListIcon />}>{t('stats.regions.all')}</CountryBtn>
        </Actions>
      </Content>
    </Container>
  );
}
