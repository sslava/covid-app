import {I18nManager} from 'react-native';

import i18n from 'i18n-js';
import * as RNLocalize from 'react-native-localize';
import memoize from './memoize';

import {objectSort} from './utils';

import ru from '../assets/localization/ru.json';
import en from '../assets/localization/en.json';

i18n.fallbacks = true;
i18n.defaultLocale = 'en';
i18n.missingTranslation = () => null;

const eng = {languageTag: 'en', isRTL: false};

export function initI18nConfig() {
  const {isRTL, languageTag} =
    RNLocalize.findBestAvailableLanguage(['en', 'ru']) || eng;
  I18nManager.forceRTL(isRTL);
  i18n.translations = {en, ru};
  i18n.locale = languageTag;
}

export const t = memoize(
  (key, config) => i18n.t(key, config),
  (key, config) => (config ? key + JSON.stringify(config) : key),
);

function localeCountryName(c: Object) {
  if (i18n.locale === 'ru') {
    return c.country_name || c.country_name_en;
  }
  return c.country_name_en;
}

const translateCountryName = (c: Object) =>
  t(c.code, {scope: 'alpha2'}) || localeCountryName(c);

export function countryName(country: Object) {
  return !country ? '' : translateCountryName(country);
}

export function regionName(region: Object) {
  if (!region) {
    return '';
  }
  return i18n.locale === 'ru'
    ? region.region_name_short || region.region_name_short_en
    : region.region_name_short_en;
}

export function sortCountries(countries: Array<Object>) {
  return objectSort(countries, translateCountryName);
}

export const formatNumber = (num: number): string =>
  i18n.toNumber(+num, {precision: 0, delimiter: ' '});

export const parseDate = (date: string): Date =>
  new Date(date.replace(' ', 'T') + 'Z');

export const formatDate = (date: string): string =>
  parseDate(date).toLocaleDateString(i18n.locale);

export const matchCountry = (query: srting, c: Object) =>
  countryName(c).toLowerCase().indexOf(query) !== -1 ||
  c.country_name_en.toLowerCase().indexOf(query) !== -1;

export function sortRegions(regions: Array<Object>) {
  return objectSort(regions, regionName);
}

export const matchRegion = (query: srting, r: Object) =>
  regionName(r).toLowerCase().indexOf(query) !== -1 ||
  r.region_name_en.toLowerCase().indexOf(query) !== -1;

const alpha2Map = {
  ru: 'RU',
  en: 'US',
};

export function getCurrentCountryCode() {
  const code = RNLocalize.getCountry();
  if (en.alpha2[code]) {
    return code;
  }
  return alpha2Map[i18n.locale] || 'US';
}
