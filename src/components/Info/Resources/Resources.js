import React, {useMemo} from 'react';
import {t} from 'i18n-js';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import usePhoneCall from '../../shared/usePhoneCall';
import useBrowserLink from '../../shared/useBrowserLink';
import Subheader from '../Subheader';

import {getPhones, getLinks} from './list';

import callIcon from './call.png';
import linkIcon from './link.png';

import styles from './Resources.styles';

function Phone({phone, dialNumber, children}) {
  const call = usePhoneCall(dialNumber);

  return (
    <TouchableOpacity style={styles.button} onPress={call} activeOpacity={0.6}>
      <Text style={styles.buttonTitle}>{children}</Text>
      <View style={styles.buttonSubtitle}>
        <Text style={styles.buttonPhoneText}>{phone}</Text>
        <Image style={styles.buttonPhoneIcon} source={callIcon} />
      </View>
    </TouchableOpacity>
  );
}

function Link({url, text, children}) {
  const open = useBrowserLink(url);
  return (
    <TouchableOpacity
      style={[styles.button, styles.link]}
      onPress={open}
      activeOpacity={0.6}>
      <Text style={styles.linkTitle}>{children}</Text>
      <View style={styles.buttonSubtitle}>
        <Text style={styles.linkUrlText}>{text}</Text>
        <Image style={styles.linkUrlIcon} source={linkIcon} />
      </View>
    </TouchableOpacity>
  );
}

const country = 'Russia';

export default function Resources() {
  const phones = useMemo(() => getPhones(country), []);
  const links = useMemo(() => getLinks(country), []);

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
