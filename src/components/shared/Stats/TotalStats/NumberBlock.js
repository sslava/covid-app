import React from 'react';

import {formatNumber} from '../../../../common/locale';

import {
  ContainerElem,
  CaptionElem,
  NumberElem,
  TodayElem,
} from './NumberBlock.styles';

export function Caption({color, style, todayColor, children}) {
  return (
    <Caption
      style={style}
      numberOfLines={1}
      todayColor={todayColor}
      color={color}>
      {children}
    </Caption>
  );
}

export function Number({color, style, children}) {
  return (
    <NumberElem numberOfLines={1} style={style} color={color}>
      {children}
    </NumberElem>
  );
}

export default function NumberBlock({
  caption,
  style,
  number,
  today,
  color,
  todayColor,
  align = 'flex-start',
  large = false,
}) {
  return (
    <ContainerElem align={align} style={style}>
      <CaptionElem todayColor={todayColor} color={color}>
        {caption}
      </CaptionElem>
      <Number large={large} numberOfLines={1} color={color}>
        {formatNumber(number)}
        <TodayElem large={large} num={+today} color={todayColor} />
      </Number>
    </ContainerElem>
  );
}
