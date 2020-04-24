import React, {useRef, useEffect, useCallback, useState} from 'react';

import TotalStats from '../../common/TotalStats';
import Dynamic from '../Blocks/Dynamic';
import {OffscreenViewShot} from '../../../common/OffscreenViewshot';

import bg from '../../../../assets/icons/sharebg.png';
import favicon from '../../../../assets/icons/favicon.png';

import {
  Container,
  Header,
  Content,
  Title,
  Updated,
  Icon,
  Footer,
  AppIcon,
  FooterContent,
  FooterText,
  FooterLink,
} from './ShareCountry.styles';

import {countryName, formatDate} from '../../../../common/locale';
import countryIcons from '../../../common/countryIcons';

function CountryView({sharing, onCapture, country, history}) {
  const viewshotRef = useRef();
  const [loaded, setLoaded] = useState(false);
  const loadEnd = useCallback(() => setLoaded(true), []);

  useEffect(() => {
    if (loaded && viewshotRef.current) {
      viewshotRef.current.capture();
    }
  }, [loaded]);

  const countryIcon = countryIcons[country.code];
  return (
    <OffscreenViewShot
      ref={viewshotRef}
      onCapture={onCapture}
      options={{
        format: 'jpg',
        quality: 0.8,
        result: 'tmpfile',
      }}>
      <Container source={bg} onLoad={loadEnd}>
        <Header>
          {countryIcon && <Icon source={countryIcon} />}
          <Title>{countryName(country)}</Title>
          <Updated>{formatDate(country.updated)}</Updated>
        </Header>
        <Content>
          <Dynamic country={country} history={history} color="white" />
          <TotalStats
            total={country.total}
            recovered={country.recovered}
            deaths={country.deaths}
            active={country.active}
            deaths_new={country.deaths_new}
            color="white"
          />
          <Footer>
            <AppIcon source={favicon} />
            <FooterContent>
              <FooterText>
                Made in Coronavirus Monitor App{' '}
                <FooterLink>covidum.com</FooterLink>
              </FooterText>
              <FooterText>
                Source JHU (github.com/CSSEGISandData), Updated{' '}
                {formatDate(country.updated)}
              </FooterText>
            </FooterContent>
          </Footer>
        </Content>
      </Container>
    </OffscreenViewShot>
  );
}

export default function ShareCountry({sharing, ...rest}) {
  if (!sharing) {
    return null;
  }
  return <CountryView {...rest} />;
}
