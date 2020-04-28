import React from 'react';
import {t} from '../../../common/locale';

import {ContentBlock, Header} from '../Layout';

export default function Stats({country, history}) {
  return (
    <ContentBlock>
      <Header>{t('country.all.title')}</Header>
    </ContentBlock>
  );
}
