import React, {useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';

import {formatDate, countryName, t} from '../../../common/locale';

import Subheader from '../common/Subheader';
import PageLink from '../common/PageLink';
import Button from '../../shared/Button';

import shareIcon from '../../../assets/icons/share.png';

import TotalStats from './TotalStats';
import Dynamic from './Dynamic';

import changeIcon from './change.png';
import countryIcons from '../../shared/countryIcons';

import {
  Container,
  Icon,
  ChangeIcon,
  UpdatedText,
  Actions,
} from './PrimaryCountry.styles';

export default function PrimaryCountry({country}) {
  const nav = useNavigation();

  const changeCountry = useCallback(() => {
    nav.navigate('CountrySelect');
  }, [nav]);

  const icon = countryIcons[country.code];

  return (
    <Container>
      <Subheader
        icon={icon && <Icon source={icon} />}
        title={countryName(country)}
        activeOpacity={0.5}
        onPress={changeCountry}>
        <ChangeIcon source={changeIcon} />
      </Subheader>
      <Dynamic country={country} />
      <TotalStats country={country} />
      <Actions>
        {!!country.cities && (
          <PageLink route="Cities" params={{country: country.code}}>
            {t('stats.country.regionsButton')}
          </PageLink>
        )}
        <Button icon={shareIcon}>{t('stats.country.share')}</Button>
      </Actions>
      <UpdatedText>
        {t('stats.country.updatedAt', {date: formatDate(country.updated)})}
      </UpdatedText>
    </Container>
  );
}
