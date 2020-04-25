import React from 'react';
import styled from 'styled-components/native';

import ShareContainer from './Share/ShareContainer';
import {Header, Footer, Content} from './Share/Tokens';

import {regionName, t, formatNumber, formatDate} from '../../common/locale';
import TotalStats from './Stats/TotalStats';
import {getRegionActiveCases} from '../../app/regionsModule';

const StatsContent = styled.View`
  padding-top: 37px;
  padding-bottom: 70px;
`;

const Totals = styled.View`
  padding-bottom: 25px;
  align-items: center;
`;

const TotalTitle = styled.Text`
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  text-align: center;
  color: #fff;
`;

const TotalNumber = styled.Text`
  margin-top: 5px
  font-weight: 500;
  font-size: 48px;
  line-height: 58px;
  text-align: center;
  color: #fff;
`;

function RegionView({sharing, onCapture, region, code}) {
  return (
    <ShareContainer sharing={sharing} onCapture={onCapture}>
      <Header title={regionName(region, true)} code={code} />
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
          <TotalStats
            total={+region.total_cases}
            recovered={+region.total_recovered}
            deaths={+region.total_deaths}
            active={getRegionActiveCases(region)}
            deaths_new={+region.new_deaths}
            total_new={+region.new_cases}
            hideTotal
            color="white"
          />
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
