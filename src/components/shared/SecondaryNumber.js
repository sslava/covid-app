// @flow
import React from 'react';
import {Text} from 'react-native';

import {formatNumber} from '../../common/locale';

export const plusFormatter = (num: number): string => ` +${formatNumber(num)}`;

export const percentFormatter = (num: number): string =>
  ` (${num.toFixed(2)}%)`;

type Props = {
  num: number,
  style: any,
  formatter: (num: number) => string,
};

export default function SecondaryNumber({
  num,
  style,
  formatter = plusFormatter,
}: Props) {
  if (!num) {
    return null;
  }
  return <Text style={style}>{formatter(num)}</Text>;
}
