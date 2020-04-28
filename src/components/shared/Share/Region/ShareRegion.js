import React from 'react';

import ShareContainer from '../ShareContainer';
import {Header, Footer, Content} from '../Tokens';

import {
  regionName,
  t,
  formatNumber,
  formatDate,
} from '../../../../common/locale';
import RegionStats from './RegionStats';

import {
  StatsContent,
  Totals,
  TotalTitle,
  TotalNumber,
} from './ShareRegion.styles';

function RegionView({sharing, onCapture, region, code}) {
  return (
    <ShareContainer sharing={sharing} onCapture={onCapture}>
      <Header title={regionName(region)} code={code} />
      <Content>
        <StatsContent>
          <Totals>
            <TotalTitle>
              {t('stats.regionShare.updatedAt', {
                date: formatDate(region.updated_at),
              })}
            </TotalTitle>
            <TotalNumber>{formatNumber(+region.total_cases)}</TotalNumber>
          </Totals>
          <RegionStats region={region} />
        </StatsContent>
        <Footer updated={region.updated_at} />
      </Content>
    </ShareContainer>
  );
}

export default function ShareRegion({sharing, ...rest}) {
  if (!sharing) {
    return null;
  }
  return <RegionView {...rest} />;
}
