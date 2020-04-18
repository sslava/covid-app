import React, {useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import {formatDate, countryName, t} from '../../../common/locale';

import Button from '../../shared/Button';

import Subheader from '../common/Subheader';
import TotalStats from './Blocks/TotalStats';
import Dynamic from './Blocks/Dynamic';
import ShareCountry from './Share/ShareCountry';

import {useOffscreenViewShot} from '../../shared/OffscreenViewshot';

import shareIcon from '../../../assets/icons/share.png';
import changeIcon from './assets/change.png';

import countryIcons from '../../shared/countryIcons';
import shareImage from '../../shared/shareImage';

import {
  Container,
  Content,
  Icon,
  ChangeIcon,
  UpdatedText,
  Actions,
} from './PrimaryCountry.styles';

const data = [
  {value: 20, label: '2'},
  {value: 400, label: '3'},
  {value: 800, label: '4'},
  {value: 500, label: '4'},
  {value: 800, label: '6'},
  {value: 500, label: '4'},
  {value: 500, label: '4'},
  {value: 500, label: '4'},
  {value: 500, label: '4'},
  {value: 500, label: '4'},
  {value: 750, label: '5'},
];

export default function PrimaryCountry({country}) {
  const nav = useNavigation();

  const changeCountry = useCallback(() => {
    nav.navigate('CountrySelect');
  }, [nav]);

  const name = countryName(country);
  const captured = useCallback(
    (tmp) => shareImage(tmp, t('stats.country.shareTitle', {country: name})),
    [name],
  );
  const [sharing, onShare, onCapture] = useOffscreenViewShot(captured);

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
        <Dynamic country={country} data={data} animated />
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
        data={data}
      />
    </Container>
  );
}
