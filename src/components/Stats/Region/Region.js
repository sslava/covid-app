import React, {useEffect, useMemo, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/core';

import {t, regionName} from '../../../common/locale';
import {ShareIcon, ListIcon} from '../../common/buttonIcons';

import Subheader from '../common/Subheader';
import TotalStats from '../common/TotalStats';

import ddIcon from '../../../assets/icons/dropdown.png';
import markerIcon from '../../../assets/icons/marker.png';

import {
  fetchCountryRegions,
  makeCountryRegionsSelector,
} from '../../../app/regionsModule';

import {
  Container,
  Content,
  Marker,
  DDIcon,
  Actions,
  ShareBtn,
  ListBtn,
} from './Region.styles';

const a = {
  country_id: '1',
  id: '1',
  isolation: '0',
  lat: '',
  lng: '',
  new_cases: '0',
  new_deaths: '0',
  region_name: 'Москва',
  region_name_en: 'Moskva',
  source: '',
  source_id: '',
  total_active: '0',
  total_cases: '36897',
  total_deaths: '325',
  total_recovered: '2735',
  total_tests: '0',
  updated_at: '2020-04-24 10:35:00',
};

const regionId = 'Moskva';

export default function Region({code, countryName}) {
  const nav = useNavigation();

  const dispatch = useDispatch();
  useEffect(() => {
    if (code) {
      dispatch(fetchCountryRegions(code));
    }
  }, [code, dispatch]);
  const regionsSelector = useMemo(makeCountryRegionsSelector);
  const {data: regions} = useSelector((s) => regionsSelector(s, code));

  const region = useMemo(
    () => regions && regions.find((r) => r.region_name_en === regionId),
    [regions],
  );

  const openList = useCallback(
    () => nav.navigate('Regions', {code, countryName}),
    [code, countryName, nav],
  );

  if (!region) {
    return null;
  }
  const active =
    region.total_cases - region.total_recovered - region.total_deaths;

  return (
    <Container>
      <Subheader
        title={regionName(region)}
        icon={<Marker source={markerIcon} />}
        // onPress={changeCountry}
        activeOpacity={0.7}>
        <DDIcon source={ddIcon} />
      </Subheader>
      <Content>
        <TotalStats
          total={+region.total_cases}
          recovered={+region.total_recovered}
          deaths={+region.total_deaths}
          active={active}
          deaths_new={+region.new_deaths}
          total_new={+region.new_cases}
        />
        <Actions>
          <ShareBtn icon={<ShareIcon />}>{t('stats.country.share')}</ShareBtn>
          <ListBtn onPress={openList} icon={<ListIcon />}>
            {t('stats.regions.all')}
          </ListBtn>
        </Actions>
      </Content>
    </Container>
  );
}
