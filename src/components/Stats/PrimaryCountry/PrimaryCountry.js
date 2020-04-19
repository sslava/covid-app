import React, {useCallback, useMemo} from 'react';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import {makeCountrySelector} from '../../../app/statsModule';
import {makeCounrtyHistorySelector} from '../../../app/historyModule';
import {formatDate, countryName, t} from '../../../common/locale';

import Subheader from '../common/Subheader';
import TotalStats from './Blocks/TotalStats';
import Dynamic from './Blocks/Dynamic';
import ShareCountry from './Share/ShareCountry';

import Button from '../../shared/Button';
import {useOffscreenViewShot} from '../../shared/OffscreenViewshot';
import countryIcons from '../../shared/countryIcons';
import shareImage from '../../shared/shareImage';

import shareIcon from '../../../assets/icons/share.png';
import changeIcon from './assets/change.png';

import {
  Container,
  Content,
  Icon,
  ChangeIcon,
  UpdatedText,
  Actions,
} from './PrimaryCountry.styles';

export default function PrimaryCountry({code}) {
  const nav = useNavigation();

  const primarySelector = useMemo(makeCountrySelector);
  const country = useSelector((s) => primarySelector(s, code));

  const historySelector = useMemo(makeCounrtyHistorySelector);
  const {data: history} = useSelector((s) => historySelector(s, code));

  const changeCountry = useCallback(() => nav.navigate('CountrySelect'), [nav]);

  const name = countryName(country);

  const captured = useCallback(
    (tmp) => shareImage(tmp, t('stats.country.shareTitle', {country: name})),
    [name],
  );

  const [sharing, onShare, onCapture] = useOffscreenViewShot(captured);

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
          <Button onPress={onShare} icon={shareIcon}>
            {t('stats.country.share')}
          </Button>
        </Actions>
        <UpdatedText>
          {t('stats.country.updatedAt', {date: formatDate(country.updated)})}
        </UpdatedText>
      </Content>
      <ShareCountry
        sharing={sharing}
        onCapture={onCapture}
        country={country}
        history={history}
      />
    </Container>
  );
}
