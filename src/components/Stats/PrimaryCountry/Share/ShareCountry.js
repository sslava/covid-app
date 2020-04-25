import React from 'react';

import TotalStats, {StatsContainer} from '../../common/TotalStats';
import Dynamic from '../Blocks/Dynamic';

import {countryName} from '../../../../common/locale';

import ShareContainer from '../../../shared/Share/ShareContainer';
import {Footer, Header, Content} from '../../../shared/Share/Tokens';

function CountryView({sharing, onCapture, country, history}) {
  return (
    <ShareContainer sharing={sharing} onCapture={onCapture}>
      <Header
        code={country.code}
        title={countryName(country)}
        updated={country.updated}
      />
      <Content>
        <Dynamic country={country} history={history} color="white" />
        <StatsContainer color="white">
          <TotalStats
            total={country.total}
            recovered={country.recovered}
            deaths={country.deaths}
            active={country.active}
            deaths_new={country.deaths_new}
            color="white"
          />
        </StatsContainer>
        <Footer updated={country.updated} />
      </Content>
    </ShareContainer>
  );
}

export default function ShareCountry({sharing, ...rest}) {
  if (!sharing) {
    return null;
  }
  return <CountryView {...rest} />;
}
