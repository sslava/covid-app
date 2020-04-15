import React from 'react';

import {formatDate, t} from '../../../common/locale';

import {Container, SourceText} from './Sources.styles';

export default function Sources({date, source}) {
  return (
    <Container>
      <SourceText>
        {t('stats.source.source')}
        JHU (github.com/CSSEGISandData)
        {t('stats.source.updatedAt', {date: formatDate(date)})}
      </SourceText>
    </Container>
  );
}
