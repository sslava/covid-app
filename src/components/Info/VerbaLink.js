import React from 'react';
import styled from 'styled-components/native';

import {TouchableOpacity} from 'react-native';

import {t} from '../../common/locale';
import useBrowserLink from '../shared/useBrowserLink';
import {usePrefences} from '../shared/PreferencesContext';

const Container = styled.View`
  padding-horizontal: 25px;
  flex-direction: row;
  justify-content: flex-end;
`;

const T = styled.Text`
  font-family: 'Ubuntu';
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
  const [prefs] = usePrefences();
  const pressLink = useBrowserLink('http://verbaclinic.ru/');

  if (prefs.primary !== 'RU') {
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
