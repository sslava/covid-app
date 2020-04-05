import React, {useMemo} from 'react';
import {t} from 'i18n-js';
import {View} from 'react-native';

import {usePrefences} from '../../shared/PreferencesContext';

import Subheader from '../Subheader';
import Phone from './Phone';
import Link from './Link';

import {getResources, phonesMap, linksMap} from './list';

import styles from './Resources.styles';

export default function Resources() {
  const [prefs] = usePrefences();

  const phones = useMemo(() => getResources(phonesMap, prefs.primary), [
    prefs.primary,
  ]);
  const links = useMemo(() => getResources(linksMap, prefs.primary), [
    prefs.primary,
  ]);

  return (
    <View style={styles.container}>
      {phones.length !== 0 && (
        <>
          <Subheader>{t('info.contacts.title')}</Subheader>
          <View style={styles.list}>
            {phones.map((p) => (
              <Phone key={p.name} dialNumber={p.dialNumber} phone={p.phone}>
                {p.name}
              </Phone>
            ))}
          </View>
        </>
      )}
      {links.length !== 0 && (
        <>
          <Subheader>{t('info.links.title')}</Subheader>
          <View style={styles.list}>
            {links.map((link) => (
              <Link key={link.url} url={link.url} text={link.title}>
                {link.desc}
              </Link>
            ))}
          </View>
        </>
      )}
    </View>
  );
}
