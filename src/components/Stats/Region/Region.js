import React, {useEffect, useMemo, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/core';

import {t, regionName, countryName} from '../../../common/locale';
import {ShareIcon, ListIcon} from '../../common/buttonIcons';

import Subheader from '../common/Subheader';
import TotalStats from '../common/TotalStats';

import ddIcon from '../../../assets/icons/dropdown.png';
import markerIcon from '../../../assets/icons/marker.png';

import {
  fetchCountryRegions,
  makeCountryRegionsSelector,
  getRegionActiveCases,
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

export default function Region({country}) {
  const nav = useNavigation();
  const cname = countryName(country);

  const dispatch = useDispatch();
  useEffect(() => {
    if (country.code) {
      dispatch(fetchCountryRegions(country.code));
    }
  }, [country.code, dispatch]);
  const regionsSelector = useMemo(makeCountryRegionsSelector);
  const {data: regions} = useSelector((s) => regionsSelector(s, country.code));

  const region = useMemo(
    () => regions && regions.find((r) => r.region_name_en === regionId),
    [regions],
  );
  const changeRegion = useCallback(
    () => nav.navigate('RegionSelect', {code: country.code}),
    [nav, country.code],
  );
  const openList = useCallback(() => nav.navigate('Regions', {name: cname}), [
    cname,
    nav,
  ]);

  if (!region) {
    return null;
  }
  const active = getRegionActiveCases(region);

  return (
    <Container>
      <Subheader
        title={regionName(region)}
        icon={<Marker source={markerIcon} />}
        onPress={changeRegion}
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
