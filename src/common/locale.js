import {I18nManager} from 'react-native';

import {findBestAvailableLanguage} from 'react-native-localize';
import i18n from 'i18n-js';

import ru from '../assets/localization/ru.json';
import en from '../assets/localization/en.json';

const eng = {languageTag: 'en', isRTL: false};

export function initI18nConfig() {
  const {isRTL, languageTag} = findBestAvailableLanguage(['en', 'ru']) || eng;
  // translate.cache.clear();
  I18nManager.forceRTL(isRTL);
  i18n.fallbacks = true;
  i18n.defaultLocale = 'ru';
  i18n.translations = {en, ru};
  i18n.locale = languageTag;
}
