import React from 'react';

import useBrowserLink from '../../common/useBrowserLink';

import linkIcon from './link.png';

import {Button, Subtitle, Title, UrlText, UrlIcon} from './Link.styles';

export default function Link({url, text, children}) {
  const open = useBrowserLink(url);
  return (
    <Button onPress={open} activeOpacity={0.7}>
      <Title>{children}</Title>
      <Subtitle>
        <UrlText>{text}</UrlText>
        <UrlIcon source={linkIcon} />
      </Subtitle>
    </Button>
  );
}
