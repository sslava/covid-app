import React, {useEffect, useMemo, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/core';

import {t, regionName, countryName} from '../../../common/locale';
import {ShareIcon, ListIcon} from '../../common/buttonIcons';

import Subheader from '../common/Subheader';
import TotalStats from '../common/TotalStats';

import {
  preferredCountrySelector,
  preferredRegionSelector,
  getRegionId,
} from '../../../app/preferencesModule';

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

export default function Region({country}) {
  const dispatch = useDispatch();
  const nav = useNavigation();
  const countryCode = useSelector(preferredCountrySelector);
  const regionId = useSelector(preferredRegionSelector);

  const cname = countryName(country);

  // FIXME: refresh
  useEffect(() => {
    if (countryCode) {
      dispatch(fetchCountryRegions(countryCode));
    }
  }, [countryCode, dispatch]);

  const regionsSelector = useMemo(makeCountryRegionsSelector);
  const {data: regions} = useSelector((s) => regionsSelector(s, countryCode));

  const region = useMemo(() => {
    if (!regions) {
      return null;
    }
    return regions.find((r) => getRegionId(r) === regionId) || regions[0];
  }, [regions, regionId]);

  const changeRegion = useCallback(() => nav.navigate('RegionSelect'), [nav]);

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
          {/* <ShareBtn icon={<ShareIcon />}>{t('stats.country.share')}</ShareBtn> */}
          <ListBtn onPress={openList} icon={<ListIcon />}>
            {t('stats.regions.all')}
          </ListBtn>
        </Actions>
      </Content>
    </Container>
  );
}
