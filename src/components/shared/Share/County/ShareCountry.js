import React from 'react';

import CountryStats from './CountryStats';
import Dynamic from '../../Stats/Dynamic';

import {countryName} from '../../../../common/locale';
import ShareContainer from '../ShareContainer';

import {Footer, Header, Content} from '../Tokens';

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
        <CountryStats country={country} />
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
