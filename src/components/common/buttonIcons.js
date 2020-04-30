import React from 'react';
import styled from 'styled-components/native';

import shareIcon from '../../assets/icons/share.png';
import detialsIcon from '../../assets/icons/details.png';
import listIcon from '../../assets/icons/list.png';

const Icon = styled.Image`
  tint-color: ${(p) => p.color || p.theme.primaryTextColor};
  width: 16px;
  height: 16px;
  margin-right: 10px;
`;

const ShareImg = styled(Icon)`
  height: 22px;
  top: -2px;
`;

const ListImg = styled(Icon)`
  height: 11px;
`;

export function ShareIcon(props) {
  return <ShareImg {...props} source={shareIcon} />;
}

export function DetailsIcon(props) {
  return <Icon {...props} source={detialsIcon} />;
}

export function ListIcon(props) {
  return <ListImg {...props} source={listIcon} />;
}
