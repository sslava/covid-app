import React from 'react';

import {
  Container,
  AdView,
  Inner,
  Content,
  ADIcon,
  CallToAction,
  Tagline,
  Headline,
  Advertiser,
} from './AdmobBlock.styles';

export default function AdmobBlock({unitId}) {
  if (!unitId) {
    return null;
  }

  return (
    <AdView adUnitID={unitId} enableTestMode={false}>
      <Container>
        <ADIcon />
        <Inner>
          <Content>
            <Headline />
            <Tagline numberOfLines={1} />
            <Advertiser />
          </Content>
          <CallToAction
            textStyle={{color: 'white', fontSize: 14}}
            style={{elevation: 100}}
          />
        </Inner>
      </Container>
    </AdView>
  );
}
