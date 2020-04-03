import {I18nManager} from 'react-native';
import {findBestAvailableLanguage} from 'react-native-localize';
import i18n from 'i18n-js';

const translationGetters = {
  ru: () => require('../assets/localization/ru.json'),
  en: () => require('../assets/localization/en.json'),
};

// const translate = memoize(
//   (key, config) => i18n.t(key, config),
//   (key, config) => (config ? key + JSON.stringify(config) : key),
// );

const eng = {languageTag: 'en', isRTL: false};

export function setI18nConfig() {
  const langKeys = Object.keys(translationGetters);
  const {isRTL, languageTag} = findBestAvailableLanguage(langKeys) || eng;
  // translate.cache.clear();
  I18nManager.forceRTL(isRTL);
  i18n.fallbacks = true;
  i18n.translations = {[languageTag]: translationGetters[languageTag]()};
  i18n.locale = languageTag;
}
