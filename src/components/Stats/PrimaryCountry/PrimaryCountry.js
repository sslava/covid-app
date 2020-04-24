import React, {useCallback, useMemo} from 'react';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import ddIcon from '../../../assets/icons/dropdown.png';

import {makeCountrySelector} from '../../../app/statsModule';
import {makeCounrtyHistorySelector} from '../../../app/historyModule';
import {countryName, t} from '../../../common/locale';

import Subheader from '../common/Subheader';
import TotalStats from '../common/TotalStats';
import Dynamic from './Blocks/Dynamic';
import ShareCountry from './Share/ShareCountry';

import {DetailsIcon, ShareIcon} from '../../common/buttonIcons';
import {useOffscreenViewShot} from '../../common/OffscreenViewshot';

import countryIcons from '../../common/countryIcons';
import shareImageDialog from '../../common/shareImage';

import {
  Container,
  Content,
  Icon,
  DDIcon,
  Actions,
  ShareBtn,
  CountryBtn,
} from './PrimaryCountry.styles';

export default function PrimaryCountry({code}) {
  const nav = useNavigation();

  const primarySelector = useMemo(makeCountrySelector);
  const country = useSelector((s) => primarySelector(s, code));

  const historySelector = useMemo(makeCounrtyHistorySelector);
  const {data: history} = useSelector((s) => historySelector(s, code));

  const changeCountry = useCallback(() => nav.navigate('CountrySelect'), [nav]);
  const openDetails = useCallback(() => nav.navigate('Country', {name, code}), [
    nav,
    name,
    code,
  ]);

  const name = countryName(country);

  const captured = useCallback(
    (tmp) =>
      shareImageDialog(tmp, t('stats.country.shareTitle', {country: name})),
    [name],
  );

  const [sharing, share, capture] = useOffscreenViewShot(captured);

  if (!country) {
    return null;
  }

  const countryIcon = countryIcons[country.code];

  return (
    <Container>
      <Subheader
        title={name}
        icon={countryIcon && <Icon source={countryIcon} />}
        activeOpacity={0.5}
        onPress={changeCountry}>
        <DDIcon source={ddIcon} />
      </Subheader>
      <Content>
        <Dynamic country={country} history={history} animated />
        <TotalStats region={country} />
        <Actions>
          <ShareBtn onPress={share} icon={<ShareIcon />}>
            {t('stats.country.share')}
          </ShareBtn>
          <CountryBtn onPress={openDetails} icon={<DetailsIcon />}>
            {t('stats.country.details')}
          </CountryBtn>
        </Actions>
      </Content>
      <ShareCountry
        sharing={sharing}
        onCapture={capture}
        country={country}
        history={history}
      />
    </Container>
  );
}
