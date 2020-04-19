import React, {useMemo} from 'react';

import {View} from 'react-native';

import {t} from '../../../common/locale';
import {usePrefences} from '../../shared/Preferences';

import Subheader from '../Subheader';
import Phone from './Phone';
import Link from './Link';

import {getResources, phonesMap, linksMap} from './list';

import {List} from './Resources.styles';

export default function Resources() {
  const [prefs] = usePrefences();

  const phones = useMemo(() => getResources(phonesMap, prefs.primary), [
    prefs.primary,
  ]);
  const links = useMemo(() => getResources(linksMap, prefs.primary), [
    prefs.primary,
  ]);

  return (
    <View>
      {phones.length !== 0 && (
        <>
          <Subheader>{t('info.contacts.title')}</Subheader>
          <List>
            {phones.map((p) => (
              <Phone key={p.name} dialNumber={p.dialNumber} phone={p.phone}>
                {p.name}
              </Phone>
            ))}
          </List>
        </>
      )}
      {links.length !== 0 && (
        <>
          <Subheader>{t('info.links.title')}</Subheader>
          <List>
            {links.map((link) => (
              <Link key={link.url} url={link.url} text={link.title}>
                {link.desc}
              </Link>
            ))}
          </List>
        </>
      )}
    </View>
  );
}
