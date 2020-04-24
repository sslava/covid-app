import React, {useCallback, useMemo} from 'react';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import {makeCountrySelector} from '../../../app/statsModule';
import {makeCounrtyHistorySelector} from '../../../app/historyModule';
import {countryName, t} from '../../../common/locale';

import Subheader from '../common/Subheader';
import TotalStats from './Blocks/TotalStats';
import Dynamic from './Blocks/Dynamic';
import ShareCountry from './Share/ShareCountry';

import {DetailsIcon, ShareIcon} from '../../shared/buttonIcons';
import {useOffscreenViewShot} from '../../shared/OffscreenViewshot';
import countryIcons from '../../shared/countryIcons';
import shareImage from '../../shared/shareImage';
import changeIcon from './assets/change.png';

import {
  Container,
  Content,
  Icon,
  ChangeIcon,
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
    (tmp) => shareImage(tmp, t('stats.country.shareTitle', {country: name})),
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
        <ChangeIcon source={changeIcon} />
      </Subheader>
      <Content>
        <Dynamic country={country} history={history} animated />
        <TotalStats country={country} />
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
