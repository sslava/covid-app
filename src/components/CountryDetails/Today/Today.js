import React, {memo} from 'react';
import {t, formatDate} from '../../../common/locale';

import Dynamic from '../../shared/Stats/Dynamic';

import {ContentBlock, Header} from '../Layout';

function Today({country, history}) {
  if (!country || !history) {
    return null;
  }
  return (
    <ContentBlock>
      <Header subtitle={formatDate(country.updated)}>
        {t('country.today.title')}
      </Header>
      <Dynamic country={country} history={history} animated />
    </ContentBlock>
  );
}

export default memo(Today);
