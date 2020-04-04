import {I18nManager} from 'react-native';
import {findBestAvailableLanguage} from 'react-native-localize';
import i18n from 'i18n-js';

import {objectSort} from './utils';

import ru from '../assets/localization/ru.json';
import en from '../assets/localization/en.json';

i18n.fallbacks = true;
i18n.defaultLocale = 'en';

const eng = {languageTag: 'en', isRTL: false};

export function initI18nConfig() {
  const {isRTL, languageTag} = findBestAvailableLanguage(['en', 'ru']) || eng;
  I18nManager.forceRTL(isRTL);
  i18n.translations = {en, ru};
  i18n.locale = languageTag;
}

const codeNameGetter = (c) => {
  const scope = i18n.locale === 'ru' ? ru.alpha2 : en.alpha2;
  return scope[c.code] || c.country_name_en;
};

export function countryName(country) {
  return !country ? '' : codeNameGetter(country);
}

export function sortCountries(countries) {
  return objectSort(countries, codeNameGetter);
}

export const formatNumber = (num: number): string =>
  num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

export const formatDate = (date: string): string =>
  new Date(date.replace(' ', 'T') + 'Z').toLocaleDateString('ru');
