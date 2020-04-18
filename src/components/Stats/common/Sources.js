import React from 'react';
import styled from 'styled-components/native';
import {formatDate, t} from '../../../common/locale';

const Container = styled.View`
  padding: 20px;
`;

const SourceText = styled.Text`
  font-size: 11px;
  font-weight: 600;
  line-height: 18px;
  color: ${(p) => p.theme.secondaryTextColor};
`;

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
