import React from 'react';
import styled from 'styled-components/native';
import {useSelector} from 'react-redux';
import {TouchableOpacity} from 'react-native';

import {preferredCountryCodeSelector} from '../../app/preferencesModule';
import {t} from '../../common/locale';

import useBrowserLink from '../common/useBrowserLink';

const Container = styled.View`
  padding-horizontal: 25px;
  flex-direction: row;
  justify-content: flex-end;
`;

const T = styled.Text`
  padding-left: 20px;
  font-size: 15px;
  font-weight: 600;
  line-height: 20px;
  color: ${(p) => p.theme.secondaryTextColor};
`;

const Link = styled.Text`
  color: #007aff;
`;

export default function VerbaLink() {
  const code = useSelector(preferredCountryCodeSelector);
  const pressLink = useBrowserLink('http://verbaclinic.ru/');

  if (code !== 'RU') {
    return null;
  }

  return (
    <Container>
      <TouchableOpacity activeOpacity={0.5} onPress={pressLink}>
        <T>
          {t('info.verba.text')}
          <Link>{t('info.verba.link')}</Link>
        </T>
      </TouchableOpacity>
    </Container>
  );
}
