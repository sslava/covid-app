import {I18nManager} from 'react-native';
import {findBestAvailableLanguage} from 'react-native-localize';
import i18n from 'i18n-js';

import {objectSort} from './utils';

import ru from '../assets/localization/ru.json';
import en from '../assets/localization/en.json';

const eng = {languageTag: 'en', isRTL: false};

export function initI18nConfig() {
  const {isRTL, languageTag} = findBestAvailableLanguage(['en', 'ru']) || eng;
  I18nManager.forceRTL(isRTL);
  i18n.fallbacks = true;
  i18n.defaultLocale = 'en';
  i18n.translations = {en, ru};
  i18n.locale = languageTag;
}

const defaultNameGetter = (c) => c.country_name_en;

const ruNameGetter = (c) => c.country_name || c.country_name_en;

function localizedNameGetter() {
  return i18n.locale === 'ru' ? ruNameGetter : defaultNameGetter;
}

export function countryName(country) {
  if (!country) {
    return '';
  }
  const getter = localizedNameGetter();
  return getter(country);
}

export function sortCountries(countries) {
  return objectSort(countries, localizedNameGetter());
}

export const formatNumber = (num: number): string =>
  num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

export const formatDate = (date: string): string =>
  new Date(date.replace(' ', 'T') + 'Z').toLocaleDateString('ru');
