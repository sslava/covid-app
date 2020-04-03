import i18njs from 'i18n-js';
import React, {useContext, createContext, useMemo} from 'react';
import {initI18nConfig} from '../../common/locale';

const I18nContext = createContext(null);

export function I18nProvider({children}) {
  const value = useMemo(() => ({locale: i18njs.locale}), []);
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  return useContext(I18nContext);
}

export function countryName(country) {
  if (!country) {
    return '';
  }
  return i18njs.locale === 'ru'
    ? country.country_name || country.country_name_en
    : country.country_name_en;
}

initI18nConfig();
