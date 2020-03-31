import React from 'react';

import {Image} from 'react-native';

import backImage from '../../../assets/icons/back_white.png';

import styles from './HeaderBack.styles';

export default function headerBack() {
  return (
    <Image source={backImage} width={24} height={24} style={styles.backImage} />
  );
}
