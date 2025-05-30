import React, {useMemo, useCallback} from 'react';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/core';

import {t, regionName, countryName} from '../../../common/locale';
import {ShareIcon, ListIcon} from '../../common/buttonIcons';

import Subheader from '../common/Subheader';
import TotalStats from '../common/TotalStats';
import ShareRegion from '../../shared/Share/Region/ShareRegion';

import shareImageDialog from '../../common/shareImage';
import {useOffscreenViewShot} from '../../common/OffscreenViewshot';

import {
  makePreferredRegionSelector,
  getRegionId,
} from '../../../app/preferencesModule';

import ddIcon from '../../../assets/icons/dropdown.png';
import markerIcon from '../../../assets/icons/marker.png';

import {makeCountryRegionsSelector} from '../../../app/regionsModule';

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
  const nav = useNavigation();

  const regionIdSelector = useMemo(makePreferredRegionSelector, []);
  const regionId = useSelector((s) => regionIdSelector(s, country.code));

  const regionsSelector = useMemo(makeCountryRegionsSelector, []);
  const {data: regions} = useSelector((s) => regionsSelector(s, country.code));

  const region = useMemo(() => {
    if (!regions) {
      return null;
    }
    return regions.find((r) => getRegionId(r) === regionId) || regions[0];
  }, [regions, regionId]);

  const changeRegion = useCallback(
    () =>
      nav.navigate('RegionSelect', {
        code: country.code,
        name: countryName(country),
      }),
    [nav, country],
  );

  const openList = useCallback(
    () =>
      nav.navigate('Regions', {code: country.code, name: countryName(country)}),
    [country, nav],
  );

  const name = regionName(region);

  const captured = useCallback(
    (tmp) => shareImageDialog(tmp, t('stats.regionShare.title', {name})),
    [name],
  );

  const [sharing, share, capture] = useOffscreenViewShot(captured);

  if (!region) {
    return null;
  }

  return (
    <Container>
      <Subheader
        title={name}
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
          active={+region.total_active}
          deaths_new={+region.new_deaths}
          total_new={+region.new_cases}
        />
        <Actions>
          <ShareBtn onPress={share} icon={<ShareIcon />}>
            {t('stats.country.share')}
          </ShareBtn>
          <ListBtn onPress={openList} icon={<ListIcon color="white" />}>
            {t('stats.regions.all')}
          </ListBtn>
        </Actions>
      </Content>
      <ShareRegion
        sharing={sharing}
        onCapture={capture}
        region={region}
        code={country.code}
      />
    </Container>
  );
}
