import React, {useCallback, useMemo} from 'react';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import ddIcon from '../../../assets/icons/dropdown.png';

import {makeCounrtyHistorySelector} from '../../../app/historyModule';
import {countryName, t} from '../../../common/locale';

import Subheader from '../common/Subheader';
import TotalStats, {StatsContainer} from '../common/TotalStats';
import Dynamic from '../../shared/Stats/Dynamic';
import ShareCountry from '../../shared/Share/County/ShareCountry';

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
  Tappable,
} from './PrimaryCountry.styles';

export default function PrimaryCountry({code, country}) {
  const nav = useNavigation();
  const name = countryName(country);

  const historySelector = useMemo(makeCounrtyHistorySelector, []);
  const history = useSelector((s) => historySelector(s, code));

  const changeCountry = useCallback(() => nav.navigate('CountrySelect'), [nav]);
  const openDetails = useCallback(() => nav.navigate('Country', {name, code}), [
    nav,
    name,
    code,
  ]);

  const captured = useCallback(
    (tmp) =>
      shareImageDialog(tmp, t('stats.country.shareTitle', {country: name})),
    [name],
  );

  const [sharing, share, capture] = useOffscreenViewShot(captured);
  const countryIcon = countryIcons[code];

  if (!country) {
    return null;
  }

  return (
    <Container>
      <Subheader
        title={name}
        icon={countryIcon && <Icon source={countryIcon} />}
        activeOpacity={0.7}
        onPress={changeCountry}>
        <DDIcon source={ddIcon} />
      </Subheader>
      <Content>
        <Tappable activeOpacity={0.8} onPress={openDetails}>
          <Dynamic country={country} history={history} animated />
          <StatsContainer>
            <TotalStats
              total={country.total}
              recovered={country.recovered}
              deaths={country.deaths}
              active={country.active}
              deaths_new={country.deaths_new}
            />
          </StatsContainer>
        </Tappable>
        <Actions>
          <ShareBtn onPress={share} icon={<ShareIcon />}>
            {t('stats.country.share')}
          </ShareBtn>
          <CountryBtn
            onPress={openDetails}
            icon={<DetailsIcon color="white" />}>
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
