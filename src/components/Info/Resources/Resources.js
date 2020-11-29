import React, {useMemo} from 'react';
import {useSelector} from 'react-redux';

import {View} from 'react-native';

import {t} from '../../../common/locale';
import {preferredCountryCodeSelector} from '../../../app/preferencesModule';

import Subheader from '../Subheader';
import Phone from './Phone';
import Link from './Link';

import {getResources, phonesMap, linksMap} from './list';

import {List} from './Resources.styles';

export default function Resources() {
  const primary = useSelector(preferredCountryCodeSelector);

  const phones = useMemo(() => getResources(phonesMap, primary), [primary]);
  const links = useMemo(() => getResources(linksMap, primary), [primary]);

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
