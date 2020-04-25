import React from 'react';

import {formatDate} from '../../../common/locale';
import countryIcons from '../../common/countryIcons';

import favicon from '../../../assets/icons/favicon.png';

import {
  HeaderContainer,
  CountryIcon,
  Title,
  Updated,
  Content,
  FooterContainer,
  AppIcon,
  FooterContent,
  FooterLink,
  FooterText,
} from './Tokens.styles';

export function Header({title, updated, code}) {
  const countryIcon = countryIcons[code];
  return (
    <HeaderContainer>
      {countryIcon && <CountryIcon source={countryIcon} />}
      <Title>{title}</Title>
      <Updated>{formatDate(updated)}</Updated>
    </HeaderContainer>
  );
}

export function Footer({updated}) {
  return (
    <FooterContainer>
      <AppIcon source={favicon} />
      <FooterContent>
        <FooterText>
          Made in Coronavirus Monitor App <FooterLink>covidum.com</FooterLink>
        </FooterText>
        <FooterText>
          Source JHU (github.com/CSSEGISandData), Updated {formatDate(updated)}
        </FooterText>
      </FooterContent>
    </FooterContainer>
  );
}

export {Content};
