export function getPhones(t, country) {
  const common = [
    {
      dialNumber: '112',
      phone: '112',
      name: t('info.contacts.list.emergency'),
    },
  ];
  if (country === 'Russia') {
    return [
      {
        dialNumber: '+7(800)2000112',
        phone: '8 800 2000 112',
        name: t('info.contacts.list.ru-hotline'),
      },
      ...common,
    ];
  }
  return common;
}

export function getLinks(t, country) {
  if (country === 'Russia') {
    return [
      {
        title: t('info.links.list.whotitle'),
        desc: t('info.links.list.whodesc'),
        url:
          'https://www.who.int/ru/emergencies/diseases/novel-coronavirus-2019/advice-for-public',
      },
    ];
  }
  return [
    {
      title: t('info.links.list.whotitle'),
      desc: t('info.links.list.whodesc'),
      url:
        'https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public',
    },
  ];
}
