import React from 'react';

import {Image} from 'react-native';

import backImage from '../../../assets/icons/back_white.png';
import closeImage from '../../../assets/icons/close.png';

import styles from './HeaderBack.styles';

export function HeaderBack() {
  return (
    <Image source={backImage} width={24} height={24} style={styles.backImage} />
  );
}

export function HeaderClose() {
  return (
    <Image
      source={closeImage}
      width={24}
      height={24}
      style={styles.backImage}
    />
  );
}
