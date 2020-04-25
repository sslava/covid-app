import React, {useMemo, useCallback} from 'react';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/core';

import {t, regionName, countryName} from '../../../common/locale';
import {ShareIcon, ListIcon} from '../../common/buttonIcons';

import Subheader from '../common/Subheader';
import TotalStats from '../common/TotalStats';

import {
  preferredRegionSelector,
  getRegionId,
} from '../../../app/preferencesModule';

import ddIcon from '../../../assets/icons/dropdown.png';
import markerIcon from '../../../assets/icons/marker.png';

import {
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

export default function Region({country, code}) {
  const nav = useNavigation();

  const regionId = useSelector(preferredRegionSelector);
  const regionsSelector = useMemo(makeCountryRegionsSelector);
  const {data: regions} = useSelector((s) => regionsSelector(s, code));

  const region = useMemo(() => {
    if (!regions) {
      return null;
    }
    return regions.find((r) => getRegionId(r) === regionId) || regions[0];
  }, [regions, regionId]);

  const changeRegion = useCallback(() => nav.navigate('RegionSelect'), [nav]);

  const openList = useCallback(
    () => nav.navigate('Regions', {name: countryName(country)}),
    [country, nav],
  );

  if (!region) {
    return null;
  }

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
          active={getRegionActiveCases(region)}
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
