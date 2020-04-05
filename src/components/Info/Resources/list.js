import {t} from 'i18n-js';

const empty = () => [];

export function getResources(resourceMap, code) {
  const local = resourceMap[code] || empty;
  return [...resourceMap.common(code), ...local()];
}

export const phonesMap = {
  common: (alpha2) => [
    {
      dialNumber: '112',
      phone: '112',
      name: t('info.contacts.list.emergency'),
    },
  ],
  RU: () => [
    {
      dialNumber: '+7(800)2000112',
      phone: '8 800 2000 112',
      name: t('info.contacts.list.ru-hotline'),
    },
  ],
};

export const linksMap = {
  common: (alpha2) => [
    {
      title: t('info.links.list.whotitle'),
      desc: t('info.links.list.whodesc'),
      url:
        'https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public',
    },
  ],
  EN: () => [],
};
