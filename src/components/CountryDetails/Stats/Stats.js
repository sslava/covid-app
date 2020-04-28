import React from 'react';
import {useSelector} from 'react-redux';
import {t} from '../../../common/locale';
import {worldSelector} from '../../../app/statsModule';

import {ContentBlock, Header} from '../Layout';
import Comparison from './Comparison';

export default function Stats({country, history}) {
  const world = useSelector(worldSelector);
  return (
    <ContentBlock>
      <Header>{t('country.all.title')}</Header>
      {worldSelector && <Comparison country={country} world={world} />}
    </ContentBlock>
  );
}
