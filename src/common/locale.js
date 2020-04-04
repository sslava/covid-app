import {I18nManager} from 'react-native';
import {findBestAvailableLanguage, getLocales} from 'react-native-localize';
import i18n from 'i18n-js';

import ru from '../assets/localization/ru.json';
import en from '../assets/localization/en.json';

const eng = {languageTag: 'en', isRTL: false};

export function initI18nConfig() {
  console.log(getLocales());
  const {isRTL, languageTag} = findBestAvailableLanguage(['en', 'ru']) || eng;
  I18nManager.forceRTL(isRTL);
  i18n.fallbacks = true;
  i18n.defaultLocale = 'en';
  i18n.translations = {en, ru};
  i18n.locale = languageTag;
}

export function countryName(country) {
  if (!country) {
    return '';
  }
  return i18n.locale === 'ru'
    ? country.country_name || country.country_name_en
    : country.country_name_en;
}

export const formatNumber = (num: number): string =>
  num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

export const formatDate = (date: string): string =>
  new Date(date.replace(' ', 'T') + 'Z').toLocaleDateString('ru');
